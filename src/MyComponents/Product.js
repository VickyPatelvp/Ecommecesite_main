import { borderRadius } from '@mui/system';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function product(props) {
  return (
    <div className='col-4'>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/logo/logo.jpg" />
        <Card.Body>
          <Card.Title className='text-center'>{props.product.name}</Card.Title>
          <Card.Text className='text-center'>
          Price:1000 Rs
          </Card.Text>
          <Button variant="primary" className='textCenter shop-account .site-button.button-lg' style={{width:"100%",  borderRadius:"0"}}  >Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

product.propTypes = {

}

export default product

