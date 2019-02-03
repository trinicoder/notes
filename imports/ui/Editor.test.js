import { Meteor } from 'meteor/meteor';
import React from'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Editor } from './Editor';
import { notes } from '../fixtures/fixtures';

if (Meteor.isClient){
    describe('Editor', function () {
        let browserHistory;
        let call;

        beforeEach(function () {
            call = expect.createSpy();
            browserHistory = {
                push: expect.createSpy()
            };
        });

        it('should render pick note message', function () {
            const wrapper = mount(<Editor browserHistory={browserHistory} call={call}/>);
            expect(wrapper.find('p').text()).toBe('Pick or create a note to get started.');
        });

        it('should  render not found message', function () {
            const wrapper = mount(<Editor browserHistory={browserHistory} call={call} selectedNoteId={notes[0]._id}/>);
            expect(wrapper.find('p').text()).toBe('Note not found');
        });
    });
}