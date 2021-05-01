import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <div className="headerClass">
            
            <a className="heading">Book Management System</a>
             {/* <Link to="/Delete">Delete Book</Link> */}
             <NavLink className="linkClass" to="/Register">Register</NavLink>
             <NavLink className="linkClass" to="/Login">Login</NavLink>
             <NavLink className="linkClass" to="/AddBook">Add Book</NavLink>
             <NavLink className="linkClass" to="/Booklist">Books</NavLink>
            
           
        </div>
    )
}
