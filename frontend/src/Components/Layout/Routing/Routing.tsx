import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import BookList from "../../BooksArea/BookList/BookList";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/booklist" element={<BookList/>}/>
                <Route path="/" element={<Navigate to="/home"/> }/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>

        </div>
    );
}

export default Routing;
