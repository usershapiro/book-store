// import { UploadedFile } from "express-fileupload"

class CategoryModel {
    
    public genreID : number
    public genre : string
    // public image:UploadedFile
    // public imageName:string

    public constructor (category:CategoryModel)  {

        this.genreID = category.genreID
        this.genre= category.genre
        // this.image = category.image
        // this.imageName = category.imageName

       

    }
}

export default CategoryModel