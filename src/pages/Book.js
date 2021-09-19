import React, {useState} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
 
const Book = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
                <Card style={{ width: '15rem', margin:  '10px', padding: '2px' }} className="m-auto">
                    <Card.Img variant="top" style={{width: '100%', height: '230px'}}  />
                    <Card.Body style={{textAlign: 'center'}}>
                        <Card.Title className="card-title" style={{fontSize:'20px',margin: '5px'}}></Card.Title>
                        <Button style={{borderRadius:'10px',width:'100px',height: '30px',pointer: 'cursor'}} variant="primary" onClick={toggle}>More info</Button>
                    </Card.Body>
                    <Modal isOpen={modal} toggle={toggle}>
                        <h3>
                            Title
                        </h3>

                    </Modal>
                </Card>
                
        </div>
    )
}

export default Book;