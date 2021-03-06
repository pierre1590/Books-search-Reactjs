import React, {useState, useEffect} from "react";
import {Container, Image,Col,Button,Row} from 'react-bootstrap';
import Rating from '../components/Rating';
import Cover from '../images/ImageNotAvailable.jpg';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const BookDetail = () => {

    const {queryId} = useParams();
    const [query, setQuery] = useState('');

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


    

//Request to API 
    useEffect(()=> {
        console.log(queryId);
        const FetchBook = async () => {
            try {
                const result = await axios.get(
                    'https://www.googleapis.com/books/v1/volumes/'+queryId
                );
                console.log(result.data);
                setQuery(result.data);
            }
            catch (error){}
        };
        //Call the API
        FetchBook();
    },[queryId]);

    return(
        <div>
            <Container fluid="sm" style={{margin:'15px'}}>
                <Link to={'/'}>
                       <Button variant="dark"  style={{margin:'10px'}}>
                           <i className="fas fa-home"></i> Home
                       </Button>
                </Link>
                {query && (
        <><Row>
                        <Col>
                                <h1 style={{textAlign:'center'}}>
                                     {query.volumeInfo.title}
                                </h1>
                            <Image fluid style={{ height: 450, width: 450, margin:'12px' }}
                                alt={`${query.volumeInfo.title} query`}
                                src={query.volumeInfo.imageLinks !== undefined
                                    ? query.volumeInfo.imageLinks.thumbnail
                                    : Cover} />
                        </Col>
                    </Row><Row>
                            <Col>
                               
                                <p>
                                    <strong>Authors:</strong> {bookAuthors(query.volumeInfo.authors)}
                                </p>
                                <p>
                                    <strong>Published Date:</strong> {query.volumeInfo.publishedDate}
                                </p>
                                <p>
                                    <strong>Publisher:</strong> {query.volumeInfo.publisher}
                                </p>
                                <p>
                                    <strong>Page Count:</strong> {query.volumeInfo.pageCount}
                                </p>
                                <p>
                                    <strong>Rating:</strong> <Rating rating={query.volumeInfo.averageRating} />
                                </p>
                                <p>
                                   <strong>Description:</strong><br />
                                    {query.volumeInfo.description !== undefined ? query.volumeInfo.description : 'description not available.'}
                                </p>
                            </Col>
                        </Row></>
      )}
    </Container>
      
        </div>
    )
}

export default BookDetail;