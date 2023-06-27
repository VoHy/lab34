import React from 'react'
import { data } from '../share/ListOfFilm'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container, Section } from 'react-materialize'
export default function Films() {
  return (
    <Section>
     <Container>
      <Row>
      {data.map((film)=>(
      <Col key={film.id}
    m={4}
    s={12}
  >
    <Card 
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={film.img} reveal waves="light" />}
      reveal={<p>{film.info}</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title={film.name }
      
    >       
       <Link to={`detail/${film.id}`}> Detail</Link>       
    </Card>
  </Col>))}
</Row>
</Container>      
</Section>           
  )
}

