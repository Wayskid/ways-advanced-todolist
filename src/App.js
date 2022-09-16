import { useState } from "react";
import ListContainer from "./components/ListContainer";
import Form from "./components/Form";
import uuid from "react-uuid"

export default function App() {
    const [listArray, setListArray] = useState([]);
    const [inputVal, setInputVal] = useState("");

    function handleTaskTyping(e) {
      setInputVal(e.target.value);
    }

    function handleTaskSubmit(e) {
      e.preventDefault()

      if(inputVal.trim()){
        setListArray(prevList=>{
          return [
            ...prevList,
            {
              id: uuid(),
              text: inputVal,
              completed: false
            }
          ]
        })
      }

      setInputVal("")
    }

    

    

    

    return (
        <div className="containerBody">
            <Form 
              handleTaskTyping={handleTaskTyping}
              inputVal={inputVal}
              handleTaskSubmit={handleTaskSubmit}
            />

            <ListContainer 
              listArray={listArray}
              setListArray={setListArray}
              setInputVal={setInputVal}
            />
            
        </div>
    );
}
