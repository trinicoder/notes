import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
const NoteListItem = (props) => {
    return (
        <div>
            <h5>{ props.note.title || 'Untitled note' }</h5>
            <p>{ moment(props.note.updatedAt).format('M/DD/YY')}</p>
        </div>
    );
};

NoteListItem.propTypes = {
    note: propTypes.object.isRequired
};
export default NoteListItem;