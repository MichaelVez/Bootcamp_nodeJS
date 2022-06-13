var uniqid = require("uniqid");
const fs = require("fs");
// fs.writeFileSync("./newfile.txt", "textt2"); //overwrite existing
//read
const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const datajson = dataBuffer.toString();
    const data = JSON.parse(datajson);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
//create
const add = (newUser) => {
  const data = loadUsers();
  data.push({ ...newUser, id: uniqid() });
  fs.writeFileSync("./users.json", JSON.stringify(data));
  console.log(data);
};
// add({ name: "newUser", mail: "newUser@gmail.com" });
// console.log(loadUsers());

const deleteUser = (id) => {
  let data = loadUsers().filter((user) => {
    return user.id !== id;
  });
  fs.writeFileSync("./users.json", JSON.stringify(data));
};
// deleteUser("1");
const updateUser = (id, name, email) => {
  const users = loadUsers();
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    const updatedUser = { ...users[userIndex], name, email };
    users[userIndex] = updatedUser;
    fs.writeFileSync("./users.json", JSON.stringify(users));
  } else {
    console.log("No user with that specific id");
  }
};
// updateUser("2", "michael");
