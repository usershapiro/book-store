import Joi from "joi"

class BookModel {
   public bookId:number
   public bookName:string	
   public summary: string
   public genreID: number
   public price	: number
   public stock : number
   
   

   public constructor (product:BookModel) {
    this.bookId = product.bookId;
    this.bookName = product.bookName;
    this.summary= product.summary;
    this.genreID = product.genreID;
    this.price = product.price;
    this.stock = product.stock;
    
   }

   public static validationScheme = Joi.object({
      bookId:Joi.number().optional().positive().integer(),
      bookName:Joi.string().required().min(2).max(30),
      price:Joi.number().required().integer(),
      stock:Joi.number().required().integer()

   })
   public validate():string{
      const result = BookModel.validationScheme.validate(this)
      return result.error?.message;
   }

} 

export default BookModel