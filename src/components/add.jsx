import { Component } from "react/cjs/react.production.min";

class Add extends Component{

    // this 바인딩 공부해야겠다 이렇게 작성했을 때 되는 이유를 모르겠네
    handleAdd = (e) => {
        // input을 받아오는 게 아니라 아래에 JSX문법으로 변수 생성해서 사용하려고 했는데 안 된다네...
        const input = document.querySelector('.add-input');
        if(e.key === 'Enter' || e.type === 'click'){
            this.props.onAdd(input.value);
            input.value = '';
            input.focus();
        }
    }
    render(){
        return(
            <>
                <input type="text" className="add-input" defaultValue="Habit" onKeyDown={this.handleAdd} autoFocus />
                <button className="add-button" onClick={this.handleAdd} >Add</button>
            </>
        )
    }
}

export default Add;