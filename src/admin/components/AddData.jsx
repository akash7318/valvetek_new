import React from 'react';
import './AddData.css';

const AddData = (props) => {
    return (
                <div className='row data-row'>
                    <div className='col-4'><span className='Lavel'>{props.Label}</span></div>
                    <div className='col-8'><input type={props.inputType} placeholder={props.Placeholder} /></div>
                </div>
    )
}

export default AddData
