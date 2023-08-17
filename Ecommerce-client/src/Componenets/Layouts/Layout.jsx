import React, { Children } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from "react-helmet";
import   { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ( {children,description,keywords,author,title}) => {
    return (
        <div>
          <Helmet>
            <meta charset="UTF-8"/>  
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author}></meta>
            <title>{title}</title>
          </Helmet>

            <Header></Header>
            
            <main style={{minHeight:"70vh"}}>
            <Toaster />
            {children}
            </main>
            <Footer></Footer>
     </div>
    );
};

Layout.defaultProps = {
    title: "Ecommerce app - shop now",
    description: "react ecommerce website",
    keywords:"mern,react,node,mongoose",
    author:"Rising star",
}

export default Layout;
