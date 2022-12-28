import { useState } from "react";
import InputBox from "./components/InputBox/InputBox";
import { getStudentData } from "./request/studentData";

function App() {
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({});
  function addUser(name) {
    console.log(name);
  }
  function getUser(id) {
    getStudentData(id).then(([isExist, data]) => {
      console.log(data);
    });
  }
  return (
    <div className="App">
      <InputBox addUser={addUser} getUser={getUser} />
    </div>
  );
}

export default App;
