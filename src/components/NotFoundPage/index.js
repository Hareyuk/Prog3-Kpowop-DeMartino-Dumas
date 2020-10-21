import React from 'react';
import { Link } from 'react-router-dom';
import {Logo263} from '../Logo263';
import {BotonWD} from '../BotonWD';
import ContErrorComp from './styled'

const PageNotFound = ({ children, ...props })=>{

    return (
        <ContErrorComp>
            <div className="contError">
                <Logo263></Logo263>
                <Link to="/Principal/">
                    <BotonWD FontSize="65px" Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55">
                        Regresar
                    </BotonWD>
                </Link>
            </div>
        </ContErrorComp>
    )
}
export default PageNotFound;