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
            <article className='fixed px-4 w-4/5 h-1/5  right-[10%]  top-[40%] z-50 grid place-items-center bg-lightOrange rounded-xl  shadow-2xl backdrop-blur-md text-center'>
            <p>{dialogText}</p>
            <section className='w-full flex items-center justify-around'>
                <button className='Darkbutton w-2/5' onClick={handleConfirmDelete}>بلی</button>
                <button className='Darkbutton w-2/5' onClick={handleCancelDelete}>خیر</button>
            </section>
            </article>
        }
        </>
    );
};

export default ConfirmationDialog;