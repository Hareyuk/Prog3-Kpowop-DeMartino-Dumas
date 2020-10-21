import React, {useState} from 'react';
import ContSearchBar from './styled';
import {Rombo} from '../Rombo';
import {BotonWD} from '../BotonWD';
import { withRouter } from 'react-router-dom';

const SearchBar = ({ children, ...props }) => {
    const [searchData, setSearchData] = useState("");
    return (
        <ContSearchBar>
            <div className="Div-Bar">
                <Rombo Color="#E31075" ColorAdentro="#181E35" Tamanio="35"></Rombo> 
                <input placeholder="Buscar un juego" onChange={evento=> setSearchData(evento.target.value)} id="inputDataSearch" type="text" value={searchData} onKeyPress={(event) => event.key === 'Enter' && searchData !== "" ? props.history.push(`/Project/${searchData}`) : null}/>
             </div>
                <BotonWD FontSize="40px" Color="#35BDE4" ColorAdentro="#181E35" Tamanio="35" EventToClick={event=>event.preventDefault && props.history.push(`/Project/${searchData}`)}>
                    Buscar
                </BotonWD>
        </ContSearchBar>
    )
}

export default  withRouter(SearchBar);