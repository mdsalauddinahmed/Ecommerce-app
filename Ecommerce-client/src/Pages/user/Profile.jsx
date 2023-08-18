import React from 'react';
import UserMenu from '../../Componenets/Layouts/UserMenu';
import Layout from '../../Componenets/Layouts/Layout';

const Profile = () => {
    return (
        <Layout title={" user profile- Ecommerce App"}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
              <div className="col-md-3">
                   <UserMenu></UserMenu>
              </div>
              <div className="col-md-9"> 
              
               <h3>Profile</h3>
              </div>
          </div>
        </div>
          
      </Layout>
    );
}

export default Profile;
