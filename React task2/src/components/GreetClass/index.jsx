import React, { Component, PureComponent } from 'react'
import classes from './styles.module.css'

class GreetClass extends PureComponent {
    constructor(props) {
        super(props)
        console.log('GreetClass constructor')
        this.state = {
            count: this.props.count,
            hager: 5,
        }
    }


    componentDidMount() {
        console.log('GreetClass componentDidMount')
        // alert('GreetClass componentDidMount')
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('GreetClass shouldComponentUpdate', nextProps, nextState)
        return true
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('GreetClass getSnapshotBeforeUpdate', prevProps, prevState)
        return null
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('GreetClass componentDidUpdate', prevProps, prevState)
        // alert('GreetClass componentupdated didMount', prevProps, prevState)

    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('GreetClass get Derived State FromProps', nextProps, prevState)
        return null
    }

    componentWillUnmount() {
        console.log('GreetClass componentWillUnmount')
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1,
            hager: this.state.hager + 1
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
            <h1 className={classes['greet-container']}>{this.state.count} </h1>
            {/* <h1 className={classes['greet-container']}>{this.state.hager} </h1> */}
            {
                <h1 className={classes['greet-container']}>
                    {this.state.count <= 5 ? <span> count is smaller than 5</span> : <span> count is bigger than 5</span>}
                </h1>
            }
            <button onClick={this.handleAdd} > + </button>
            <button onClick={this.handleRemove} > - </button>

        </>;
    }
}


export default GreetClass