const { User, Thought } = require("../models");
const missingIdMessage = require("../utils/errormsg");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("thoughts")
        .populate("friends");

      if (!user) {
        return res
          .status(404)
          .json({ message: missingIdMessage("user", req.params.userId) });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);

      res.json({ message: "User created successfully.", user: user });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: missingIdMessage("user", req.params.userId) });
      }

      res.json({ message: "User updated successfully.", user: user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete a user and associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res
          .status(404)
          .json({ message: missingIdMessage("user", req.params.userId) });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add a friend to user
  async createFriend(req, res) {
    try {
      const friend = await User.findOne({ _id: req.params.friendId });

      if (!friend) {
        return res.status(404).json({
          message: missingIdMessage("user(friend)", req.params.friendId),
        });
      }

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: friend } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: missingIdMessage("user", req.params.userId) });
      }

      res.json({
        message: "Friend added successfully!",
        friends: user.friends,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // remove friend
  async deleteFriend(req, res) {
    try {
      console.log(req.params.userId);
      console.log(req.params.friendId);
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: missingIdMessage("user", req.params.userId) });
      }

      res.json({
        message: "Friend removed successfully!",
        friends: user.friends,
      });
    } catch (err) {
      res.status(505).json(err);
    }
  },
};
