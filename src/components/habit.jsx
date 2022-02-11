import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  onIncrease = () => {
    this.props.onIncrease(this.props.habit);
  };

  onDecrease = () => {
    this.props.onDecrease(this.props.habit);
  };

  onDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // 이렇게 한 번에 작성할 수도 있음.
    /* 단, 이름이 같아야 함. */
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.onIncrease}
        >
          <i className="fas fa-plus-square "></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.onDecrease}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.onDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
