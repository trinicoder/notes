import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import propTypes from 'prop-types';


export const NoteListHeader = (props) => {
    return (
      <div>
        <button onClick={() => {
          props.meteorCall('notes.insert');
        }}>Create Note</button>
      </div>
    );
  };

NoteListHeader.propTypes = {
    meteorCall: propTypes.func
  };

export default createContainer(() => {
    return {
      meteorCall: Meteor.call
    };
  }, NoteListHeader);