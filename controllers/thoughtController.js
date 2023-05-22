const { User, Thought, Reaction } = require("../models");
const missingIdMessage = require("../utils/errormsg");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res
          .status(404)
          .json({ message: missingIdMessage("thought", req.params.thoughtId) });
      }
      return res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      res.json({
        message: "Thought created successfully.",
        thoughts: user.thoughts,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: missingIdMessage("thought", req.params.thoughtId) });
      }

      res.json({ message: "Thought updated successfully.", thought: thought });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res
          .status(404)
          .json({ message: missingIdMessage("thought", req.params.thoughtId) });
      }

      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "No user with this thought id " + req.params.thoughtId,
        });
      }

      res.json({ message: "Thought deleted successfully!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);

      if (!thought) {
        return res
          .status(404)
          .json({ message: missingIdMessage("thought", req.params.thoughtId) });
      }

      // create a new reaction here, so I can return the ID of the reaction in the json response.
      const reaction = new Reaction(req.body);

      thought.reactions.push(reaction);

      await thought.save();

      res.json({
        message: "Reaction created successfully!",
        newReactionId: reaction._id,
        reactions: thought.reactions,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: missingIdMessage("thought", req.params.thoughtId) });
      }
      res.json({
        message: "Reaction deleted successfully!",
        reactions: thought.reactions,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
