import React, { useState } from "react";
import SwitchBtn from "./SwitchBtn";
import './TableCommon.css';

const TableCommon = () => {

  return (
    <table className='table_common'>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Action</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td><img className='img-one' src="../../../images/img/about-1.jpg" alt="" /></td>
          <td>Admin</td>
          <td>
            <SwitchBtn />
          </td>
          <td><span className="Active">Active</span></td>
        </tr>
        <tr>
          <td>02</td>
          <td><img className='img-one' src="../../../images/img/about-1.jpg" alt="" /></td>
          <td>Admin</td>
          <td>
            <SwitchBtn />
          </td>
          <td><span className="DeActive">Deactive</span></td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableCommon
