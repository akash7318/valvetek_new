import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
import AddDataEditor from '../components/AddDataEditor';
import Tinymce from '../components/Tinymce';

function KeywordInCity() {
    const [img, setImg] = useState([]);
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [defaultDescription, setDefaultDescription] = useState('');
    const [extraDescription, setExtraDescription] = useState('');
    const [defaultExtraDescription, setDefaultExtraDescription] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');

    const setContent = (content) => {
        setDescription(content);
    }

    const setExtraContent = (content) => {
        setExtraDescription(content);
    }

    useEffect(() => {
        getKeywordInCity();
    }, []);

    const getKeywordInCity = async () => {
        let result = await fetch("http://localhost:5000/ourPresenceInCity");
        result = await result.json();
        if (result.status) {
            setShortDescription(result.ourPresenceInCity.shortDescription);
            setDefaultDescription(result.ourPresenceInCity.description);
            setDefaultExtraDescription(result.ourPresenceInCity.extraDescription);
            setMetaTitle(result.ourPresenceInCity.metaTitle);
            setMetaDescription(result.ourPresenceInCity.metaDescription);
            setMetaKeywords(result.ourPresenceInCity.metaKeywords);
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        toast.success('Updated Successfully.');

        const formData = e.target;
        const data = new FormData(formData);

        const url = "http://localhost:5000/updateOurPresenceInCity";

        let result = await fetch(
            url,
            {
                method: "POST",
                body: data,
            }
        );
    }

    return (
        <section className='admin_container'>
            <Toaster position="top-right" />
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='shadow w-100 bg-white rounded p-4'>
                        <BreadCrumb pageName="Our Presence In City" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <AddData
                                        changeFunction={setImg}
                                        Label="Image"
                                        name="img"
                                        inputType="file"
                                    />
                                </div>
                                <div className='col-md-12 textarea-box'>
                                    <label htmlFor="">Short Description :</label>
                                    <textarea
                                        name="shortDescription"
                                        onChange={(e) => setShortDescription(e.target.value)}
                                        cols="30"
                                        rows="10"
                                        placeholder='Short Description'
                                        defaultValue={shortDescription}
                                    >
                                    </textarea>
                                </div>
                                <div className='col-md-12'>
                                    <AddDataEditor
                                        Label="Description"
                                        Editor={<Tinymce name="description" value={defaultDescription} description={setContent} />}
                                    />
                                </div>
                                <div className='col-md-12'>
                                    <AddDataEditor
                                        Label="Extra Description"
                                        Editor={<Tinymce name="extraDescription" value={defaultExtraDescription} description={setExtraContent} />}
                                    />
                                </div>
                                <div className='col-md-12'>
                                    <AddData
                                        changeFunction={setMetaTitle}
                                        Label="Meta Title"
                                        name="metaTitle"
                                        inputType="text"
                                        value={metaTitle}
                                    />
                                </div>
                                <div className='col-md-12 textarea-box'>
                                    <label htmlFor="">Meta Description :</label>
                                    <textarea
                                        name="metaDescription"
                                        onChange={(e) => setMetaDescription(e.target.value)}
                                        cols="30"
                                        rows="10"
                                        placeholder='Meta Description'
                                        defaultValue={metaDescription}
                                    >
                                    </textarea>
                                </div>
                                <div className='col-md-12 mt-3 textarea-box'>
                                    <label htmlFor="">Meta Keywords :</label>
                                    <textarea
                                        name="metaKeywords"
                                        onChange={(e) => setMetaKeywords(e.target.value)}
                                        cols="30"
                                        rows="10"
                                        placeholder='Meta Keywords'
                                        defaultValue={metaKeywords}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'>
                                    <div className='row justify-content-end'>
                                        <button
                                            type='submit'
                                            className='btn btn-primary mt-2 float-right w-fit col-auto mx-2'
                                        >
                                            Save Data
                                        </button>
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

export default KeywordInCity