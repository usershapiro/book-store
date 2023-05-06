import express, { NextFunction, Request, Response, request } from "express";
import booksLogic from "../5-logic/booksLogic";
import bookModel from "../4-model/bookModel";


const router = express.Router()

//listen on http://localhost:3001/api/categories        
router.get("/genre" , async(request:Request , response:Response , next:NextFunction)=>{
try{
   const genre = await booksLogic.getAllGenres()
   response.json(genre)


}
catch(err:any){
    next(err)
}
})

//listen on http://localhost:3001/api/books
router.get("/books",async(request:Request , response:Response , next:NextFunction)=>{
   try{
   
    const books = await booksLogic.getAllBooks()
    response.json(books)
   }
   catch(err:any){
    next(err);
   }
   
})

//listen on http://localhost:3001/api/products
router.post("/books" , async(request:Request , response:Response , next:NextFunction)=>{
  try{
    const book = new bookModel(request.body)
    const addedbook = await booksLogic.addBook(book)
    response.status(201).json(addedbook)
  }
  catch(err:any){
    next(err);
  }
  
    
}) 

//listen on http://localhost:3001/api/delete-book/:bookId
router.delete("/delete-book/:bookId",async(request:Request , response:Response , next:NextFunction)=>{
 try{
      const bookId = +request.params.bookId
      await booksLogic.deleteBook(bookId)
      response.json(204)
      
 }
 catch(err:any){
    next(err)
 }
})

// //listen on http://localhost:3001/api/edit-product/:productId
// router.put("/edit-product/:productId",async(request:Request,response:Response,next:NextFunction)=>{
// try{
//   const product= new ProductModel(request.body);
//   const updateProduct = await productLogic.updateProduct(product);
//     response.json(updateProduct);
// }
// catch(err:any){
// next(err)
// }

// })


export default router