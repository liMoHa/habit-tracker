import React, { Component } from 'react';

class Reset extends Component {
    handleClickBtn = () => {
        this.props.onClickBtn();
    }
    render() {
        return (
            <button className="habits-reset" onClick={this.handleClickBtn}>Reset All</button>
        );
    }
}

export default Reset;