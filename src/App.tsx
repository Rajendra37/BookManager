
import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import { BrowserRouter, Route, Link,Switch} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import './index.css';
import './haver.css'
import AddBook from './components/AddBook';
import Booklist from './components/Booklist'
import Login from './components/Login';
import Register from './components/Register';
import Delete from './components/Delete';
import Details from './components/Details'



function App() {
const [state, setstate] = useState('')

const handle=(book)=>
  {
        setstate(book)
  }
        

  return (<>
    <div>
            <Header/><br/><br/>
            
    </div>
    <div>
            <Switch>
                    <Route exact path="/">
                            <Booklist getbook={handle}/>
                    </Route>
                    <Route exact path="/Booklist"><Booklist getbook={handle}/></Route>
                    <Route path="/Login" component={Login}></Route>
                    <Route path="/Register" component={Register}></Route>
                    <Route path="/Delete" component={Delete}></Route>
                    <Route path="/Addbook" component={AddBook}></Route>
                    <Route path="/Details">
                            <Details {...state}/>
                    </Route>
            </Switch>
    </div>
    </>

  );
}

export default App;
