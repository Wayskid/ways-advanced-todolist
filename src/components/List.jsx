import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import todoContext from "../context/todoContext";

export default function List({item}) {

  //Use Context
  const {
    listArray,
    setListArray,
    setInputVal,
  } = useContext(todoContext)

  //Check task to mark it completed
  function handleChecked() {
    setListArray(
      listArray.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  }

  //Delete task
  function handleDelete() {
    setListArray(
      listArray.filter((el) => {
        return item.id !== el.id;
      })
    );
  }

  //Edit task
  function handleEdit() {
    setListArray(
      listArray.filter((el) => {
        setInputVal(item.text);
        return item.id !== el.id;
      })
    );
  }

  return (
    <li
      className={`list ${
        item.completed === true && "completedListStyle"
      } flex bg-clr-primary-600 p-[0.4rem_0.5rem] text-md bg-clr-primary-600 rounded-[5px] items-center gap-[0.5rem] text-clr-neutral-100 group overflow-x-hidden`}
      // 
    >
      <p
        className={`liText ${
          item.completed === true && "completedStyle"
        } break-all text-lg mr-auto`}
      >
        {item.text}
      </p>
      <div className="tooltip" data-tip="Complete">
        <FontAwesomeIcon
          icon={faCheckSquare}
          className="iconComplete  group-hover:inline pl-2 hidden"
          onClick={handleChecked}
          style={item.completed === true && {color: "green"}}
        />
      </div>
      <div className="tooltip cursor-pointer" data-tip="Edit">
        <FontAwesomeIcon
          icon={faEdit}
          className="iconEdit  group-hover:inline hidden"
          onClick={handleEdit}
        />
      </div>
      <div className="tooltip cursor-pointer" data-tip="Delete">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="iconDelete  group-hover:inline hidden"
          onClick={handleDelete}
        />
      </div>
    </li>
  );
}
