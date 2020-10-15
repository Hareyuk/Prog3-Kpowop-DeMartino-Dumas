import React from 'react';
import ContSearchBar from './styled';
import {Rombo} from '../Rombo';
import BotonWD from '../Button';

const SearchBar = ({ children, ...props }) => {

    return (
        <ContSearchBar>
            <div>
                <Rombo Color="#E31075" ColorAdentro="#181E35" Tamanio="35px"></Rombo> 
                <input type="text" value={children}/>
             </div>
                <BotonWD Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55" onKeyPress={(event) => event.key === 'Enter' && event.target.value !== "" ? props.history.push(`/search/${event.target.value}`) : null}>
                    Search
                </BotonWD>
            {children}
        </ContSearchBar>
    )
}

export {SearchBar};