import { useState } from "react"
import NewLesson from "./NewLesson"
import LessonsTable from "./LessonsTable"
import style from "./StudentBox.module.scss"

export default function StudentBox({data,updateData}) {
  const [isAdding,setIsAdding] = useState(false)
  return (
    <div className={style.studentBox}>
      <div className={style.info}>
        <p>{data.id} {data.name}</p>
        <button>delete student</button>
        <button onClick={()=>setIsAdding(true)}>add lesson</button>
        {isAdding && <NewLesson id={data.id} onAdd={()=>{setIsAdding(false);updateData()}} />}
      </div>
      {data.lessons.length > 0 && <LessonsTable lessons={data.lessons} />}
    </div>
  )
}
