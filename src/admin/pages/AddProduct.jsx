import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';

function AddProduct() {
    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='content_container'>
                       <BreadCrumb pageName="Add Products" link="/admin" btnName="Manage Products" />
                       <div className='add_data'>
                        <AddData Label="Product Name" inputType="text" Placeholder="Name" />
                        <AddData Label="Product Image" inputType="file"  />
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddProduct