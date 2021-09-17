import React, {useState} from 'react';
import axios from 'axios';
import Book from './Book';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

function HomeSearch(){

//STATES 
const [query, setQuery] = useState('');
const [card, setCards] = useState([]);
const [loading, setLoading] = useState(false);



//HANDLE SEARCH
const handleSubmit = () => {
        setLoading(true);
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
            )
            .then(res=> {
                setCards(res.data.items);
                setLoading(false);
            })
            .catch(err=>{
                setLoading(true);
                console.log(err.response);
            })
}

//HOME SEARCH
return (
    <div>
       <div className="header">
            <h1 className="title">Search Book</h1> 
        <InputGroup className="mb-3 text-search">
            <FormControl
            placeholder="Search Book..."
            aria-label="Search Book"
            aria-describedby="basic-addon2"
            />
            <Button variant="secondary" id="button-addon2">
                <i className="fas fa-search"></i>
            </Button>
        </InputGroup>
        </div>
    </div>
)

}



export default HomeSearch;