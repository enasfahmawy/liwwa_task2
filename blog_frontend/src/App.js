import './App.css';
import {useState, useEffect} from 'react';
import Creat from "./components/Creat";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Button, Card} from "react-bootstrap";
import Blog from "./components/Blog";

function App() {

    const [blogs, setBlog] = useState([])
    /* to get data from flask */
    useEffect(() => {
        fetch('http://127.0.0.1:5000/get', {
            'method': 'GET',
            header: {
                'Content-Type': 'applications/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => setBlog(resp))
            .catch(error => console.log(error))
    }, [])



    return (
        <div className="App">
            <h1 className="title">BLOG POST</h1>
            <Creat setBlog={setBlog}/>

            {blogs.map(blog => {
                return (
                    <Blog key={blog.id} setBlog={setBlog} blog={blog}/>
                )
            })}
        </div>
    );
}

export default App;
