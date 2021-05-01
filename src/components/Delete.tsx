import React from 'react'

export default function Delete() {
    return (
        <div className="AddBookForm">
                <form>
                <label>Book Name to delete book</label><br/>
                <input type="text" id="keyword"/><br/> <br/>
                <button type="submit">Delete</button>
                </form>
        </div>
    )
}
