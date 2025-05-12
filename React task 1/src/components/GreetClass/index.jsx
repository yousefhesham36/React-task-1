import React, { Component, PureComponent } from 'react'
import classes from './styles.module.css'

class GreetClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count,
        }
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    handleRemove = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        console.log('GreetClass render')
        console.log(this.state.count);
        return <>
            <div className={classes["parent"]}>
                <h1 className={classes['greet-container']}>{this.state.count} </h1>
                {
                    <h1 className={classes['greet-container']}>
                        {this.state.count <= 5 ? <span> count is smaller than 5</span> : <span> count is bigger than 5</span>}
                    </h1>
                }
                <button onClick={this.handleAdd} > + </button>
                <button onClick={this.handleRemove} > - </button>
            </div>

        </>;
    }
}


export default GreetClass