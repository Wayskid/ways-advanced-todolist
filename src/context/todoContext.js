import { createContext, useEffect, useState } from "react";
import uuid from "react-uuid";

const todoContext = createContext();

export const TodoProvider = ({ children }) => {

  //Task Input
  const [listArray, setListArray] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
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

  //State for the select filter button
  const [selectVal, setSelectVal] = useState("all");

  function handleSelect(e) {
    setSelectVal(e.target.value);
  }

  //State to hold filtered tasks
  const [filteredArray, setFilteredArray] = useState([]);

  //Run filtering on new tasks and filter selection
  const filterList = () => {
    if (selectVal === "Completed") {
      setFilteredArray(
        listArray.filter((el) => {
          return el.completed === true;
        })
      );
    } else if (selectVal === "Not Completed") {
      setFilteredArray(
        listArray.filter((el) => {
          return el.completed === false;
        })
      );
    } else {
      setFilteredArray(listArray);
    }
  };

  useEffect(() => {
    setList();
    filterList();
  }, [listArray, selectVal]);

  //Local Storage
  const setList = () => {
    localStorage.setItem("taskList", JSON.stringify(listArray));
  };

  return (
    <todoContext.Provider
      value={{
        handleTaskTyping,
        inputVal,
        handleTaskSubmit,
        listArray,
        setListArray,
        setInputVal,
        handleSelect,
        filteredArray,
        selectVal,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default todoContext;
