import React, {useState} from "react";
import { Button, InputGroup, FormControl, Card} from 'react-bootstrap';
import axios from "axios";



function SearchBook () {
    //states input query
    const [query, setQuery] = useState('');

    //create the states for books
    const [book, setBooks] = useState([]);


    function handleChange(e) {
        const query = e.target.value;
        setQuery(query);
    }

    function handleSubmit (e) {
    e.preventDefault();

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(res=>{
        console.log(res);
        setBooks(res.data.items);
    })
    .catch(err => {
        console.log(err.response);
    });
}


        return (
            <div>
                <InputGroup className="mb-3 form" onSubmit={handleSubmit}>
                    <FormControl
                    placeholder="Search book..."
                    aria-label="search-book"
                    aria-describedby="basic-addon2"
                    className="input"
                    name="query"
                    value={query} 
                    onChange={handleChange}
                    />
                    <Button className="button"  type="submit">
                       Search
                    </Button>
                </InputGroup>
                
            </div>
        )
}

export default SearchBook;