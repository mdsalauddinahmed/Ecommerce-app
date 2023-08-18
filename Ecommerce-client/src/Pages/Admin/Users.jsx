import React from 'react';
import AdminMenu from '../../Componenets/Layouts/AdminMenu';
import Layout from '../../Componenets/Layouts/Layout';

const Users = () => {
    return (
        <Layout title={"Admin Dashboard users - Ecommerce App"}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
              <div className="col-md-3">
                  <AdminMenu></AdminMenu>
              </div>
              <div className="col-md-9"> 
              
              <h2>All users</h2>
              
              </div>
          </div>
        </div>
          
      </Layout>
    );
}

export default Users;
