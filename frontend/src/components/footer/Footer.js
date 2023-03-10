import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer 
      style = {{
        width:'100%',
        position:'relative',
        bottom:40,
        display:'flex',
        justifyContent:'center'
      }}
      >
      <Container>
      <Row>
      <Col className="text-center py-3"> Copyright &copy; 2020 Sunil Kumar</Col>
      </Row>
      
      </Container>
    </footer>
  )
}

export default Footer
