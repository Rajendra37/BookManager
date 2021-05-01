import React from 'react'

export default function AddBook() {

    let books: any = localStorage.getItem('MyBooks');
    if (!books) 
        {
            books = [];
        }
    else 
        {
            books = JSON.parse(books);
        }

   const SubmitBookDetails=(e:any)=>
    {
            e.preventDefault();
                
               books.push({
                            title: e.target.title.value,
                            author:e.target.author.value,
                            rating:e.target.rating.value,
                            price:e.target.price.value,
                            cover:e.target.cover.value,
                            description:e.target.description.value

                        })
                    localStorage.setItem('MyBooks',JSON.stringify(books))
                
               
                
    }
    return (
        <div className="AddBookForm">
        <form  onSubmit={SubmitBookDetails}>
            <label>Enter Book Title:</label><br />
            <input type="text" id="title" /><br />
            <label>Enter Book Auther</label><br />
            <input type="text" id="author"  /><br />
            <label>Enter Book Rating</label><br />
            <input type="text" id="rating"  /><br />
            <label>Enter Book Price</label><br />
            <input type="text" id="price" /><br />
            <label>Add Book Cover</label><br />
            <input type="text" id="cover" />
            <label>Add Book Description</label><br />
            <textarea id="description" /><br />
            <br /><br />
            <button type="submit">Add Book</button>
        </form>
    </div>
    )
}
