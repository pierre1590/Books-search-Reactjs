import React, {useState} from 'react';
import {Card, Button, Modal, CloseButton} from 'react-bootstrap';
 
const Book = (thumbnail,
  title,
  pageCount,
  language,
  description,
  authors,
  publisher,) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
             <Modal isOpen={modal} toggle={toggle}>
                 <Card style={{ width: '15rem', margin:  '10px', padding: '2px' }} className="m-auto">
                    <Card.Img variant="top" style={{width: '100%', height: '230px'}}  />
                    <Card.Body style={{textAlign: 'center'}}>
                        <Card.Title className="card-title" style={{fontSize:'20px',margin: '5px'}}>{title}</Card.Title>
                        <Button style={{borderRadius:'10px',width:'100px',height: '30px',pointer: 'cursor'}} variant="primary" onClick={toggle}>More info</Button>
                    </Card.Body>
                   
                        <h3>
                            T
                        </h3>
                        <CloseButton aria-label="Close" className="close" onClick={toggle} />
                   
                </Card>
            </Modal>
        </div>
    )
}

export default Book;