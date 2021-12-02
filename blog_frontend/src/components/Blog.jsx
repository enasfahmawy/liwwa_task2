import {Button, Card} from "react-bootstrap";
import axios from "axios";
import React, {useState} from "react";

function Blog({blog, setBlog}) {
    const [update, setUpdate] = useState(
        {
            author: blog.author,
            title: blog.title,
            image: blog.image,
            body: blog.body
        }
    )
    const [toggelEdit, setToggelEdit] = useState(false)
    const onCahngeHandale = e => {
        setUpdate({...update, [e.target.name]: e.target.value})


    }
    const changeData = async (e) => {
        await axios.put(`http://localhost:5000/update/${blog.id}`,update);
    }
    const deletePost = async (index) => {
        const id = index;
        if (window.confirm("Are you sure to delete post ?")) {
            try {
                await axios.delete(`http://localhost:5000/delete/${id}`);
                setBlog(prev => prev.filter(p => p.id !== id))
            } catch (e) {
                console.log(e)
            }
        }

    }


    return (
        <Card style={{width: '18rem'}}>
            <img src={blog.image} alt="image"/>
            <Card.Body>
                {!toggelEdit ? (
                    <>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>{blog.author}</Card.Text>
                        <Card.Text>{blog.body}</Card.Text>
                        <Card.Text>{blog.date}</Card.Text>
                    </>) : (
                    <>
                        <input type="text" name="title" value={update.title} onChange={onCahngeHandale}/>
                        <input type="text" name="author" value={update.author} onChange={onCahngeHandale}/>
                        <input type="text" name="body" value={update.body} onChange={onCahngeHandale}/>
                        <input type="text" name="image" value={update.image} onChange={onCahngeHandale}/>
                    </>
                )}


                <Button variant="danger" onClick={() => deletePost(blog.id)}>Delete</Button>
                <Button variant="success" onClick={() => changeData(blog.id)}>
                    update
                </Button>
                <Button variant="warning" onClick={() => setToggelEdit(!toggelEdit)}>
                    edit
                </Button>
            </Card.Body>
        </Card>
    )
}


export default Blog