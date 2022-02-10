import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();
  // this 바인딩 공부해야겠다 이렇게 작성했을 때 되는 이유를 모르겠네
  onSubmit = (e) => {
    e.preventDefault();
    /* submit태그를 이용하면 기본적으로 다른 곳으로 이동할 것이라 예측하고 있기 때문에 refresh가 발생한다. 
    이는 preventDefault API를 이용해서 브라우저의 기본 동작을 취소해주면 된다.  */

    // const input = document.querySelector('.add-input'); // react에서는 이거 대신 ref를 사용함.
    const input = this.inputRef.current;
    this.props.onAdd(input.value);
    input.focus();
    // input.value = '';
    this.formRef.current.reset();
  };
  render() {
    return (
      <>
        {/* form tag baseURL 마지막에 ?가 붙어있음 이거 get, post방식과 관련 있는 듯. */}
        <form className="add-form" ref={this.formRef} onSubmit={this.onSubmit}>
          <input
            type="text"
            className="add-input"
            ref={this.inputRef}
            placeholder="Habit"
            autoFocus
          />
          <button className="add-button">Add</button>
        </form>
      </>
    );
  }
}

export default HabitAddForm;
