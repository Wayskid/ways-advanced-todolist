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

  //UseEffects
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setList();
    filterList();
  }, [listArray, selectVal]);

  //Local Storage
  const setList = () => {
    localStorage.setItem("taskList", JSON.stringify(listArray));
  };

  const getList = () => {
    if (localStorage.getItem("taskList") == null) {
      localStorage.setItem("taskList", JSON.stringify([]));
    } else {
      let listLocal = JSON.parse(localStorage.getItem("taskList"));
      setListArray(listLocal)
    }
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
