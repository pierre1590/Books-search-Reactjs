import React, {useState} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import Rating from '../components/Rating'; 
const Book = ({
    thumbnail, 
    title, 
    pages, 
    language, 
    description, 
    author, 
    publisher,
    publishedDate,
    printType,
    averageRating }, props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card style={{width:'233px',  border: '0' }} className='m-auto'>  
                               <Card.Img variant="top" src={thumbnail}/>   
                                <Card.Body>  
                                  <h5 className="card-title" style={{textAlign:'center'}}>{title}</h5>   
                                  <Button size='lg' onClick={handleShow} variant="primary" style={{borderRadius:'8px', textAlign: 'center'}}>
                                    More info...
                                  </Button>
                                </Card.Body> 
                    <Modal
                        show={show}
                        onHide={handleClose}
                        size="lg"
                        
                        fullscreen="lg-down"
                    >
                        <Modal.Header closeButton>
                          <Modal.Title style={{fontSize: '25px'}}><h3>{title}</h3></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {thumbnail}
                          <div style={{fontSize:'18px', color:'darkBlack'}}>
                           Pages: {pages}<br/>
                           Language: {language}<br/>
                           Author: {author} <br/>
                           Publisher: {publisher}<br/>
                           Published Date: {publishedDate}<br/>
                           Print Type: {printType} <br/>
                           Average Rating: <Rating rating={averageRating}  />    
                           <br/><br/>   
                           Description:<br/>
                           <p>{description}</p>
                         </div>
                        </Modal.Body>
                    </Modal>
            </Card> 
        </div>
    )
}

export default Book;