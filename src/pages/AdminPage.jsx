import React from 'react';
// components
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';

const AdminPage = () => {
    return (
        <div >
        <CategoryList/>
        <CategoryForm/>
        </div>
    );
};

export default AdminPage;