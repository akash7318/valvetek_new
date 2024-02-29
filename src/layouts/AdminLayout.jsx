import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../admin/pages/Dashboard';
import SiteInfo from '../admin/pages/SiteInfo';
import Banner from '../admin/pages/Banner';
import BannerData from '../admin/pages/BannerData';

import Login from '../Login';
import Product from '../admin/pages/Product';
import ProductData from '../admin/pages/ProductData';
import PromotionalCategory from '../admin/pages/PromotionalCategory';
import PromotionalCategoryData from '../admin/pages/PromotionalCategoryData';
import KeywordInCity from '../admin/pages/KeywordInCity';

function SiteLayout() {
    return (
        <Routes>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/site-info' element={<SiteInfo />} />

            <Route path='/admin/banner' element={<Banner />} />
            <Route path='/admin/banner/data' element={<BannerData />} />
            <Route path='/admin/banner/data/:_id' element={<BannerData />} />

            <Route path='/admin/product' element={<Product />} />
            <Route path='/admin/product/data' element={<ProductData />} />
            <Route path='/admin/product/data/:_id' element={<ProductData />} />

            <Route path='/admin/promotionalCategory' element={<PromotionalCategory />} />
            <Route path='/admin/promotionalCategory/data' element={<PromotionalCategoryData />} />
            <Route path='/admin/promotionalCategory/data/:_id' element={<PromotionalCategoryData />} />

            <Route path='/admin/keywordInCity' element={<KeywordInCity />} />

            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default SiteLayout