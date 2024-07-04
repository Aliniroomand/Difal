import React, { useState } from 'react';

// react query 
import { useMutation, useQueryClient } from '@tanstack/react-query';
// toast toast and utils
import Loader from '../modules/Loader';
import ConfirmationDialog from '../modules/ConfirmationDialog';
import toast from 'react-hot-toast';
import { deletePost } from '../services/Dashbord';

const DeletePosts = ({postId}) => {
    const queryClient = useQueryClient();

    const [showingQuestion, setShowingQuestion] = useState(false);


    const{mutate,isPending,error}=useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries("my-posts-list")
        },
        onError: (error) => {
        toast.error(`${error.message}`);
    }
    });

    
    const deleteHandler = () => {
        setShowingQuestion(true);
    };

    const handleConfirmDelete = () => {
        mutate(postId);
        setShowingQuestion(false);
    };

    const handleCancelDelete = () => {
        setShowingQuestion(false);
    };




    return (
        <>
            <button disabled={isPending} className='Darkbutton p-0 m-0 sm:text-sm text-xs bg-red-300' onClick={deleteHandler}>حذف </button>
            { isPending &&
            <section className='relative flex flex-col justify-end items-center' >
                <Loader />
                <p>در حال حذف پست</p>
            </section>
            }

            <ConfirmationDialog
                dialogText="آیا از بابت حذف پست مطمئن هستید؟" showingQuestion={showingQuestion} handleConfirmDelete={handleConfirmDelete}
                handleCancelDelete={handleCancelDelete}
            />
        </>
    );
};

export default DeletePosts;