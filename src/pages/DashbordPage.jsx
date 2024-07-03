import React from 'react';
import AddNewPost from '../components/AddNewPost';
import PostsList from '../components/PostsList';

const DashbordPage = () => {
    return (
        <div>
            DashbordPage
            <PostsList/>
            <AddNewPost/>
        </div>
    );
};

export default DashbordPage;