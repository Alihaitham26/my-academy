import { useState } from "react"

export default function NewUserBox({addUser}) {
  const [name,setName] = useState("")
  const handleAdd = (ev)=>{
    ev.preventDefault()
    if(name !== ""){
      addUser(name)
    }
  }
  return (
    <form>
      <h2>new user</h2>
      <label htmlFor="name">name</label>
      <input type="text" name="name" value={name} onChange={(ev)=>setName(ev.target.value)}/>
      <button onClick={handleAdd}>create user</button>
    </form>
  )
}
