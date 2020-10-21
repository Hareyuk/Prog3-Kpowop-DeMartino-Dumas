import React, {useState, useEffect} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {DivInfoProject} from '../components/DivInfoProject';
import {NavBar} from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import ContNintyWidth from '../components/ContNintyWidth';
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {TitleH1} from '../components/TitleH1'; 

const Project = () => 
{    
    const [resultsGames, setResultsGames] = useState([]);
    const [loading, setLoading] = useState(true);
    let { query } = useParams();

    useEffect( () =>
    {
        const fetchData=async() => 
        {
            try{
                setLoading(true);
                const response = await axios.get(`https://api.rawg.io/api/games?search=${query}`);
                const data = response.data.results;
                //const data= response.data.slice(0,30);
                setResultsGames(data);
                setLoading(false);
            }
            catch(error)
            {
                console.error('Mi error :C  : ', error);
            }
        }
        (query !== "") && fetchData();
    },[query]);
    
    return (
        <div className="App">
            <Layout>
                    <Logo263 ToSide={true}></Logo263>
                    <ContNintyWidth>
                        <NavBar/>
                            <LoginButton/>
                            <LogoutButton/>
                            <TitleH1 Color="#35BDE4" FontS="70px" FontF="HackedFont" style={{color: 'white', margin: 0}} >Proyecto</TitleH1>
                            <SearchBar/>
                            <div className="divsInfo">
                                {!loading ? resultsGames.length !== 0 ? resultsGames.map((obj)=>
                                    <DivInfoProject DataGame={obj}> </DivInfoProject>) : 'no hay resultados de tu búsqueda' : <img className="LoadingGif" src="/img/loading.gif" alt="loading"/>}
                            </div>
                    </ContNintyWidth>
            </Layout>
        </div>
    )
}

export default Project;