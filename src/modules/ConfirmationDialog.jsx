import React, { useState } from 'react';

const ConfirmationDialog = ({
    dialogText,
    ShowingQuestion,
    HandleConfirmDelete,
    HandleCancelDelete
}) => {



    return (
        <>
        {ShowingQuestion &&
            <article>
            <p>{dialogText}</p>
            <button onClick={HandleConfirmDelete}>بلی</button>
            <button onClick={HandleCancelDelete}>خیر</button>
            </article>
        }
        </>
    );
};

export default ConfirmationDialog;