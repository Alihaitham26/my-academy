import { useState } from "react"

export default function OldUserBox({getUser}) {
  const [id,setId] = useState("")

  return (
    <form>
      <h2>old user</h2>
      <label htmlFor="id">id</label>
      <input type="text" name="id" value={id} onChange={(ev)=>setId(ev.target.value)}/>
      <button onClick={(ev)=>{ev.preventDefault();getUser(id)}}>get user</button>
    </form>
  )
}
