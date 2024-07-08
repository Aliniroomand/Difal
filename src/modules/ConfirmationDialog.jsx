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
            <article className='fixed w-full h-full  right-0  top-[0] z-[100] grid place-items-center  rounded-xl  shadow-2xl text-center bg-white  bg-opacity-70 '>
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