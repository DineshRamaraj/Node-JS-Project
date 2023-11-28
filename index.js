const express = require("express");
<<<<<<< HEAD
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
app.use(express.json());
const dbPath = path.join(__dirname, "goodreads.db");

let db = null;

const initializeDBAndServer = async () => {
=======
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

// console.log(__dirname);
const dbPath = path.join(__dirname, "goodreads.db");
// console.log(dbPath);

const app = express();

const initializeDBandServer = async () => {
>>>>>>> 39ceb395dd3ab1294d2a382c71286efa1c82f2c2
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
<<<<<<< HEAD
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();

// Get Books API
app.get("/books/", async (request, response) => {
  const getBooksQuery = `
    SELECT
      *
    FROM
      book
    ORDER BY
      book_id;`;
  const booksArray = await db.all(getBooksQuery);
  response.send(booksArray);
});

//Get Book API
app.get("/books/:bookId/", async (request, response) => {
  const { bookId } = request.params;
  const getBooksQuery = `
    SELECT * FROM book WHERE book_id = ${bookId}`;

  const book = await db.get(getBooksQuery);
  response.send(book);
  //   response.send("Hello World");
});

app.post("/books/", async (request, response) => {
  const bookDetails = request.body;
  const {
    title,
    authorId,
    rating,
    ratingCount,
    reviewCount,
    description,
    pages,
    dateOfPublication,
    editionLanguage,
    price,
    onlineStores,
  } = bookDetails;

  const addBookQuery = `
    INSERT INTO
      book (title,author_id,rating,rating_count,review_count,description,pages,date_of_publication,edition_language,price,online_stores)
    VALUES
      (
        '${title}',
         ${authorId},
         ${rating},
         ${ratingCount},
         ${reviewCount},
        '${description}',
         ${pages},
        '${dateOfPublication}',
        '${editionLanguage}',
         ${price},
        '${onlineStores}'
      );`;

  const dbResponse = await db.run(addBookQuery);
  const bookID = dbResponse.lastID;
  response.send({ bookId: bookID });
  console.log(dbResponse);
});
=======

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
>>>>>>> 39ceb395dd3ab1294d2a382c71286efa1c82f2c2
