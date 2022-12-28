import React, { useState } from 'react'
import { addLesson } from '../../request/studentData';
import style from "./StudentBox.module.scss"
export default function NewLesson({id,onAdd}) {
  const [subject,setSubject] = useState("")
  const [date,setDate] = useState("")
  return (
    <form className={style.addLesson}>
      <label htmlFor="subject">subject</label>
      <input type="text" name='subject' value={subject} onChange={ev=>setSubject(ev.target.value)}/>
      <label htmlFor="date">date</label>
      <input type="date" name='date' value={date} onChange={ev=>setDate(ev.target.value)} />
      <button onClick={ev=>{ev.preventDefault();addLesson(id,subject,date).then(onAdd)}}>add</button>
    </form>
  )
}
