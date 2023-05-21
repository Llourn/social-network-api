const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("⚡️ Connected");
  await Thought.deleteMany({});
  await User.deleteMany({});

  const usersData = await User.insertMany(users);

  const updateFriendsOperations = usersData.map((user) => {
    const newFriends = chooseRandomArrItems(usersData, 2);
    return User.updateOne(
      { _id: user._id },
      { $push: { friends: { $each: newFriends } } },
      { runValidators: true, new: true }
    );
  });

  await Promise.all(updateFriendsOperations)
    .then(() => {
      console.log("Friends added to each user succesfully.");
    })
    .catch((err) => console.log(err));

  console.table(users);

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
