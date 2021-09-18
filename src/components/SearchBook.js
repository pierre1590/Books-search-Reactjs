import React from "react";
import { Button, InputGroup, FormControl} from 'react-bootstrap';


function SearchBook () {
        return (
            <div>
                <InputGroup className="mb-3 form">
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