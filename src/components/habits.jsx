import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
/* 
Habits component는 매번 update될 때 주소가 바뀌는 habits를 props로 받기 때문에 항상 rerendering이 발생한다. 
따라서 PureComponent로 만들어주는 것은 불필요해 보인다. */

/* 
함수를 render할 때 정의하는 게 아니라 주소만 넘기는 이유는 
rendering될 때마다 정의한 함수가 만들어져 메모리 낭비가 생기기 때문임.
하지만 낭비가 심한 편은 아니라 그냥 component안에서 이벤트가 발생할 때 바로 정의해도 되지만
절대 그러면 안 되는 것들이 있음. -> hook관련 */

class Habits extends Component {
  handleIncrease = (habit) => {
    this.props.onIncrease(habit);
  };

  handleDecrease = (habit) => {
    this.props.onDecrease(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((item) => (
            <Habit
              key={item.id}
              habit={item}
              onIncrease={this.handleIncrease}
              onDecrease={this.handleDecrease}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        {/* reset button은 재사용 할 일이 없어보여서 component로 만들지 않음. */}
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
