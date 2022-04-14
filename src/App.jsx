import React from 'react';
import Api from './components/Api';
import Navbars from './components/navbars';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Descripiton from './components/Descripition';


function App() {
 
  return (
    <>

         
      <Navbar bg="primary">
        <Navbar.Brand>MyAnimeList</Navbar.Brand>
      </Navbar>

      <Container>
            <Row>
            <Router>
            <Col>
              <Navbars/>
            </Col>
            <Col>
              <Routes>
              <Route path="/" element={<Api parm0="top" parm2="anime" parm1="1" arr="top"/>} />
              <Route path="/:parm1/:parm2" element={<Api parm0="season" arr="anime"/>} />
              <Route path="/:id" exect element={<Descripiton />} />
              </Routes>
            </Col>
            </Router>
            </Row>
      </Container>
    </>
  );
}

export default App;
