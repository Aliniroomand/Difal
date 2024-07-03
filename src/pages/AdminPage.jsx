import React from 'react';
// components
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';

const AdminPage = () => {
    return (
        <div >
            AdminPage
        <CategoryList/>
        <CategoryForm/>
        </div>
    );
};

export default AdminPage;