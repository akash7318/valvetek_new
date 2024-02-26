import React, { useState } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
import AddDataEditor from '../components/AddDataEditor';
import Tinymce from '../components/Tinymce';

const AddBanner = () => {
    const [description, setDescription] = useState('');

    const setContent = (content) => {
        setDescription(content);
    }
    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='content_container'>
                        <BreadCrumb pageName="Add Products" link="/admin" btnName="Manage Banners" />
                        <div className='add_data'>
                            <div className='row'>
                                <div className='col-12'>
                                    <AddData Width='w-50' Label="Banner Name" inputType="text" Placeholder="Name" />
                                </div>
                                <div className='col-12'>
                                    <AddData Label="Banner Image" inputType="file" />
                                </div>
                                <div className='col-12'>
                                    <AddDataEditor Label="Banner Description" Editor={<Tinymce value="" description={setContent} />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddBanner
