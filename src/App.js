import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  var array = [];
  const[val,up]=useState('');
  const[ne,newv]=useState(array);
  
  useEffect(()=>{
    submit()
  },[val]);
  const submit=()=> {
    
  array.push(val);
  var final = array.map((e)=>{
   return(<div>{e}</div>)
   });
   console.log(newv(final))

  }
  return (
    <div className="App">
      {/* <h1>{state}</h1> */}
      <input type='text' value={val} onChange={(e)=> up(e.target.value)}></input>
      <button onClick={submit}>Submit</button>
      {ne}
    </div>
  );
}
export default App;


  // const [state,setState] = useState('hi its initial state');
  // useEffect(() => {
  //   setTimeout(()=>{setState('state changed 1st times')},2000)
  //   console.log('use effect1')
  // },[]);
  // useEffect(() => {
  //   setTimeout(()=>{setState('state changed 2nd times');},4000)
  //   console.log('use effect2')
  // },[]);
  // useEffect(() => {
  //   setTimeout(()=> {setState('state changed 3rd times')},6000)
  //   console.log('use effect3')
  // },[]);
  // useEffect(() => {
  //   console.log('state changed')
  // },[state] 
  // );