import React from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one'
        }
        this.Roll = this.Roll.bind(this);

    }

    Roll() {
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({
            die1: newDie1,
            die2: newDie2
        })
    }
    render() {
        return (
            <>
                <div className='Dice'>
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                </div>
                <button onClick={this.Roll}>Roll Dice</button>
            </>
        )

    }
}

export default RollDice;