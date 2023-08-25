import React, { useEffect, useState } from 'react';
import AdminMenu from '../../Componenets/Layouts/AdminMenu';
import Layout from '../../Componenets/Layouts/Layout';
import CategoryForm from '../../Componenets/Form/CategoryForm';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const CreateCategory = () => {

const [categories,setCategories]=useState([]);
const [name, setName] = useState("");


// Handle submit button
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post("http://localhost:8080/api/vi/category/create-category", {
      name,
    });
    if (data?.success) {
      toast.success(`${name} is created`);
      getAllCategory();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("somthing went wrong in input form");
  }
};



// get all category
const getAllCategory = async () => {
  try {
    const { data } = await axios.get("http://localhost:8080/api/vi/category/get-category");
    if (data?.success) {
      setCategories(data?.category);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something wwent wrong in getting catgeory");
  }
};

useEffect(() => {
  getAllCategory();
}, []);



    return (
        <Layout title={"Admin Dashboard Category - Ecommerce App"}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
              <div className="col-md-3">
                  <AdminMenu></AdminMenu>
              </div>
              <div className="col-md-9"> 
               <h2>Create Category</h2>
               <div className="p-3 w-50">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
                key={name}
              />
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-primary ms-2"
                            
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
              </div>
          </div>
        </div>
          
      </Layout>
    );
}

export default CreateCategory;
