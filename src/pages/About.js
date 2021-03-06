import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {BotonWD} from '../components/BotonWD';
import {NavBar} from "../components/NavBar";
import {TitleH2} from '../components/TitleH2';
import {DivNosIndividual} from '../components/DivNosIndividual'
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import {TitleH1} from '../components/TitleH1'; 

const Home = () => 
{
    return (
        <div className="App">
            <Layout>
                    <div>
                        
                        <NavBar>
                        </NavBar>

                        <LoginButton/>
                        <LogoutButton/>
                        
                    
                   
                        
                    <Logo263 ToSide={true}></Logo263>
                    <TitleH1 Color="#10E3A2" FontS="70px" FontF="HackedFont" style={{color: 'white', margin: 0}} >Nosotros</TitleH1>
                    <div className="Section-Subjects" style={{top:7+"em"}}>
                        <DivNosIndividual Subject="Sujeto #0001" Name="Axel Dumas" PictureInsta="../img/instagram_1.jpeg"/>
                        <DivNosIndividual Subject="Sujeto #0002" Name="Marianela De Martino" PictureInsta="../img/instagram_2.jpeg"/>
                    </div>
                    </div>
            </Layout>
        </div>
    )
}

export default Home;