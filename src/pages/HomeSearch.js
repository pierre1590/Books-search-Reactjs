import React,{useState} from 'react';
import { Button, InputGroup, FormControl, Form, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Image from '../images/ImageNotAvailable.jpg';

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
                           size="lg"
                            placeholder='Search book...'
                            aria-label='search-book'
                            aria-describedby='basic-addon2'
                            
                            name='query'
                            value={query}
                            onChange={handleChange}
                        />
                            <Button  variant="secondary" type='submit' id="button-addon2">
                               <i class="fas fa-search"></i>
                            </Button>
                     </InputGroup>
                    </Form>
        </div>
                <Row><br/>
                <h3 style={{textAlign:'center',marginTop:'5px'}}>Total books: {book.length}</h3>
                <h3 style={{textAlign:'center'}}>Searched for : <p style={{fontSize:'20px',color:'red'}}>"{query}"</p></h3>
                  {book.map((query) => ( 
                      <Col sm={4}>
                          <Card key={query.id} style={{width:'210px', margin: '30px 20% 15px', border: '0' }}>  
                               <Card.Img variant="top" src={query.volumeInfo.imageLinks !== undefined ? query.volumeInfo.imageLinks.thumbnail: Image}  />   
                              <Card.Body>  
                                  <h5 className="card-title" style={{textAlign:'center'}}>{query.volumeInfo.title}</h5>   
                              </Card.Body> 
                              <Button size='lg' variant="primary" style={{borderRadius:'8px', textAlign: 'center'}}>
                                    More info
                            </Button>
                          </Card> 
                        </Col>
                  ))}
                </Row> 
                
               
    </div>
        
        
    
    
)

}
export default HomeSearch;