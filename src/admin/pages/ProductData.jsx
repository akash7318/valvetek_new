import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
import AddDataEditor from '../components/AddDataEditor';
import Tinymce from '../components/Tinymce';

function ProductData() {
    const navigate = useNavigate();
    const[productName, setProductName] = useState('');
    const[productImage, setProductImage] = useState('');
    const[shortDesc, setShortDesc] = useState('');
    const[description, setDescription] = useState('');
    const setContent = (content) => {
        setDescription(content);
    }
    const[extraDescription, setExtraDescription] = useState('');
    const setExtraContent = (content) => {
        setExtraDescription(content);
    }
    const[metaTitle, setMetaTitle] = useState('');
    const[metaDescription, setMetaDescription] = useState('');
    const[metaKeywords, setMetaKeywords] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(productName, productImage,shortDesc,metaTitle,metaDescription,metaKeywords,description,extraDescription);
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
                        <BreadCrumb pageName="Add Products" link="/admin/all-product" btnName="Manage Products" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'>
                                    <AddData  changeFunction={setProductName} value={productName} Label="Product Name" inputType="text" Placeholder="Name"  />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setProductImage}  Label="Product Image" inputType="file"  />
                                </div>
                                <div className='col-12 textarea-box'>
                                    <label htmlFor="">Short Description :</label>
                                    <textarea onChange={(e) => setShortDesc(e.target.value)} value={shortDesc} name="" cols="30" rows="10" placeholder='Short Description'></textarea>
                                </div>
                                <div className='col-12'>
                                    <AddDataEditor changeFunction={setContent}  Label="Description" Editor={<Tinymce value="" description={setDescription} />} />
                                </div>
                                <div className='col-12'>
                                    <AddDataEditor changeFunction={setExtraContent}  Label="Extra Description" Editor={<Tinymce value="" description={setExtraDescription} />} />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setMetaTitle} value={metaTitle} Label="Meta Title" Placeholder="Meta Title" inputType="text" />
                                </div>
                                <div className='col-12 textarea-box mt-3 mb-2'>
                                    <label htmlFor="">Meta Description :</label>
                                    <textarea onChange={(e) => setMetaDescription(e.target.value) } value={metaDescription} name="" cols="30" rows="10" placeholder='Meta Description'></textarea>
                                </div>
                                <div className='col-12 textarea-box mt-3 mb-2'>
                                    <label htmlFor="">Meta Keyword :</label>
                                    <textarea onChange={(e) => setMetaKeywords(e.target.value) } value={metaKeywords}  name="" cols="30" rows="10" placeholder='Meta Keyword'></textarea>
                                </div>
                                <div className='row justify-content-end'>
                                        <button type='submit' className='btn btn-primary mt-2 float-right w-fit col-auto mx-2'>Save Data</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductData