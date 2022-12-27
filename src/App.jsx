import { useState } from "react"
import InputBox from "./component/InputBox/InputBox"

function App() {
  const [showData,setShowData] = useState(false)
  const [data,setData] = useState({})
  function addUser(name){
    console.log(name)
  }
  function getUser(id){
    console.log(id)
  }
  return (
    <div className="App">
      <InputBox addUser={addUser} getUser={getUser}/>
    </div>
  )
}

export default App
