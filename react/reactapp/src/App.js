import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import FC from "./Components/FunctionalComp";
// import ClassComp from "./Components/ClassComp";
// import Click from "./Components/Click";
// import ParentComp from "./Components/ParentComp";

// function App() {
//   return (
//     <div>
//       <h1>Hello world</h1>
//       <h1>Hey</h1>
//       <FC />
//       <ClassComp />
//       <Click />
//       {/* <ParentComp /> */}
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Classprops from '../Components/Classprops'

export class App extends React.Component {
  render() {
    return (
      <div>
        <Classprops name="learn1" />
      </div>
    );
  }
}

export default App;

