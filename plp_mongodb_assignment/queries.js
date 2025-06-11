//Find all books in a specific genre
db.books.find({ genre: "Dystopian" })

//Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } })

//Find books by a specific author 
db.books.find({ author: "Jane Austen" })

//Update the price of a specific book
db.books.updateOne(
  { title: "the Hobbit" },
  { $set: { price: 15.99 } }
)

//Delete a book by its title
db.books.deleteOne({ title: "1984" })

//Advanced Queries

db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})


//Use projection to return only the title, author, and price fields
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

//Sorting by price ascending
db.books.find().sort({ price: 1 })

//Sorting by price descending
db.books.find().sort({ price: -1 })


    //Pagination - limit and skip (5 books per page)

    //Page 1 (skip 0):
db.books.find().limit(5).skip(0)

//Page 2 (skip 5):
db.books.find().limit(5).skip(5)


//Aggregation pipeline
//it groups by genre,calculates the average price in each group
// and counts how many books per genre.

db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      count: { $sum: 1 }
    }
  }
])


//this groups by author,counts the number of books,sorts
//desceding and limits to the top 1
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { totalBooks: -1 }
  },
  {
    $limit: 1
  }
])



//Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }
    }
  },
  {
    $group: {
      _id: "$decade",
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])


//indexing
// an index on the title field
db.books.createIndex({ title: 1 })


//a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

//explain() to demonstrate index performance
db.books.find({ title: "The Great Gatsby" }).explain("executionStats")