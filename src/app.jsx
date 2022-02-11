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
    // 여기 있는 habits 배열도 직접 state배열에 접근하는 것과 같음. 뒤에서 수정할 예정
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else return item;
    });
    this.setState({ habits });
  };

  handleDecrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return {
          ...habit,
          count: habit.count === 0 ? 0 : habit.count - 1,
        };
      } else return item;
    });
    this.setState({ habits });
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
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      } else return habit;
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
