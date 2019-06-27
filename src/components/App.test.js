import React from 'react';
import {mount} from 'enzyme';
import App from './App';



describe('App', ()=>{

    let app = mount(<App />)
    it('renders the app title', ()=>{
       //console.log(app.debug()); 
    expect(app.find('h2').text()).toEqual('Note to self');
    })

    describe('when rendering the form', ()=>{
        it('creates the form component', ()=>{
            expect(app.find('Form').exists()).toBe(true);
        })

        it('creates the form control component', ()=>{
            expect(app.find('FormControl').exists()).toBe(true);
        })

        it('renders a submit button', ()=>{
            expect(app.find('.btn').at(0).text()).toEqual('Submit');
        })
    })

    describe('when creating a note', ()=>{
        let testNote = 'testnote';
        let testNote1 = 'test note'

        beforeEach(()=>{
            app.find('FormControl').simulate('change',{
                target:{value: testNote}
            });
        });

        it('updates the text in state', ()=>{
            expect(app.state().text).toEqual(testNote);
        });

        describe('and submitting the new note', ()=>{
            beforeEach(()=>{
                app.find('.btn').at(0).simulate('click');
            });

            it('adds the new to state', ()=>{
                console.log(app.state());
                expect(app.state().notes[0].text).toEqual(testNote);
            })
        })

    });
    
});