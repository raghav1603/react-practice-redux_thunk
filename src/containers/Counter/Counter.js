import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions/index'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
                <br />
                <CounterControl label="Reset" clicked={this.props.resetCounter} />
                <hr />
                <button onClick={() => this.props.showCounter(this.props.ctr)} >Show result</button>
                <ul>
                    {this.props.storedResult.map(strResult => (

                        <li onClick={() => this.props.deleteCounter(strResult.id)} key={strResult.id}> {strResult.val} </li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStatetoProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.result
    }
}
const mapDispatchtoProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionType.increment()),
        onDecrementCounter: () => dispatch(actionType.decrement()),
        onAddCounter: () => dispatch(actionType.add(5)),
        onSubCounter: () => dispatch(actionType.sub(5)),
        resetCounter: () => dispatch(actionType.reset()),
        showCounter: (result) => dispatch(actionType.storeResult(result)),
        deleteCounter: (id) => dispatch(actionType.deleteResult(id))
       
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);