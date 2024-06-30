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
            <article>
            <p>{dialogText}</p>
            <button onClick={handleConfirmDelete}>بلی</button>
            <button onClick={handleCancelDelete}>خیر</button>
            </article>
        }
        </>
    );
};

export default ConfirmationDialog;