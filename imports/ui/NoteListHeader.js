import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import propTypes from 'prop-types';


export const NoteListHeader = (props) => {
    return (
      <div>
        <button onClick={() => {
          props.meteorCall('notes.insert', (err, res) =>{
            if (res) {
              props.Session.set('selectNoteId', res);
            }
          });
        }}>Create Note</button>
      </div>
    );
  };

NoteListHeader.propTypes = {
    meteorCall: propTypes.func.isRequired,
    Session: propTypes.object.isRequired
  };

export default createContainer(() => {
    return {
      meteorCall: Meteor.call,
      Session
    };
  }, NoteListHeader);