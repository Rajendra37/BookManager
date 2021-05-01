import React from 'react'
import { BrowserRouter, Route, Link,Switch} from "react-router-dom";
import StarRatings from 'react-star-ratings';
export default function Details(props:any) {
   
    const DeleteBook=(title)=>{
         
        let keyword=title;
        // console.log(keyword);
        let books:any=localStorage.getItem('MyBooks');
        books=JSON.parse(books)
        // console.log(books);
        let newBooks=books.filter((book:any)=>book.title!=keyword)
        localStorage.setItem('MyBooks',JSON.stringify(newBooks))
        
      
        
        
    }

   
    let num:Number; 
    return (
       
       
        <div>
          {console.log(num=Number(props.rating))}
           
        <div className="DetailCard">
            <h1>{props.title}</h1>
            <h5>{props.author}</h5>
            <img src={props.cover} alt="book image" width="30%" height="50%"/>
            
            {/* <p>{props.price}</p><br/><br/><br/> */}
            
            <p>{props.description}</p>
            <h4>Book Price:- {props.price}</h4>
                        <StarRatings
                                 rating={num}
                                starDimension="20px"
                                starSpacing="5px"
                                 starRatedColor="#380b5c"
                                 starEmptyColor="#8a8a8a"
                                 
                            />
            <br/>
            <Link to='/Booklist'>
            <button onClick={()=>DeleteBook(props.title)}>Detele Book</button>
                <button>Go Back</button>
            </Link>
        </div>
        
        </div>
    )
}
