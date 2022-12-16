import React,{useState} from 'react';
import {Container,Card, Button, InputGroup, FormControl, Form,  Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import Image from '../images/ImageNotAvailable.jpg';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function HomeSearch(){
     //states input query
  const [query, setQuery] = useState('');

  //create the states for books
  const [books, setBooks] = useState([]);
  
// state of the alert 
const [show, setShow] = useState(false);

  

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  }

  //Request to API 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`)
      .then((res) => {
        console.log(res.data.items);
        if(res.data.totalItems > 0){
          setBooks(res.data.items);
        }else
        {
          toast.error('No Books.');
        }  
      })
      .catch((err) => {
        console.log(err.response);
        toast.error('Book not found.')
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

const deleteSearch = () => {
  setBooks([]);
  setQuery('');
  toast.success('Research deleted.');
  setShow(false);
}

const AlertDelete = () => {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      closeButton
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Research</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to delete the research?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="danger" onClick={deleteSearch}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}




return (
  <div>
    <Container fluid="sm">
      <div className="header">
        <h1 className="title">Book Finder</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              size="lg"
              placeholder="Search book..."
              aria-label="search-book"
              aria-describedby="basic-addon2"
              name="query"
              value={query}
              onChange={handleChange}
              className="searchbar" />
            <Button variant="secondary" type="submit" id="button-addon2">
              <i class="fas fa-search"></i>
            </Button>
            <Button variant="danger" type="button" id="button-addon2" onClick={() => setShow(true)}>
              <i class="fas fa-trash-alt"></i>
            </Button>
            <AlertDelete />
        </InputGroup>
      </Form>
    </div>
    <br /><Row>
      {books.map((query, index) => (
        <Col sm={4}>
          <Card
            key={index}
            style={{ width: "233px", border: "0", padding: "8px" }}
            className="m-auto"
          >
            <Card.Img
              variant="top"
              src={query.volumeInfo.imageLinks !== undefined
                ? query.volumeInfo.imageLinks.thumbnail
                : Image} />
            <Card.Body>
              <h3>{query.volumeInfo.title}</h3>
              <h5>by {bookAuthors(query.volumeInfo.authors)}</h5>
              <Link to={`/book/${query.id}`}>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ margin: "20px" }}
                >
                  More info...
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    <ToastContainer />
  </div>
);
}

    export default HomeSearch;