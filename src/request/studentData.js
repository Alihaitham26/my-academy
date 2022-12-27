import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./init";

const formatId = (id) => {
  let idStr = id.toString();
  while (idStr.length < 4) idStr = "0" + idStr;
  return idStr;
}

async function getStudentData(id){
  const snapShot = await getDoc(doc(db,"students",id))
  return [snapShot.exists,snapShot.data()]
}

async function addStudent(name){
  const maxIdDocRef = doc(db,"metaData","6z53S1TxbzdN8ti53pdS")
  const maxId = (await getDoc(maxIdDocRef)).data().maxId
  const id = formatId(maxId+1)
  return setDoc(doc(db,"students",formatId(maxId+1)),{name:name,lessons:[]}).then(()=>{
    setDoc(maxIdDocRef,{maxId:increment(1)})
    return doc(db,"students",id)
  })
}

async function addLesson(id,subject,date){
  const [isExist,data] = await getStudentData(id)
  const newLessons = [...data.lessons,{subject:subject,date:date}]
  if(isExist) updateDoc(doc(db,"students",id),{lessons:newLessons})
  return isExist
}

export { getStudentData , addStudent , addLesson}
