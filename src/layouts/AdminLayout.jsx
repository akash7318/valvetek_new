import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../admin/pages/Dashboard';
import SiteInfo from '../admin/pages/SiteInfo';
import Banner from '../admin/pages/Banner';
import BannerData from '../admin/pages/BannerData';

import Login from '../Login';
import AllProduct from '../admin/pages/AllProduct';
import ProductData from '../admin/pages/ProductData';

function SiteLayout() {
    return (
        <Routes>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/site-info' element={<SiteInfo />} />
            <Route path='/admin/banner' element={<Banner />} />
            <Route path='/admin/banner/data' element={<BannerData />} />
            <Route path='/admin/banner/data/:_id' element={<BannerData />} />
            <Route path='/admin/all-product' element={<AllProduct />} />
            <Route path='/admin/product-data' element={<ProductData />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default SiteLayout