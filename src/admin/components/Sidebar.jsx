import React from 'react';
import { useLocation } from 'react-router';
import './Sidebar.css';
import '../Admin.css';
import PageNavi from './PageNavi';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import InventoryIcon from '@mui/icons-material/Inventory';
import PageNaviChild from './PageNaviChild';

function Sidebar() {
    const location = useLocation();
    const pages = [
        {
            name: 'Dashboard',
            icon: <DashboardIcon />,
            link: '/admin/dashboard',
            hasChildren: false,
            addClass: location.pathname === "/admin/dashboard" ? "active" : null
        },
        {
            name: 'Banner',
            icon: <DashboardIcon />,
            link: '/admin/banner',
            hasChildren: false,
            addClass: location.pathname === "/admin/banner" ? "active" : null
        },
        {
            name: 'Product',
            icon: <DashboardIcon />,
            link: '#',
            hasChild: true,
            addClass: location.pathname.includes('product') ? "active" : null,
            childs: [
                {
                    name: 'All Product',
                    link: '/admin/all-product',
                    addChildClass: location.pathname === "/admin/all-product" ? "active" : null
                },
                {
                    name: 'Add Product',
                    link: '/admin/add-product',
                    addChildClass: location.pathname === "/admin/add-product" ? "active" : null
                }
            ]
        }
    ];

    return (
        <div className='sidebar'>
            {
                pages.map((value, index) =>
                    <PageNavi
                        key={index}
                        pageName={value.name}
                        pageIcon={value.icon}
                        link={value.link}
                        hasChild={value.hasChild}
                        addClass={value.addClass}
                        childrens={value.childs ? value.childs : null}
                    />
                )
            }
            {/* <PageNavi pageIcon={<DashboardIcon />} pageName="Dashboard" />
            <PageNavi pageIcon={<ViewCarouselIcon />} pageName="Banners" addClass="" hasChild={<PageNaviChild addClass="" pageName="Subbanner" />} />
            <PageNavi pageIcon={<InventoryIcon />} pageName="Products" /> */}
        </div>
    )
}

export default Sidebar