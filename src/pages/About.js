import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {BotonWD} from '../components/BotonWD';
import {NavBar} from "../components/NavBar";
import {TitleH2} from '../components/TitleH2';
import {DivNosIndividual} from '../components/DivNosIndividual'

const Home = () => 
{
    return (
        <div className="App">
            <Layout>
                    <div>
                        
                        <NavBar>
                        </NavBar>
                        
                    
                   
                    <BotonWD Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55">
                            LOGIN
                    </BotonWD>
                        
                    <Logo263></Logo263>
                       
                    <div className="Section-Subjects">
                        <DivNosIndividual Subject="Sujeto #0001" Name="Axel Dumas" PictureInsta="../img/instagram_1.jpeg"/>
                        <DivNosIndividual Subject="Sujeto #0002" Name="Marianela De Martino" PictureInsta="../img/instagram_2.jpeg"/>
                    </div>
                    </div>
            </Layout>
        </div>
    )
}

export default Home;