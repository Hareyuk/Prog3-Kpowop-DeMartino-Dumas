import React, {useState, useEffect} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {DivInfoDash} from '../components/DivInfoDash';
import {NavBar} from "../components/NavBar";
import Profile from "../components/Profile";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton"
import axios from 'axios';
import {TitleH1} from '../components/TitleH1';
import ContNintyWidth from '../components/ContNintyWidth';
import Project from './Project';

const Dashboard = () => 
{
    const apiUrl = "https://api.rawg.io/api/games";
    const [gamesRandom, setGamesRandom] = useState([{},{}]);
    const [loading, setLoading] = useState(true);
    const getRandom=(max, min)=>
    {
        return Math.floor(Math.random()*(max-min)) + min;
    };
    useEffect(() => {
        const fetchData=async() => 
        {
            const obtainGame = async (id)=>
            {
                try
                {
                    return await axios.get(apiUrl + `/${id}`);
                }
                catch (error)
                {
                    return "error";
                }
            }
            try{
                const response = await axios.get(apiUrl);
                const countGames= await parseInt(response.data.count);
                let game1Random = getRandom(countGames, 0);
                let game2Random = getRandom(countGames, 0);
                let responseGame1 = "error";
                while(responseGame1 === "error")
                {
                    game1Random = getRandom(countGames, 0);
                    responseGame1 = await obtainGame(game1Random);
                }
                let responseGame2 = "error";
                while(responseGame2 === "error")
                {
                    game2Random = getRandom(countGames, 0);
                    responseGame2 = await obtainGame(game2Random);
                }
                const gameData1 = await responseGame1.data;
                const gameData2 = await responseGame2.data;
                setGamesRandom([gameData1, gameData2]);
                setLoading(false); 
            }
            catch(error)
            {
                console.error('Mi error :C  : ', error);
            }
        }
        fetchData();
    }, [])
    return (
        <div className="App">
            <Layout>
                    <div>
                        <NavBar/>
                        <ContNintyWidth>
                            <LogoutButton/>
                            <TitleH1 Color="#E31075" FontS="70px" FontF="HackedFont" style={{color: 'white', margin: '0', textAlign: 'left'}}>Dashboard</TitleH1>
                            <Logo263 ToSide={true}></Logo263>


                            <div className="Dashb-Info1">
                            <DivInfoDash>
                                <Profile/>
                            </DivInfoDash>

                            {/* JUEGO 1 */}
                            {!loading ? 

                            <DivInfoDash className="contInfo">
                            {/* <h3>Super Smash Bros Ultimate</h3>
                            <div className="Box-Texts">
                                <h4>Género: Lucha 2D</h4>
                                <h4>Creador: Mashihiro Sakurai</h4>
                                <h4>Plataforma: Nintendo Switch</h4>
                            </div> */}

                            <h3>{gamesRandom[0].name}</h3>
                            <div className="Box-Texts">
                                <h4>Géneros:<br></br> {gamesRandom[0].genres.map(genre=>genre.name + " - ")}</h4>
                                <h4>Rating: {gamesRandom[0].rating}</h4>
                                <h4>Plataformas: {gamesRandom[0].platforms.map(platform => platform.platform.name + " - ")}</h4>

                            </div>
                            <div className="Box-Image">
                                <img src={gamesRandom[0].background_image} alt={gamesRandom[1].name}/>
                            </div>
                            </DivInfoDash>
                            : 
                            <img src='/img/loading.gif' alt='loading'/>
                            }

                            {/* FIN DE JUEGO 1 */}
                            </div>




                            <div className="Dashb-Info2">
                            <DivInfoDash>
                                <img src="/img/not_available.jpg" alt="No disponible"/>
                            </DivInfoDash>
                            {/* JUEGO 2 */}
                            {!loading ? 

                                <DivInfoDash>
                                {/* <h3>Super Smash Bros Ultimate</h3>
                                <div className="Box-Texts">
                                    <h4>Género: Lucha 2D</h4>
                                    <h4>Creador: Mashihiro Sakurai</h4>
                                    <h4>Plataforma: Nintendo Switch</h4>
                                </div> */}

                                <h3>{gamesRandom[1].name}</h3>
                                <div className="Box-Texts">
                                    <h4>Géneros:<br></br> {gamesRandom[1].genres.map(genre=>genre.name + " - ")}</h4>
                                    <h4>Rating: {gamesRandom[1].rating}</h4>
                                    <h4>Plataformas: {gamesRandom[1].platforms.map(platform => platform.platform.name + " - ")}</h4>

                                </div>
                                <div className="Box-Image">
                                    <img src={gamesRandom[1].background_image} alt={gamesRandom[1].name}/>
                                </div>
                                </DivInfoDash>
                                : 
                                <img src='/img/loading.gif' alt='loading'/>
                                }
                            
                            {/* FIN DE JUEGO 2 */}
                            </div>
                        </ContNintyWidth>
                    </div>
            </Layout>
        </div>
    )
}

export default Dashboard;