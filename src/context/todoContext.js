import { createContext, useEffect, useState } from "react";
import uuid from "react-uuid";

const todoContext = createContext();

export const TodoProvider = ({ children }) => {

  //Task Input
  const [listArray, setListArray] = useState([]);
  const [inputVal, setInputVal] = useState("");

  function handleTaskTyping(e) {
    setInputVal(e.target.value);
  }

  function handleTaskSubmit(e) {
    e.preventDefault();

    if (inputVal.trim()) {
      setListArray((prevList) => {
        return [
          ...prevList,
          {
            id: uuid(),
            text: inputVal,
            completed: false,
          },
        ];
      });
    }

    setInputVal("");
  }

  //Local Storage
  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(listArray))
  },[listArray])

  useEffect(()=>{
    if (localStorage.getItem("tasksList") === null) {
      localStorage.setItem("taskList", JSON.stringify([]))
    } else {
      setListArray(JSON.parse(localStorage.getItem("taskList")))
    }
  },[])

  return (
    <todoContext.Provider
      value={{
        handleTaskTyping,
        inputVal,
        handleTaskSubmit,
        listArray,
        setListArray,
        setInputVal,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default todoContext;
