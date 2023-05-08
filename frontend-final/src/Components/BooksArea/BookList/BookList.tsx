import { useEffect, useState } from "react";
import "./BookList.css";
import GenreModel from "../../../Models/genreModel"
import BookModel from "../../../Models/bookModel"
import BookService from "../../../Service/BookService"
import { NavLink } from "react-router-dom";

function BookList(): JSX.Element {
    const [genre,setGenre] = useState<GenreModel[]>([])
    const [books,setBooks] = useState<BookModel[]>([])

    useEffect(()=>{
        BookService.getBooks()
        .then(books => setBooks(books))
        .catch(err=>alert(err.message))
     },[]);

     async function deleteBook(bookId:number) {
        try{
            const ok = window.confirm("Are you sure?");
            if(!ok) return

            await BookService.deleteBook(bookId)
            const index=books.findIndex(b => b.bookId === bookId )
            books.splice(index,1)

            const duplicatedBooks = [...books];
            setBooks(duplicatedBooks)
        }
        catch(err:any){
            alert(err.message)
        }
     }
    

    return (
        <div className="BookList">
            <h1>Our Books!</h1>
            <table>
                                       <th>name</th>
                                       <th><summary></summary></th>
                                       <th>genre</th>
                                       <th>genreID</th>
                                       <th>price</th>
                                       <th>stock</th>
                                       <th>delete</th>
                                                           {books.map(b=> <tr key={b.bookId}> <td> {b.bookName}</td>
                                                                                              <td>{b.summary}</td>
                                                                                                <td>{b.genre}</td> 
                                                                                                <td>{b.genreID}</td>
                                                                                                <td>{b.price}</td>
                                                                                                <td>{b.stock}</td>
                                                                                                <td><button onClick={()=>{deleteBook(b.bookId)}} >X</button></td>
                      </tr>)}
                
                
            </table><br/>
            <NavLink to={"/home"}><span>back</span></NavLink>
        </div>
    );
}

export default BookList;
