import { Meteor } from 'meteor/meteor';
import React from'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { notes } from '../fixtures/fixtures';
import { NoteListItem } from './NoteListItem';
if (Meteor.isClient){
    describe('NoteListItem', function () {
        let Session;
        beforeEach(() => {
            Session = {
                set: expect.createSpy()
            };
        });
        it('should render title and timestamp', function () {
            
            const wrapper = mount( <NoteListItem note={notes[0]} Session={Session}/>);

            expect(wrapper.find('h5').text()).toBe(notes[0].title);
            expect(wrapper.find('p').text()).toBe('12/30/18');
        });

        it('should test default title if no title set', function () {

            const wrapper = mount( <NoteListItem note={notes[1]} Session={Session}/>);

            expect(wrapper.find('h5').text()).toBe('Untitled note');
            //expect(wrapper.find('p').text()).toBe('12/30/18');
        });

        it('should call set on click', function () {
            const wrapper = mount( <NoteListItem note={notes[0]} Session={Session}/>);
           
            wrapper.find('div').simulate('click');

            expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[0]._id);

        });
        
    })
}