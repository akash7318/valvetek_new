import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../admin/pages/Dashboard';
import Banner from '../admin/pages/Banner';

import Login from '../Login';
import AllProduct from '../admin/pages/AllProduct';
import AddProduct from '../admin/pages/AddProduct';

function SiteLayout() {
    return (
        <Routes>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/banner' element={<Banner />} />
            <Route path='/admin/all-product' element={<AllProduct />} />
            <Route path='/admin/add-product' element={<AddProduct />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default SiteLayout