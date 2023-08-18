import React from 'react';
import UserMenu from '../../Componenets/Layouts/UserMenu';
import Layout from '../../Componenets/Layouts/Layout';

const Orders = () => {
    return (
        <Layout title={"user oders - Ecommerce App"}>
          <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                   <UserMenu></UserMenu>
                </div>
                <div className="col-md-9"> 
                
                 <h2>Orders</h2>
                
                </div>
            </div>
          </div>
            
        </Layout>
    );
}

export default Orders;
