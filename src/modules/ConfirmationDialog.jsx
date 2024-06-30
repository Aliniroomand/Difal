import React, { useState } from 'react';

const ConfirmationDialog = ({
    dialogText,
    showingQuestion,
    handleCancelDelete,
    handleConfirmDelete
}) => {



    return (
        <>
        {showingQuestion &&
            <article className=' fixed h-1/5 top-[40%]   z-50 w-1/3 right-1/3 grid place-items-center bg-lightOrange rounded-full  shadow-lg shadow-red-900 backdrop-blur-md'>
            <p>{dialogText}</p>
            <section className='w-full flex items-center justify-around'>
                <button className='Darkbutton w-1/5' onClick={handleConfirmDelete}>بلی</button>
                <button className='Darkbutton w-1/5' onClick={handleCancelDelete}>خیر</button>
            </section>
            </article>
        }
        </>
    );
};

export default ConfirmationDialog;