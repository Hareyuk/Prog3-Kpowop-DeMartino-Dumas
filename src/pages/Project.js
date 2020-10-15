import React, {useState, useEffect} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {DivInfoProject} from '../components/DivInfoProject';
import {NavBar} from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import ContProject from '../components/ContProject';
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
                console.log(query);
                //const data= response.data.slice(0,30);
                setResultsGames(response);
                setLoading(false);
            }
            catch(error)
            {
                console.error('Mi error :C  : ', error);
            }
        }
        fetchData();
    },[]);
    
    return (
        <div className="App">
            <Layout>
                    <Logo263 ToSide={true}></Logo263>
                    <ContProject>
                        <NavBar/>
                            <LoginButton/>
                            <LogoutButton/>
                            <h1 style={{color: 'white', margin: 0}} >Proyecto</h1>
                            <SearchBar/>
                            <div className="divsInfo">
                                {console.log(resultsGames)}
                            </div>
                    </ContProject>
            </Layout>
        </div>
    )
}

export default Project;