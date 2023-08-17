import React from 'react';
import Layout from '../Componenets/Layouts/Layout';
import { useAuth } from '../Context/Auth';

const HomePages = () => {
    const [auth,setAuth]=useAuth()
    return (
        <Layout title={"Best offers"}>
            <h4>This is Homepages</h4>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </Layout>
    );
}

export default HomePages;
