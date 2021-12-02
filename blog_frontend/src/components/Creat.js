import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Creat = ({setBlog}) => {

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [author, setAuthor] = useState()
    const [image, setImage] = useState()

    const addPost = async (e) => {
        try {
            const res = await axios.post(`http://localhost:5000/add`, {
                title,
                body,
                author,
                image
            })
            e.preventDefault()
            setBlog(prev => [res.data.post, ...prev])
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="fo-creat">
            <Form onSubmit={addPost}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author Name"
                                  onChange={(even) => setAuthor(even.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title"
                                  onChange={(even) => setTitle(even.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Post body</Form.Label>
                    <Form.Control type="text" placeholder="Enter your body"
                                  onChange={(even) => setBody(even.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter your image"
                                  onChange={(e) => setImage(e.target.value)}/>

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default Creat;