import { useState } from "react";
import InputBox from "./components/InputBox/InputBox";
import StudentBox from "./components/StudentBox/StudentBox";
import { getStudentData , addStudent } from "./request/studentData";

function App() {
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({});
  
  function addUser(name) {
    addStudent(name).then((data)=>{
      setShowData(true)
      setData(data)
    })
  }

  function getUser(id) {
    getStudentData(id).then(([isExist, data]) => {
      setShowData(isExist)
      setData(isExist ? {...data,id:id} : {})
    });
  }
  return (
    <div className="App">
      <InputBox addUser={addUser} getUser={getUser} />
      {showData ? <StudentBox data={data} /> : null}
    </div>
  );
}

export default App;
