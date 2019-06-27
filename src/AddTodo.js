import React, {Component} from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    //het ophalen van de data uit de box
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    //het handelen van hoe en wat moet worden uitgevoerd.
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" class="todo-input" onChange={this.handleChange} value={this.state.content} placeholder="Maak todo"/>
                </form>
            </div>
        )
    }
}

export default AddTodo