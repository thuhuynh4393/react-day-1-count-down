import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [minnute, setMinute] = useState(0)
  const [sencond, setSecond] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(89)
  const [countDown, setCountDonwn] = useState('00:00')
  const [timer, setTimer] = useState(0)
  const [running, setRunning] = useState(false)



  function format(time) {
    console.log("here format" , time)
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    let _countDown = minutes + ':' + seconds;
    setCountDonwn(_countDown)
  }

  // function onStart(){
  //   // let _totalSeconds = (minnute*60)+sencond
  //   // setTotalSeconds(_totalSeconds)
  //   // let _timer = setInterval(() => {
  //   //   setTotalSeconds(pre=>pre-1)
  //   //   console.log("totalSeconds",totalSeconds)
  //   //   format(totalSeconds)
  //   // }, 1000);
  //   // setTimer(_timer)

  // }
  // function onChangeStatus(){
  //   // setRunning(!running)
  //   // console.log("running", running)
  //   // if(running){
  //   //   let _timer = setInterval(() => {
  //   //     setTotalSeconds(pre=>pre-1)
  //   //     console.log("setTotalSeconds", totalSeconds)
  //   //     format(totalSeconds)
  //   //   }, 1000);
  //   //   setTimer(_timer)

  //   // }else{
  //   //   clearInterval(timer)
  //   // }
  // }
  // function onReset(){
  //   clearInterval(timer)
  // }

  useEffect(()=>{
    // setInterval(() => {
    //   // setTotalSeconds(preState => preState -1)
    //   console.log("setTotalSeconds", totalSeconds-1)
    //   // format(totalSeconds)
    // }, 1000);
  },[])


  return (
    <div className="App">
      {/* <input type={"number"} onChange={e=>setMinute(e.target.value)}/> Minutes
      <input type={"number"} onChange={e=>setSecond(e.target.value)}/> Senconds
      <button onClick={onStart}>Start</button>
      <button onClick={onChangeStatus}>Pause/Resume</button>
      <button onClick={onReset}>Reset</button> */}
      <h1>{countDown}</h1>
      <h1>totalSeconds: {totalSeconds}</h1>

    </div>
  );
}

export default App;
