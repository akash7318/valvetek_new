import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
import AddDataEditor from '../components/AddDataEditor';
import Tinymce from '../components/Tinymce';

const AddBanner = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [textField1, setTextField1] = useState('');
    const [textField2, setTextField2] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');

    const setContent = (content) => {
        setDescription(content);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append("name", name);
        data.append("textField1", textField1);
        data.append("textField2", textField2);
        data.append("file", file);
        data.append("description", description);

        const url = "http://localhost:5000/createBanner";

        let result = await fetch(
            url,
            {
                method: "POST",
                body: data,
            }
        );

        result = await result.json();
        console.log(result);
        if (result) {
            navigate('/admin/banner');
        }
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
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'>
                                    <AddData Width='w-50' changeFunction={setName} Label="Banner Name" inputType="text" Placeholder="Name" />
                                </div>
                                <div className='col-12'>
                                    <AddData Width='w-50' changeFunction={setTextField1} Label="Text Fields One" inputType="text" Placeholder="Text" />
                                </div>
                                <div className='col-12'>
                                    <AddData Width='w-50' changeFunction={setTextField2} Label="Text Fields Two" inputType="text" Placeholder="Text" />
                                </div>
                                <div className='col-12'>
                                    <AddData Label="Banner Image" changeFunction={setFile} inputType="file" />
                                </div>
                                <div className='col-12'>
                                    <AddDataEditor Label="Banner Description" Editor={<Tinymce value="" description={setContent} />} />
                                    <div className='row justify-content-end'>
                                        <button className='btn btn-primary mt-2 float-right w-fit col-auto mx-2'>Save Data</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddBanner
