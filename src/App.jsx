import './App.css';
import Navbar from './components/Navbar/Navbar';
import sample from './imgs/sample.png'
import { useState } from 'react';
import Lottery from './components/Lottery/Lottery';
import Swap from './components/Swap/Swap';
function App() {
  const LotteryShow = 1;
  const SwapShow = 2;
  let [show, setShow] = useState(2);
  return (
    <div className="App">
      {/* <img src={sample} alt="" /> */}
      <Navbar handler={setShow} />
      <div className='container'>
      <img className="cryptogif" src={sample} alt="" />
      <div className='main'>
      {show===LotteryShow && <Lottery/>}
      {show===SwapShow && <Swap/>}
      </div>
      </div>
    </div>
  );
}

export default App;
