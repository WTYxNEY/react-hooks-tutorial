import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterOne from './components/HookCounterOne'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'
import ComponentC from "./components/ComponentC"

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Watunyu"}>
        <ChannelContext.Provider value={"Panmun"}>
          <ComponentC />
        </ChannelContext.Provider>

      </UserContext.Provider>
      {/* <HookCounterOne /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounterFour/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}

    </div>
  );
}

export default App;
//ใช้ท่า setState({…}) เมื่อต้องการเปลี่ยน state เป็นค่าใหม่โดยไม่สน state เก่า
//ใช้ท่า setState(prevState => …) เมื่อต้องการนำ state เก่ามาคำนวณ state ใหม่