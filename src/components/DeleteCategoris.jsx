import React, { useState } from 'react';

// react query 
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategory } from '../services/Admin';
// toast toast and utils
import Loader from '../modules/Loader';
import ConfirmationDialog from '../modules/ConfirmationDialog';
import toast from 'react-hot-toast';

const DeleteCategoris = ({categoryId}) => {
    const queryClient = useQueryClient();

    const [showingQuestion, setShowingQuestion] = useState(false);


    const{mutate,isPending,error}=useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries("category-list");
        },
        onError: (error) => {
        toast.error(`${error.message}`);
    }
    });

    
    const deleteHandler = () => {
        setShowingQuestion(true);
    };

    const handleConfirmDelete = () => {
        mutate(categoryId);
        setShowingQuestion(false);
    };

    const handleCancelDelete = () => {
        setShowingQuestion(false);
    };




    return (
        <>
            <button className='Darkbutton p-0 m-0 sm:text-sm text-xs bg-lightOrange' onClick={deleteHandler}>حذف </button>
            { isPending &&
            <section className='grid place-items-center' >
                <Loader text={"در حال حذف دسته بندی"}/>
                <p>در حال حذف دسته بندی</p>
            </section>
            }

            <ConfirmationDialog 
                dialogText="آیا از بابت حذف دسته بندی مطمئن هستید؟" showingQuestion={showingQuestion} handleConfirmDelete={handleConfirmDelete}
                handleCancelDelete={handleCancelDelete}
            />
        </>
    );
};

export default DeleteCategoris;