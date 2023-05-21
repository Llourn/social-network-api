const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  deleteReaction,
  createReaction,
} = require("../../controllers/thoughtController");

const router = require("express").Router();

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

// api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
