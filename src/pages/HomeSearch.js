import React,{useState} from 'react';
import {Container,Card, Button, InputGroup, FormControl, Form,  Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Image from '../images/ImageNotAvailable.jpg';
import {Link} from 'react-router-dom';


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

const bookAuthors = (authors) => {
  if (!authors) return " Author not available ";
  if (authors.length <= 2) {
    authors = authors.join(" and ");
  } else if (authors.length > 2) {
    let lastAuthor = " and " + authors.slice(-1);
    authors.pop();
    authors = authors.join(", ");
    authors += lastAuthor;
  }
  return authors;
};


return(
   <Container fluid='sm'>
        <div className="header">
            <h1 className="title">Book Finder</h1>
                    <Form onSubmit={handleSubmit}>
                      <InputGroup className='mb-3'>
                        <FormControl
                           size="lg"
                            placeholder='Search book...'
                            aria-label='search-book'
                            aria-describedby='basic-addon2'
                            name='query'
                            value={query}
                            onChange={handleChange}
                            className='searchbar'
                        />
                            <Button  variant="secondary" type='submit' id="button-addon2">
                               <i class="fas fa-search"></i>
                            </Button>
                     </InputGroup>
                    </Form>
        </div>
                <br/>
                <Row>
                  {book.map((query, index) => ( 
                   
                      <Col sm={4}>
                     
                      <Card key={index} style={{width:'233px',  border: '0',padding: '8px' }} className='m-auto'>
                          <Card.Img variant="top" src={query.volumeInfo.imageLinks !== undefined ? query.volumeInfo.imageLinks.thumbnail: Image}/> 
                          <Card.Body>
                          <h3>{query.volumeInfo.title}</h3>
                          <h5>by {bookAuthors(query.volumeInfo.authors)}</h5>
                            <Link to={`/book/${query.id}`}>
                              <Button variant="primary"  size="lg" style={{margin:'20px'}}>
                                 More info...
                              </Button>
                            </Link> 
                    </Card.Body> 
                </Card>
                </Col>
                  ))}    
            </Row>
    </Container>
)

}
export default HomeSearch;