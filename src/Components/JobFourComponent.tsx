import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function JobFourComponent() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <h1>MSI</h1>
          <br/>
          <p>MSI is a copmany that sells many computer parts and devices, there's many things from handhelds to motherboards and servers. They're a well known and trusted company that gives many computers/PCs like mine motherboards and other parts. </p>
          <p>The MSI website doesn't have much about their jobs on their website due ot the user being needed to log into the website in order to even apply.</p>
          <p>I would probably like to achieve a better something, something with their server side maintenance or something</p>
          <p>Since I can't even see the job page from the website, I'd imagine that I don't have all the requirements, but I can still be some help with UI/UX design or something like that</p>
          <h2><Link to={'https://us.msi.com/business-inquiry-form'} style={{color: 'white'}} target='blank '>MSI Website</Link></h2>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}
