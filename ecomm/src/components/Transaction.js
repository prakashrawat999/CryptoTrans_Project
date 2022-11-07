import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Transaction() {
  return (
    <div>
        <div className='my-10   text-white text-xl rounded-xl '>
            <Form className="py-6 px-20 space-y-8 rounded-lg" >
            <Form.Group className=" w-80" controlId="formBasicMsg">
                <div>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
                </div>
            </Form.Group>
            <Form.Group className="" controlId="formBasicTransactionId">
                <div>
                <Form.Label>Transaction ID</Form.Label>
                <Form.Control type="text" placeholder="Transaction Id" />
                </div>
            </Form.Group>

            <Form.Group className="" controlId="formBasicEtherium">
                <div>
                <Form.Label>Etherium Box</Form.Label>
                <Form.Control type="text" placeholder="Etherium Box" />
                </div>
            </Form.Group>

            <Form.Group className="" controlId="formBasicMsg">
                <div>
                <Form.Label>Message Box</Form.Label>
                <Form.Control type="text" placeholder="Message Box" />
                </div>
            </Form.Group>

            <div className='flex justify-center'>
            <Button variant="primary" type="submit" className='bg-white text-black rounded mt-2 px-3 py-1 w-32' controlId="formBasicSubmit"> 
                Send
            </Button>
            </div>
            </Form>
        </div>
    </div>
  );
}