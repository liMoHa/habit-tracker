import { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Habits from './components/habits';

// functional component인데 class에서 작성하던 것처럼 해도 되나..?
class App extends Component {
  state = {
    habits: [
      { id: 0, name: 'Coding', count: 0 },
      { id: 1, name: 'Studying', count: 0 },
      { id: 2, name: 'Speaking', count: 0 },
    ],
  };

  handleIncrease = (habit) => {
    /* habit.count++;
    console.log(habit.count);
    this.setState(this.state); 
    직접 변경 하는 것은 좋지 않음.
    */

    // 여기 있는 habits 배열도 직접 state배열에 접근하는 것과 같음. 뒤에서 수정할 예정
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
    // 왜 객체 통째로 update해줘야 되지
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    // id고유하게 만들기. 근데 Date.now()는 웬만하면 겹칠일 x
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = [...this.state.habits];
    habits.forEach((habit) => {
      habit.count = 0;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={
            // 간단하기 때문에 따로 state로 안 만들고 바로 자식 컴포넌트로 전달.
            // 그리고 setState가 호출되면 전체가 다시 rendering되기 때문에 totalCount값도 같이 변경됨.
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
