import React, {useState} from 'react';
import ContSearchBar from './styled';
import {Rombo} from '../Rombo';
import BotonWD from '../Button';
import { withRouter } from 'react-router-dom';

const SearchBar = ({ children, ...props }) => {
    const [searchData, setSearchData] = useState("");
    return (
        <ContSearchBar>
            <div>
                <Rombo Color="#E31075" ColorAdentro="#181E35" Tamanio="35px"></Rombo> 
                <input onChange={evento=> setSearchData(evento.target.value)} id="inputDataSearch" type="text" value={searchData} onKeyPress={(event) => event.key === 'Enter' && searchData !== "" ? props.history.push(`/Project/${searchData}`) : null}/>
             </div>
                <BotonWD Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55" EventToClick={event=>event.preventDefault && console.log("Buscar con API")}>
                    Buscar
                </BotonWD>
        </ContSearchBar>
    )
}

export default  withRouter(SearchBar);