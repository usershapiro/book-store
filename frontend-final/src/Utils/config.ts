class Config {
    public genreUrl  = "http://localhost:3001/api/genre/"
    public booksUrl = "http://localhost:3001/api/books/"
    public addBookUrl = "http://localhost:3001/api/books/"
    public deleteBookUrl ="http://localhost:3001/api/delete-book/"
}

const appConfig = new Config()
export default appConfig