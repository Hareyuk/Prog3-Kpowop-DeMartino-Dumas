import React, {useState} from 'react';
import Layout from '../containers/Layout';
import NotFoundPage from '../components/NotFoundPage';

const Home = () => 
{
    return (
        <div className="App">
            <Layout>
                    <NotFoundPage/>
            </Layout>
        </div>
    )
}

export default Home;