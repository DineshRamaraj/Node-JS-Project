const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

// console.log(__dirname);
const dbPath = path.join(__dirname, "goodreads.db");
// console.log(dbPath);

const app = express();

const initializeDBandServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    // console.log(db);

    app.listen(3000, () => {
      console.log("Server Running at http://localhost/3000/");
    });
  } catch (err) {
    console.log(`DB.Error: ${err.message}`);
    process.exit(1);
  }
};

initializeDBandServer();

app.get("/books/", async (request, response) => {
  const getBooksQuery = `
    SELECT *
    FROM
    book
    ORDER BY book_id;`;
  const booksArray = await db.all(getBooksQuery);
  //   console.log(booksArray);
  response.send(booksArray);
});
