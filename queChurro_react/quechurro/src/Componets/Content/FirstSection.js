import React from 'react'
import Card from 'react-bootstrap/Card';
import imgLogo from "../.././assets/img/quechurro_logo.jpg"

function FirstSection() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={imgLogo} alt="Card image"/>
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>

        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default FirstSection