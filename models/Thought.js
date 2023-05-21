const { Schema, Types, model } = require("mongoose");
const DayJS = require("dayjs");

const dayjs = new DayJS();

const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
  },
});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJson: {
      virtual: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

function formatDate(createdAt) {
  return dayjs(createdAt).formatDate("MMMM D, YYYY");
}

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
