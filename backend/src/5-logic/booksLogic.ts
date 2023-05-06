import { OkPacket } from "mysql"
import dal from "../2-utils/dal"

import { ResourceNotFoundErrorModel } from "../4-model/errorModel"
import genreModel from "../4-model/genreModel"
import bookModel from "../4-model/bookModel"


async function getAllGenres() :Promise <genreModel[]> {
  const sql = `SELECT * from genre `
  const genre = await dal.execute(sql)
  return genre
}

async function getAllBooks() :Promise <bookModel[]> {
const sql= `
SELECT B.*,G.genre 
FROM books AS B  JOIN genre AS G
 ON B.genreID = G.genreID
`;
  const productsByCategory = await dal.execute(sql)
  return productsByCategory
}

async function addBook(book:bookModel):Promise <bookModel> {
  const sql = `
  INSERT INTO books
  VALUES (  DEFAULT,
     ?,
     ?,
     ?,
     ?,
     ?
     )`;
 
     const info:OkPacket = await dal.execute(sql,[book.bookName,book.summary,book.genreID,book.price,book.stock])
     
    book.bookId= info.insertId

     return book

}

async function deleteBook (bookId:number):Promise<void>
{ 
  const sql =`DELETE FROM books WHERE books.bookId = ?;`
  
  const info:OkPacket =await dal.execute(sql,[bookId])
  if(info.affectedRows ===0) throw new ResourceNotFoundErrorModel(bookId)
}

// async function updateProduct (product:ProductModel):Promise<ProductModel>{
//      const sql=`UPDATE products SET
//       productName = ?,
//       manufacturingDate = ?,
//       expireDate=?,
//       productCategoryId=?,
//       price=?
//       WHERE productId =?
//      `
//      const info:OkPacket = await dal.execute(sql,[product.productName,product.manufacturingDate,product.expireDate,product.productCategoryId,product.price,product.productId])
//     if(info.affectedRows===0) throw new ResourceNotFoundErrorModel(product.productId)
//      return product
// } 
export default {
    getAllGenres,
    getAllBooks,
    deleteBook,
    addBook
    // getProductByCategory,
    // deleteProduct,
    // updateProduct
}