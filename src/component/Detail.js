
import React from 'react'
import { Row, Col, Container, Card, CardPanel, Icon } from 'react-materialize';
import { useParams } from 'react-router-dom'
import { data } from '../share/ListOfFilm'
import { useState } from 'react';
import ModalCase from './ModalCase';
export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);  
  const  userName  = useParams();
    const film = data.find(obj => {
    return obj.id == userName.id;
  });
    // let cost=film.cost.toLocaleString();
   return(
    <>
    <Container>
          <Row>
          <Col 
          m={12}
          s={12}>
            <Card>
              <div className="card-image">
                <img src={`../${film.img}`} alt={film.img} width="700" height="900"/>
                <span className="card-title">{film.name}</span>
                <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                  <Icon  large>ondemand_video</Icon>
                </a>
              </div>
              <CardPanel className="teal">
              <p className="card-title white-text">{film.nation}</p>
              <p className="card-title white-text">{film.year}</p>
              {/* <p className="card-title white-text">Market value: €{cost}</p> */}
              <p className="white-text card-action">{film.info}</p>
              </CardPanel>
            </Card>
          </Col>
        </Row>
        {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
    </Container>
    </>
   ) 
}


