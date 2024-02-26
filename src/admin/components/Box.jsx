import React from 'react'
import { Link } from 'react-router-dom'
import WebIcon from '@mui/icons-material/Web';

function Box() {
    return (
        <div className='col-lg-4 col-xxl-3 col-md-6'>
            <Link to='' >
                <div className='shadow p-3 mb-4 bg-white rounded align-items-center'>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-8'>
                            <small>Site Info</small>
                            <h4 className='lh-1 mt-2'>Information</h4>
                        </div>
                        <div className='col-4 d-flex justify-content-center fs-5 align-items-center'>
                            <WebIcon className='fs-1' />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Box