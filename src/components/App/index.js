import React from 'react';
import '../App/index.css';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Div from '../Div';
import {Grid, Col} from '../Grid';
import { Inner } from '../Inner'
import {TypeText} from '../TypeText';
import {Rombo} from '../Rombo';

function App() {
  //  <div className="App">
  return (
    <>
      <Inner>
        <Div>
          HELLO WORLD UWU
        </Div>
      </Inner>

      <Rombo Color="#35BDE4" ColorAdentro="#000000" Tamanio="40"></Rombo>

      <TypeText TypeTag="h1" Text="Holi Mariancita :3 <3">
        <>
          
        </>
      </TypeText>

        <Div>
          <div className="highlight">
              AWAAA
          </div>
      </Div>

      <Inner>
        <Button primary={true}>Push meeee aw</Button>
        <Button primary={false}>Entonces presioname!</Button>
        <Paragraph primary={true}>
        CLANNAD (クラナド Kuranado?) es una novela visual japonesa desarrollada por la compañía Key, fabricantes de otros juegos tales como Kanon y Air. Fue publicada el 28 de abril de 2004 en una edición limitada para PC, luego de postergarse su lanzamiento en varias ocasiones, y meses más tarde, el 8 de agosto, fue lanzada una edición regular. Asimismo, hubo versiones para la PlayStation 2, PlayStation 3, PlayStation Portable y Xbox 360. Clannad fue uno de los videojuegos bishōjo más vendidos el año de su lanzamiento y se le considera también como uno de los más populares en Japón.
        </Paragraph>
        <Paragraph primary={false}>
        A diferencia de los anteriores trabajos de la compañía, Kanon y Air, que originalmente fueron lanzadas como novelas visuales de contenido erótico y censuradas para el mercado más joven, Clannad es su primer juego apto para todo público, sin contener situaciones subidas de tono o cualquier indicio de fanservice sexual, excepto tal vez en el anime. Sin embargo, el 25 de noviembre de 2005 se lanzó un spin-off adulto de Clannad, titulado Tomoyo After: It's a Wonderful Life (智代アフター ～It's a Wonderful Life～ Tomoyo Afutāー ～It's a Wonderful Life～?) y enfocado en Tomoyo Sakagami, una de las cinco protagonistas de Clannad.
        </Paragraph>
        <h1>MI GRILLA</h1>

        <Grid colGap={30} rowGap={40}>
          <Col desktop={3} tablet={6} mobile={12}>
              Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
          </Col>
          <Col desktop={3} tablet={6} mobile={12}>
              Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
          </Col>
          <Col desktop={3} tablet={6} mobile={12}>
              Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
          </Col>
          <Col desktop={3} tablet={6} mobile={12}>
              Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
          </Col>
        </Grid>
      </Inner>
    </>
  );
}

export default App;
