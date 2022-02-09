import { Component } from 'react/cjs/react.development';
import './app.css';
import Add from './components/add';
import Habits from './components/habits';
import Navbar from './components/navbar';

// functional component인데 class에서 작성하던 것처럼 해도 되나..?
class App extends Component {
  state = {
    habits : [
        {id: 0, name: "Coding", count: 0},
        {id: 1, name: "Studying", count: 0},
        {id: 2, name: "Speaking", count: 0}
    ],
    navbarCount : 0,
  };

  handleIncrease = (habit) =>{
    /* habit.count++;
    console.log(habit.count);
    this.setState(this.state); 
    직접 변경 하는 것은 좋지 않음.
    */

// 여기 있는 habits 배열도 직접 state배열에 접근하는 것과 같음. 뒤에서 수정할 예정 
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  habits[index].count++;
  this.setState({habits}); 
  
  let navbarCount = this.state.navbarCount;
  const habitCount = habits[index].count;
  navbarCount = habitCount === 1 ? navbarCount + 1 : navbarCount;
  this.setState({navbarCount}); // count

  }

  handleDecrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});
    // 왜 객체 통째로 update해줘야 되지
    
    const habitCount = habits[index].count;
    let navbarCount = this.state.navbarCount;
    navbarCount = navbarCount > 0 && habitCount === 0 ? navbarCount - 1 : navbarCount;
    this.setState({navbarCount}); // count
  }

  handleDelete = (habit) => {
      const habits = this.state.habits.filter(item => item.id !== habit.id );
      this.setState({habits});

      let navbarCount = this.state.navbarCount; // 복사하는 API가 있겠지 아마
      const habitCount = habit.count;
      navbarCount = habitCount <= 0 ? navbarCount : navbarCount - 1; 
      this.setState({ navbarCount });
  }

  handleAdd = (habitName) => {
    const id = this.state.habits.length;
    const habit = { id: id, name: habitName, count: 0};
    const habits = [...this.state.habits];
    habits.push(habit);
    this.setState({habits});
}

  render(){
    return (
      <>
        <Navbar count={this.state}></Navbar>
        <Add onAdd={this.handleAdd}></Add>
        <Habits
          habits={this.state.habits} 
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete} 
        >
        </Habits>
      </>
    );
  }
}

export default App;
