import React from "react";
import { Button, InputGroup, FormControl} from 'react-bootstrap';
import axios from "axios";

function SearchBook () {

const handleSubmit = (e) =>{
    e.preventDefault();

    const query = 'React';

    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    axios.get(url)
    .then(res=>{
        console.log(res);
    })
    .catch(err => {
        console.log(err.response);
    });
}


        return (
            <div>
                <InputGroup className="mb-3 form" onSubmi={handleSubmit}>
                    <FormControl
                    placeholder="Search book..."
                    aria-label="search-book"
                    aria-describedby="basic-addon2"
                    className="input"
                    name="query"
                    />
                    <Button className="button"  type="submit">
                       Search
                    </Button>
                </InputGroup>
            </div>
        )
}

export default SearchBook;