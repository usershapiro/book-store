import BookList from "../../BooksArea/BookList/BookList";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            
            <Header/>
            <hr/>
            <Menu/>
            
            <Routing/>
			
        </div>
    );
}

export default Layout;
