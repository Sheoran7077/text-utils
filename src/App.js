import { useState } from "react";
import Amit from "./components/Amit";
import Ravi from "./components/Ravi";

const App=()=>{

  const [isTrue,setIsTrue]=useState(true);
  return (
    <div>
    { isTrue ?
      <Ravi/>:
      <Amit/>
    }
    <button onClick={()=>{
      setIsTrue(!isTrue)
    }}>CLick me</button>
    </div>
  )
};

export default App;