import React from 'react';

const ConfirmationDialog = ({
    dialogText,
    showingQuestion,
    handleCancelDelete,
    handleConfirmDelete
}) => {



    return (
        <>
        {showingQuestion &&
            <article className='fixed w-full h-[20svh]  right-0  top-[40%] z-50 grid place-items-center  rounded-xl  shadow-2xl text-center  bg-red-400 bg-opacity-80  '>
            <p className='text-2xl  z-[55] '>{dialogText}</p>
            <section className='w-full flex items-center justify-around z-[55]'>
                <button className='Darkbutton w-2/5 text-xl' onClick={handleConfirmDelete}>بلی</button>
                <button className='Darkbutton w-2/5 text-xl' onClick={handleCancelDelete}>خیر</button>
            </section>
            </article>
        }
        </>
    );
};

export default ConfirmationDialog;