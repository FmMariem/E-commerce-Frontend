import React from 'react'
import Card from 'react-bootstrap/Card';

const Cardarticle = ({article}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
   
      <Card.Img variant="top" src={article.imageart} />
      <Card.Body>
        <Card.Title>{article.reference}</Card.Title>
        <Card.Text>
         {article.designation}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardarticle
