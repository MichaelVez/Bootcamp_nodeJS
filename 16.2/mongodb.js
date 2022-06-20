const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("unable to connect");
      return;
    }
    const db = client.db(databaseName);
    db.collection("users").insertMany([
      {
        name: "michael v",
        email: "example@gmail.com",
        content: { posts: [], comments: [] },
      },
      {
        name: "josh c",
        email: "example2@gmail.com",
        content: { posts: [], comments: [] },
      },
    ]);
    db.collection("posts").insertOne({
      postContent: "this is my first post",
      postComments: [],
    });
    db.collection("comments").insertOne({
      commentContent: "this is my first comment",
      postComments: [],
      commentLocation: "postID",
      userID: "postedBy",
    });

    console.log("server is live");
  }
);
