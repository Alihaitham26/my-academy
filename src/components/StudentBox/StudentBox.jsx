import LessonsTable from "./LessonsTable"
import style from "./StudentBox.module.scss"

export default function StudentBox({data}) {
  return (
    <div className={style.studentBox}>
      <div className={style.info}>
        <p>{data.id} {data.name}</p>
        <button>delete student</button>
        <button>add lesson</button>
      </div>
      {data.lessons.length > 0 && <LessonsTable lessons={data.lessons} />}
    </div>
  )
}
