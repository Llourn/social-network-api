const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users, thoughtText, reactions } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("⚡️ Connected");
  // Clear out the database.
  await Thought.deleteMany({});
  await User.deleteMany({});

  // Add all users.
  const usersData = await User.insertMany(users);

  let updateFriendsOps = [];
  let updateThoughtsOps = [];
  let addThoughtsToSets = [];

  let thoughtIndex = 0;

  usersData.forEach((user) => {
    const newFriends = chooseRandomArrItems(usersData, 2);

    let newReactions = [];

    // Add 4 thoughts to each user. This only works because there are 4x as many thoughts as users.
    for (let i = 0; i < 4; i++) {
      // Add as many reactions as there are in the same index position in the reactions array.
      for (let j = 0; j < reactions[thoughtIndex].length; j++) {
        const newReaction = {
          reactionBody: reactions[thoughtIndex][j],
          username: getRandomArrItem(usersData).username,
        };

        newReactions.push(newReaction);
      }

      // Build the new Thought, and add the reactions.
      const newThought = new Thought({
        thoughtText: thoughtText[thoughtIndex],
        username: user.username,
        userId: user._id,
        reactions: newReactions,
      });

      thoughtIndex++;

      // Push Thought creation queries to array.
      updateThoughtsOps.push(Thought.create(newThought));

      // Push Add-To-Set queries to array.
      addThoughtsToSets.push(
        User.findOneAndUpdate(
          { _id: newThought.userId },
          { $addToSet: { thoughts: newThought._id } },
          { new: true }
        )
      );
    }

    // Push new friends query to array.
    updateFriendsOps.push(
      User.updateOne(
        { _id: user._id },
        {
          $push: {
            friends: { $each: newFriends },
          },
        },
        { runValidators: true, new: true }
      )
    );
  });

  // Execute all queries.
  await Promise.all(updateFriendsOps)
    .then(() => {
      console.log("Friends added to each user succesfully.");
    })
    .catch((err) => console.log(err));

  await Promise.all(updateThoughtsOps)
    .then(() => {
      console.log("Thoughts added succesfully.");
    })
    .catch((err) => console.log(err));

  await Promise.all(addThoughtsToSets)
    .then(() => {
      console.log("Thoughts added to sets succesfully.");
    })
    .catch((err) => console.log(err));

  console.info("Seeding complete! 🌱");

  process.exit(0);
});

const chooseRandomArrItems = (arr, numberOfItems) => {
  let newArr = [];
  for (let i = 0; i < numberOfItems; i++) {
    newArr.push(getRandomArrItem(arr));
  }
  return newArr;
};

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
