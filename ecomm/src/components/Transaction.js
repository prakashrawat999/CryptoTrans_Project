import React from 'react'
import { useRef } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Transaction() {

    const trans=useRef(null)
    const ethi=useRef(null)
    const msg=useRef(null)

    const formSubmit= async(e)=>{
        e.preventDefault()
        
        let details={
        trans:trans.current.value,
        ethi:ethi.current.value,
        msg:msg.current.value,
        }
        
        const handlereset = () => {
            trans.current.value = ''
            ethi.current.value = ''
            msg.current.value = ''
          }

        const response=axios.post('http://localhost:4001/add',details)
            response.then(res=>{
            console.log("Done")
            }).catch(error=>{
                console.log(error)
            })
            if (response.data.acknowledged === true) {
                window.alert("Transaction success 👍")
                handlereset()
              }
              else {
                window.alert("Error 😢")
                handlereset()
               }
        }
  return (
    <div>
        <div className='container bg-black text-white py-40 text-4xl max-w-full'>
            <Form onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTransactionId">
                <div className='space-x-96'>
                <Form.Label>Transaction ID</Form.Label>
                <Form.Control type="text" placeholder="Transaction Id" ref={trans}/>
                </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEtherium">
                <div className='space-x-96 space-y-20'>
                <Form.Label>Etherium Box</Form.Label>
                <Form.Control type="text" placeholder="Etherium Box" ref={ethi}/>
                </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMsg">
                <div className='space-x-96 space-y-20'>
                <Form.Label>Message Box</Form.Label>
                <Form.Control type="text" placeholder="Message Box" ref={msg}/>
                </div>
            </Form.Group>

            <div className='flex justify-center py-28'>
            <Button variant="primary" type="submit" className='bg-white text-black rounded p-1' controlId="formBasicSubmit"> 
                Send
            </Button>
            </div>
            </Form>
        </div>
    </div>
  );
}
