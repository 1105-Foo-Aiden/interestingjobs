import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function JobThreeComponent() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <h1>The International Pokemon Company</h1>
          <p>The International Pokemon Company is exactly as it sounds, Pokemon the company. They are only stationed in two places which is unfortunate but they have full relocation compensation and a ton more benefits including health and retirement with 401K matching. </p>
          <p>For Requirements, there really wasn't much besides haivng 4 years of experience, depending on the job. The job I found that lines up nicely with what we done in class is the UI Designer position. Something that would defintely stop me would be the bachelors degree requiremnt which is a major theme stopping me in these jobs. But that's why they're called dream jobs</p>
          <p>A goal I would like to achieve is designing/ working on the UI for a new Pokemon game which I think would be really cool</p>
          <p>In terms of skillsets, I think I could certainly do it, there's probably a few concepts that I would struggle with but that's why it's a team and not an individual only job. </p>
          <h3><Link to={'https://www.linkedin.com/jobs/search?keywords=The%20Pokémon%20Company%20International&location=United%20States&geoId=103644278&f_C=609119&f_TPR=&position=1&pageNum=0'} target={'blank'} style={{color: 'white'}}>Linkedin Page</Link></h3>
          <h3><Link to={'https://corporate.pokemon.com/en-us/'} target={'blank'} style={{color: 'white'}}>International Pokemon Company Page</Link></h3>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

