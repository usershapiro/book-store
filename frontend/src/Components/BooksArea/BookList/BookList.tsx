import { useEffect, useState } from "react";
import "./BookList.css";
import GenreModel from "../../../Models/genreModel"
import BookModel from "../../../Models/bookModel"
import BookService from "../../../Service/BookService"

function BookList(): JSX.Element {
    const [genre,setGenre] = useState<GenreModel[]>([])
    const [books,setBooks] = useState<BookModel[]>([])

    useEffect(()=>{
        BookService.getBooks()
        .then(books => setBooks(books))
        .catch(err=>alert(err.message))
     },[])

    return (
        <div className="BookList">
            <h1>Our Books!</h1>
            <table>
                                                       <th>name</th>
                                                       <th>genre</th>
                    {books.map(b=> <tr key={b.bookId}> <td> {b.bookName}</td>
                                                         <td>{b.genre}</td> 
                      </tr>)}
                
                
            </table>
			
        </div>
    );
}

export default BookList;
