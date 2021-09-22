import React,{useState} from 'react';
import { Button, InputGroup, FormControl, Form,  Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Image from '../images/ImageNotAvailable.jpg';
import Book from './Book';

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
   <div className="container">
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
                        />
                            <Button  variant="secondary" type='submit' id="button-addon2">
                               <i class="fas fa-search"></i>
                            </Button>
                     </InputGroup>
                    </Form>
        </div>
                <Row><br/>
                <h3 style={{textAlign:'center',marginTop:'5px'}}>Books found: {book.length}</h3>
                <h3 style={{textAlign:'center'}}>Searched for : <p style={{fontSize:'22px',color:'red'}}>" {query} "</p></h3>
                  {book.map((query) => ( 
                      <Col sm={4}>
                          <Book 
                            thumbnail={query.volumeInfo.imageLinks !== undefined ? query.volumeInfo.imageLinks.thumbnail: Image}
                            title={query.volumeInfo.title}
                            pages={query.volumeInfo.pageCount !== undefined ? query.volumeInfo.pageCount: 'Pages not available'}
                            language={query.volumeInfo.language}
                            author={bookAuthors(query.volumeInfo.authors)}
                            publisher={query.volumeInfo.publisher !== undefined ? query.volumeInfo.publisher: 'Publisher not available'}
                            publishedDate={query.volumeInfo.publishedDate}
                            printType={query.volumeInfo.printType}
                            averageRating={query.volumeInfo.averageRating }
                            description={query.volumeInfo.description !== undefined ? query.volumeInfo.description: 'Description not available'}
                          />

                      
                        </Col>
                  ))}
                </Row> 
                
               
    </div>
     
    
)

}
export default HomeSearch;