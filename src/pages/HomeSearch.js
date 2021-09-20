import React,{useState} from 'react';
import { Button, InputGroup, FormControl, Form, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function HomeSearch(){
     //states input query
  const [query, setQuery] = useState('');

  //create the states for books
  const [book, setBooks] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  }
const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`)
      .then((res) => {
       console.log(res.data.items);
        setBooks(res.data.items);
      })
      .catch((err) => {
        console.log(err.response);
      });
}

return(
   <div className="container">
        <div className="header">
            <h1 className="title">Book Finder</h1>
                    <Form onSubmit={handleSubmit}>
                      <InputGroup className='mb-3 form'>
                        <FormControl
                            placeholder='Search book...'
                            aria-label='search-book'
                            aria-describedby='basic-addon2'
                            className='input'
                            name='query'
                            value={query}
                            onChange={handleChange}
                        />
                            <Button className='button' type='submit'>
                                Search
                            </Button>
                     </InputGroup>
                    </Form>
        </div>
         
                  {book.map((query,index) => (  
                      
                        <Col>  
                          <Card key={index} style={{ 'marginTop': '10px' }}>  
                              <Card.Img variant="top" src={query.volumeInfo.imageLinks !== undefined ? query.volumeInfo.imageLinks.thumbnail : ''}  />  
                              <Card.Body>  
                                  <h5 className="card-title">{query.volumeInfo.title}</h5>   
                              </Card.Body> 
                              <Button variant="primary">
                                    More info
                              </Button> {''}
                          </Card> 
                        </Col> 
                      
                  ))}  
               
    </div>
        
        
    
    
)

}
export default HomeSearch;