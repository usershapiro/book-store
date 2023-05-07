import axios from "axios"
import GenreModel from "../Models/genreModel"
import appConfig from "../Utils/config"
import BookModel from "../Models/bookModel"

class DataService {
    public   async getAllGenre():Promise <GenreModel[]>{
    
        const response = await axios.get<GenreModel[]>(appConfig.genreUrl)
        const genre= response.data
        return genre
           
         }
         async  getBooks() :Promise< BookModel[]>{
             const response = await axios.get<BookModel[]>(appConfig.booksUrl)
              const books = response.data
              return books
         }
     
         
         async  addGift(book:BookModel):Promise<void> {
           
           await axios.post <BookModel>(appConfig.addBookUrl ,book)
         } 

         async deleteBook(bookId:number):Promise<void> {
            
            await axios.delete(appConfig.deleteBookUrl+bookId)
         }
     
     
}

const dataService = new DataService()
export default dataService