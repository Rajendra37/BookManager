import { BrowserRouter, Route, Link,Switch} from "react-router-dom";
import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';
import CSS from 'csstype';
import StarRatings from 'react-star-ratings';

interface book
{
    getbook:Function
}



export default function Booklist(props:book) {

    const [bookdata, setbooks] = useState([{title:'',author:''}])
    const [searchValue, setSearchValue] = useState('')
    const [tagValue, settagValue] = useState('')



    let refresh =(e:any)=>{
        let data: any = localStorage.getItem('MyBooks')
        setbooks(JSON.parse(data))
    }


    let search = (e: any) => 
    {
       
        let option=tagValue;
        let keyword=searchValue;
        let searchedData: any = [];

        if(option==="title")
        {
            for (let i = 0; i < bookdata.length; i++) {
               
                if (bookdata[i].title.toLowerCase().includes(keyword)) {
    
                    searchedData.push(bookdata[i])
                }
            }

            setbooks(searchedData )
        }
        else if(option==="Author")
        {
            for (let i = 0; i < bookdata.length; i++) {
               
                if (bookdata[i].author.toLowerCase().includes(keyword)) {
    
                    searchedData.push(bookdata[i])
                }
            }
            setbooks(searchedData )
        }
        e.preventDefault()
    }

    let handleFilterChanges=(event:any)=>{
        settagValue(event.target.value)
    }

    let handleChanges = (event: any) => {
        setSearchValue(event.target.value)
        console.log(searchValue)
    }

    useEffect(() => {
        let data: any = localStorage.getItem('MyBooks')
        setbooks(JSON.parse(data))
    }, [])


    let num:Number;
    return (
        <div>
            <div className="SerachBar">
                <select className="filterClass" value={tagValue} onChange={handleFilterChanges}>
                    <option value="choose">Filter By</option>
                    <option value="Author">Author</option>
                    <option value="title">Title</option>
                    <option value="Price">Max Price Range</option>
                    <option value="rating">Rating Range </option>
                </select>
                <input type="text" name="searchValue" value={searchValue} onChange={handleChanges} />
                <button onClick={search}>Filter</button>
                <button onClick={refresh}>Refresh</button>
            </div>

            { bookdata.map((row: any) => {
                 {num=Number(row.rating)} 
                return (
                    <div>
                        
                        <Card className="CardView">
                            <Card.Img variant="top" src={row.cover} height="70%" width="100%" />
                            <Card.Title>{row.title}</Card.Title>
                            <Card.Text></Card.Text>
                            <div onClick={()=>{props.getbook(row)}}>
                               
                              {/* {console.log("rating",num)} */}
                            <StarRatings
                                rating={num}
                                starDimension="25px"
                                starSpacing="8px"
                                 starRatedColor="#380b5c"
                                 starEmptyColor="#8a8a8a"
                                 starHoverColor="#622dd6"
                            />
                            <br/><br/>
                                <Link to="/Details"><button>See Book Details</button></Link>
                            </div>
                        </Card>
                    </div>
                )
            })
            }
        </div>
    )



}
