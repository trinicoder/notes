import { Meteor } from 'meteor/meteor';
import React from'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoteListItem from './NoteListItem';
if (Meteor.isClient){
    describe('NoteListItem', function () {
        it('should render title and timestamp', function () {
            const title = 'My title here';
            const updatedAt = 1546186425317;
            const wrapper = mount( <NoteListItem note={{ title,updatedAt}}/>);

            expect(wrapper.find('h5').text()).toBe(title);
            expect(wrapper.find('p').text()).toBe('12/30/18');
        });

        it('should test default title if no title set', function () {
            const title = '';
            const updatedAt = 1546186425317;
            const wrapper = mount( <NoteListItem note={{ title,updatedAt}}/>);

            expect(wrapper.find('h5').text()).toBe('Untitled note');
            //expect(wrapper.find('p').text()).toBe('12/30/18');
        });
        
    })
}