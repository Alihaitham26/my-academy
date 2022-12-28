import { useState } from "react"

export default function NewUserBox({addUser}) {
  const [name,setName] = useState("")
  return (
    <form>
      <h2>new user</h2>
      <label htmlFor="name">name</label>
      <input type="text" name="name" value={name} onChange={(ev)=>setName(ev.target.value)}/>
      <button onClick={(ev)=>{ev.preventDefault();addUser(name)}}>create user</button>
    </form>
  )
}
