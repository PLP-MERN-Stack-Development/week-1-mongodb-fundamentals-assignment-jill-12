
# MongoDB Fundamentals Assignment

This repository contains files for the MongoDB Fundamentals Assignment from PLP-MERN Stack Development. The goal is to demonstrate basic CRUD operations using a sample bookstore database.



 📁 Files Included

- `insert_books.js` – Script that inserts book data into the `books` collection.
- `queries.js` – A file containing MongoDB queries for retrieving and manipulating book records.
- `README.md` – Instructions on how the assignment was completed and how to run the files.
- `screenshot.png` – Screenshot showing the `books` collection and sample documents in MongoDB Compass or terminal.

---

💻 How the Assignment Was Completed

 Prerequisites

- MongoDB installed and running locally
- `mongosh` available (MongoDB shell)
- VS Code or any terminal environment


 Step 1: Insert Data Using `insert_books.js`

The `insert_books.js` file contains an array of book documents to be inserted into the `books` collection inside the `plp_bookstore` database.

To insert the data, the following commands were run in the terminal:

```bash
mongosh
then inside the mongosh shell: 
use plp_bookstore
load("insert_books.js")This command loads and executes the insert_books.js script, inserting the books into the collection.

After loading the data, the following command was used to view the inserted documents in a formatted manner:
db.books.find().pretty()



Run Queries

Open the queries.js file and manually copy-paste the queries into your MongoDB shell or Compass query tab.


The screenshot (screenshot.png) shows the books collection inside the plp_bookstore database with sample data.


 
 Notes

    Make sure MongoDB is running before executing the script.

    Your database name should be plp_bookstore.

    You can verify data using MongoDB Compass or Atlas.


    
    
    Submission Checklist

insert_books.js added

queries.js added

README.md with instructions

Screenshot showing collection and data


After pasting, save the file and make sure it's in your cloned repo folder. Then follow up with:

```bash
git add README.md
git commit -m "Add README with instructions"
git push origin main