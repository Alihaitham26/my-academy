import { useState } from "react"
import style from "./InputBox.module.css"
import NewUserBox from "./NewUserBox"
import OldUserBox from "./OldUserBox"

export default function InputBox({addUser,getUser}) {
  const [isUserExist,setIsUserExist]= useState(true)

  return (
    <div className={style.inputBox}>
      <div className={style.options}>
        <button onClick={()=>{setIsUserExist(true)}}>old user</button>
        <button onClick={()=>{setIsUserExist(false)}}>new user</button>
      </div>
      { isUserExist ? <OldUserBox getUser={getUser}/> : <NewUserBox addUser={addUser} /> }
    </div>
  )
}

