import React, { useState } from 'react';

// react query 
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategory } from '../services/Admin';
// toast notify and utils
import notify from '../utils/ToastNotify';
import Loader from '../modules/Loader';
import ConfirmationDialog from '../modules/ConfirmationDialog';


const DeleteCategoris = ({categoryId}) => {
    const queryClient = useQueryClient();

    const [showingQuestion, setShowingQuestion] = useState(false);


    const{mutate,isPending,error}=useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries("category-list");
        },
        onError: (error) => {
        notify(`${error.message}`, "error");
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
            <button className='Darkbutton p-0 m-0' onClick={deleteHandler}>حذف دسته بندی</button>
            { isPending &&
            <section className=' ' >
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