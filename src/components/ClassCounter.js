import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevCount => {
            return{
                count: prevCount + 1
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Count: {this.state.count} </button>
            </div>
        )
    }
}

export default ClassCounter
//ใช้ท่า this.setState({…}) เมื่อต้องการเปลี่ยน state เป็นค่าใหม่โดยไม่สน state เก่า
//ใช้ท่า this.setState(prevState => …) เมื่อต้องการนำ state เก่ามาคำนวณ state ใหม่