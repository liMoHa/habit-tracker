import React,  {Component} from 'react';
import Habit from './habit';

class Habits extends Component{
    
    render(){
        return( 
            <ul>
            {
                this.props.habits.map((item) => 
                <Habit
                key={item.id} 
                habit={item} 
                onIncrease={this.props.onIncrease}
                onDecrease={this.props.onDecrease}
                onDelete={this.props.onDelete} 
                />)
            }
            </ul>
        );
    }
}

export default Habits;