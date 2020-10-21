import React from 'react';
import {ContInfoProj} from './styled';

const DivInfoProject = ({ children, ...props }) => {
    console.info(props);
    const {name, genres, platforms, rating, background_image} = props.DataGame;
    return (
        <ContInfoProj>
            
            <h3>{name}</h3>
            <div className="Box-Texts">
                <h4>Géneros:<br></br> {genres.map(genre=>genre.name + " - ")}</h4>
                <h4>Rating: {rating}</h4>
                <h4>Plataformas: {platforms.map(platform => platform.platform.name + " - ")}</h4>

            </div>
            <div className="Box-Image">
                <img src={background_image} alt={name}/>
            </div>
        </ContInfoProj>
    )
}

export {DivInfoProject};