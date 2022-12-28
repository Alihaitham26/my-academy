import style from "./StudentBox.module.scss"

export default function LessonsTable({lessons}) {
  return (
    <table className={style.lessons} >
      <thead>
        <tr>
          <td>subject</td>
          <td>date</td>
        </tr>
      </thead>
      <tbody>
        {lessons.map(({subject,date})=>(
          <tr key={`${subject}${date}`}>
            <td>{subject}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
