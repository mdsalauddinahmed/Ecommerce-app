import React, { Children } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (porps) => {
    return (
        <div>
            <Header></Header>
            
            <main style={{minHeight:"70vh"}}>
            {porps.children}
            </main>
            <Footer></Footer>
     </div>
    );
}

export default Layout;
