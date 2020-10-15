  
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Layout from '../containers/Layout';
import FullWidthGrid from '../components/FullWidthGrid';
import GridSkeleton from '../components/GridSkeleton';
import axios from 'axios';
//import { Grid } from '@material-ui/core';

const Search = (props) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    let { query } = useParams();

    useEffect(() =>
    {
        const fetchData=async() => 
        {
            try{
                setLoading(true);
                const response = await axios.get(`https://api.rawg.io/api/games?search={query}`);
                //const data= response.data.slice(0,30);
                setNews(data);
                setLoading(false);
            }
            catch(error)
            {
                console.error('Mi error :C  : ', error);
            }
        }
        fetchData();
    }, [location]);
    
    return(
        <Layout loading={loading}>
            {!loading ? news.length !== 0 ? <FullWidthGrid data={news} /> : 'no hay noticias para tu busqueda' : <GridSkeleton />}
        </Layout>
    );
};
export default Search;