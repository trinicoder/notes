import React from 'react';

import propTypes from 'prop-types';

const NoteListEmptyItem = () => {
    return (
        <div>
            <h5>You have no notes</h5>
            <p>Create a note to get started</p>
        </div>
    );
};

export default NoteListEmptyItem;