import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Note from './Note';


class App extends Component{

    constructor(){
        super();
        this.state={
            text: '',
            notes:[]

        }
    }

    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({text:event.target.value})
        
    }

    handleClick=(e)=>{
        e.preventDefault();
       const {notes, text } = this.state;
       notes.push({text});
       this.setState({notes});


    }
    render(){
        return(
            <div>
                <h2>Note to self</h2>
                <Form inline>
                    <FormControl  onChange={this.handleChange}/>
                    { '     '}
                    <Button onClick={this.handleClick}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note, index)=>{
                    return (
                        <Note key={index} note={note} />
                    )
                })}

                
            </div>
        )
    }
}



export default App;
