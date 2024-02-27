import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import BreadCrumb from '../components/BreadCrumb'
import AddData from '../components/AddData'
import AddDataEditor from '../components/AddDataEditor'
import Tinymce from '../components/Tinymce'

function SiteInfo() {
    const navigate = useNavigate();
    const[compName, setCompName] = useState('');
    const[primaryMail, setPrimaryMail] = useState('');
    const[secondaryMail, setSecondaryMail] = useState('');
    const[primaryPhone, setPrimaryPhone] = useState('');
    const[secondaryPhone, setSecondaryPhone] = useState('');
    const[logo, setLogo] = useState('');
    const[favicon, setFavicon] = useState('');
    const[primaryAddress, setPrimaryAddress] = useState('');
    const[secondaryAddress, setSecondaryAddress] = useState('');
    const[thirdAddress, setThirdAddress] = useState('');
    const[fourthAddress, setFourthAddress] = useState('');
    const[facebook, setFacebook] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[twitter, setTwitter] = useState('');
    const[instagram, setInstagram] = useState('');
    const[linkedIn, setLinkedIn] = useState('');
    const[pinterest, setPinterest] = useState('');
    const[youtube, setYoutube] = useState('');
    const[googleAnalytic, setGoogleAnalytic] = useState('');
    const[footerText, setfooterText] = useState('');

    const setContent = (content) => {
        setfooterText(content);
    }
    const submitHandler = async (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append("compName", compName);
        data.append("primaryMail", primaryMail);
        data.append("secondaryMail", secondaryMail);
        data.append("primaryPhone", primaryPhone);
        data.append("secondaryPhone", secondaryPhone);
        data.append("logo", logo);
        data.append("favicon", favicon);
        data.append("primaryAddress", primaryAddress);
        data.append("secondaryAddress", secondaryAddress);
        data.append("thirdAddress", thirdAddress);
        data.append("fourthAddress", fourthAddress);
        data.append("facebook", facebook);
        data.append("whatsapp", whatsapp);
        data.append("twitter", twitter);
        data.append("instagram", instagram);
        data.append("linkedIn", linkedIn);
        data.append("pinterest", pinterest);
        data.append("youtube", youtube);
        data.append("googleAnalytic", googleAnalytic);
        data.append("footerText", footerText);

        const url = "http://localhost:5000/siteinfo";

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
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='shadow w-100 bg-white rounded p-4'>
                        <BreadCrumb pageName="Site Information" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'><h5 className='px-2 text-primary'>Site Information</h5></div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setCompName} Label="Company Name" inputType="text" Placeholder="Name" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setPrimaryMail} Label="Primary Email" inputType="text" Placeholder="Email" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setSecondaryMail} Label="Secondary Email" inputType="text" Placeholder="Email" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setPrimaryPhone} Label="Primary Phone" inputType="text" Placeholder="Phone" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setSecondaryPhone} Label="Secondary Phone" inputType="text" Placeholder="Phone" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData changeFunction={setLogo} Label="Company Logo" inputType="file" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData changeFunction={setFavicon} Label="Favicon" inputType="file" />
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'><h5 className='px-2 text-primary'>Company Address</h5></div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setPrimaryAddress} Label="Primary Address" inputType="text" Placeholder="Address" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setSecondaryAddress} Label="Secondary Address" inputType="text" Placeholder="Address" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setThirdAddress} Label="Address Three" inputType="text" Placeholder="Address" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setFourthAddress} Label="Address Four" inputType="text" Placeholder="Address" />
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'><h5 className='px-2 text-primary'>Social Media</h5></div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setFacebook} Label="Facebook" inputType="text" Placeholder="Link" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setWhatsapp} Label="Whatsapp" inputType="text" Placeholder="Link" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setTwitter} Label="Twitter" inputType="text" Placeholder="Link" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setInstagram} Label="Instagram" inputType="text" Placeholder="Link" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setLinkedIn} Label="LinkedIn" inputType="text" Placeholder="Link" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setPinterest} Label="Pinterest" inputType="text" Placeholder="Link" />
                                </div>
                                <div className='col-md-6'>
                                    <AddData Width='w-50' changeFunction={setYoutube} Label="Youtube" inputType="text" Placeholder="Link" />
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'><h5 className='px-2 text-primary'>Google Analytics</h5></div>
                                <div className='col-12 g-analytic'>
                                    <label htmlFor="">Google Analytic :</label>
                                    <textarea name="" onChange={(e) => setGoogleAnalytic(e.target.value)} cols="30" rows="10" placeholder='Code'></textarea>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'><h5 className='px-2 text-primary'>Footer Content</h5></div>
                                <div className='col-12'>
                                    <AddDataEditor Label="Footer Text" Editor={<Tinymce value="" description={setfooterText} />} />
                                    <div className='row justify-content-end'>
                                        <button type='submit' className='btn btn-primary mt-2 float-right w-fit col-auto mx-2'>Save Data</button>
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

export default SiteInfo