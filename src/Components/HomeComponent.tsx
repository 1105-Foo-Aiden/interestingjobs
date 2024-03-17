import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HomeComponent() {
  return (
    <div className='d-flex justify-content-center'>
      <Container className='text-center'>
        <Row>
          <h2 >Jobs that interest me</h2>
        </Row>
        <Row>
          <h4 >A TSX app</h4>
        </Row>
        <br />
        <br />
        <Row className='grid grid-cols-flex'>
          <Link to={'/job1'} style={{textDecoration: 'none', color: 'black'}}>Riot Games</Link>
          <Link to={'/job2'} style={{textDecoration: 'none', color: 'black'}}>Apple</Link>
          <Link to={'/job3'} style={{textDecoration: 'none', color: 'black'}}>The International Pokemon Company </Link>
          <Link to={'/job4'} style={{textDecoration: 'none', color: 'black'}}>MSI</Link>
          <Link to={'/job5'} style={{textDecoration: 'none', color: 'black'}}>Self Employed</Link>
        </Row>
      </Container>
 
      
    </div>
  )
}
