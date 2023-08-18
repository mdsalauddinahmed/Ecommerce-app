import React from 'react';
import Layout from '../../Componenets/Layouts/Layout';
import UserMenu from '../../Componenets/Layouts/UserMenu';
import { useAuth } from '../../Context/Auth';

const Dashboard = () => {
    const [auth]=useAuth()
    return (
        <Layout title={"user-dashboard"}>
            
          <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu></UserMenu>
                </div>
                <div className="col-md-9"> 
                
                <div className="card w-75 p-3">
                <h3>Admin Name: {auth?.user?.name}</h3>
                <h3>Admin Email: {auth?.user?.email}</h3>
                <h3>Admin phone: {auth?.user?.phone}</h3>
                </div>
                
                </div>
            </div>
          </div>
            
        </Layout>
         
        
    );
}

export default Dashboard;
