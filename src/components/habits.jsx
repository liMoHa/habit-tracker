import React,  {Component} from 'react';
import Habit from './habit';

class Habits extends Component{
    state = {
        habits : [
            {id: 0, name: "Coding", count: 0},
            {id: 1, name: "Studying", count: 0},
            {id: 2, name: "Speaking", count: 0}
        ],
    };

    handleIncrease = (habit) =>{
        /* habit.count++;
        console.log(habit.count);
        this.setState(this.state); 
        직접 변경 하는 것은 좋지 않음.
        */
       const habits = [...this.state.habits];
       const index = habits.indexOf(habit);
       habits[index].count++;
    //    this.setState({habits: habits});
       this.setState({habits});

    }
    
    handleDecrease = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({habits});
        // 왜 객체 통째로 update해줘야 되지
    }
    
    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id );
        console.log(habits);

        this.setState({habits});
    }

    render(){
        return( 
            <ul>
            {
                this.state.habits.map((item) => 
                <Habit
                key={item.id} 
                habit={item} 
                onIncrease={this.handleIncrease}
                onDecrease={this.handleDecrease}
                onDelete={this.handleDelete} 
                />)
            }
            </ul>
        );
    }
}

export default Habits;