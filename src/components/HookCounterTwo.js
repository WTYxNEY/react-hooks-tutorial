import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCounter = 0
    const [count, setCount] = useState(initialCounter)
    function incrementFive() {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)

        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCounter)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Drecement</button>
            <button onClick={() => incrementFive()}>incrementFive</button>
        </div>
    )
}

export default HookCounterTwo
//ใช้ท่า this.setState({…}) เมื่อต้องการเปลี่ยน state เป็นค่าใหม่โดยไม่สน state เก่า
//ใช้ท่า this.setState(prevState => …) เมื่อต้องการนำ state เก่ามาคำนวณ state ใหม่