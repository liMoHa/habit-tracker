import React, {Component} from 'react';
import Habits from './habits';

class Habit extends Component{
    state = {
        count: 0,
    };
    
    handleIncrease = () =>{
        this.setState({count: this.state.count + 1});
    }

    handleDecrease = () =>{
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count});
    }

    handleDelete = () =>{
        this.setState({count: 0});
    }
    render(){
        
        return(
            <li className="habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrease}>
                    <i class="fas fa-plus-square "></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrease}>
                    <i class="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
