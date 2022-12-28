import { useState } from "react"
import NewLesson from "./NewLesson"
import LessonsTable from "./LessonsTable"
import style from "./StudentBox.module.scss"
import { deleteStudent } from "../../request/studentData"

export default function StudentBox({data,updateData,onDelete}) {
  const [isAdding,setIsAdding] = useState(false)
  const handleDelete = ()=>{
    if(confirm(`do you want to delete ${data.name} with id ${data.id}`)) {
      deleteStudent(data.id).then(onDelete)
    }
  }
  return (
    <div className={style.studentBox}>
      <div className={style.info}>
        <p>{data.id} {data.name}</p>
        <button onClick={handleDelete}>delete student</button>
        <button onClick={()=>setIsAdding(true)}>add lesson</button>
        {isAdding && <NewLesson id={data.id} onAdd={()=>{setIsAdding(false);updateData()}} />}
      </div>
      {data.lessons.length > 0 && <LessonsTable lessons={data.lessons} />}
    </div>
  )
}
