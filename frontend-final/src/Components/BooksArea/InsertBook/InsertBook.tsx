import { useForm  } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import "./InsertBook.css";
import BookModel from "../../../Models/bookModel";
import BookService from "../../../Service/BookService";
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import GenreModel from "../../../Models/genreModel";
import {  useEffect, useState } from "react";


function InsertBook(): JSX.Element {
    const {handleSubmit , register} = useForm <BookModel>();
    const [books,setBooks]=useState<BookModel[]>([]);
    const [genre,setGenre]=useState<GenreModel[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        BookService.getAllGenre()
        .then(geners => setGenre(geners))
        .catch(err=>alert(err.message))
      }, [])


    async function send(book:BookModel) {
        try {
            await BookService.addGift(book);
            alert("BOOK has been added")
            navigate("/products");
        }
        catch(err: any) {
            alert(err.message);
        }
    }

  
  

    return (
        
        <div className="InsertBook">
			<h1>Got a new book ? </h1>
            <h2>Add it to the list</h2>
            <div className="background">
            <form  onSubmit={handleSubmit(send)}> 
               
               <input type="text" placeholder="bookName:" {...register("bookName")}/>
       
               {/* <TextField className="formInput" id="outlined-basic" label="bookName:" variant="outlined"    {...register("bookName")}  /><br/> */}
               {/* <TextField  className="formInput" id="outlined-basic" label="genre"  variant="outlined"      {...register("genre")}/><br/> */}
               
               <select defaultValue="genre" >
                <option>genre</option>
            {genre.map(g=><option key={g.genreID} value={g.genreID}>{g.genreID}-{g.genre}</option>)}
          
        </select><br/>


              
               <TextField   className="formInput" id="outlined-basic" label="price"    variant="outlined"  {...register("price")} /><br/>
               <TextField  className="formInput" id="outlined-basic" label="stock" variant="outlined" {...register("stock")} /><br/>
               <TextField  className="formInput" id="outlined-basic" label="summary" variant="outlined" {...register("summary")} /><br/>
               <TextField  className="formInput" id="outlined-basic" label=" genreID" variant="outlined"  {...register("genreID")} /><br/>
               
               <Button className="button" variant="contained" type="submit">Add</Button><br/>
               
               
                </form> 
                         <NavLink to={"/home"}><span>back</span></NavLink>
                         </div>
        </div>
    );
}

export default InsertBook;
