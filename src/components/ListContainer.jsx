import { useContext } from "react";
import todoContext from "../context/todoContext";
import List from "./List";
export default function ListContainer() {
  //Use Context
  const { handleSelect, filteredArray, selectVal } = useContext(todoContext);

  //Map List
  const listMapped = filteredArray.map((item) => {
    return <List key={item.id} item={item} />;
  });

  return (
    <div className="listHeaderContainer grid gap-2">
      <div className="header flex justify-between">
        <h1 className=" listHeader text-clr-neutral-100 text-2xl">My Tasks</h1>
        <select
          className="select select-sm"
          name="taskStatus"
          onChange={handleSelect}
        >
          <option value="All">All Tasks</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not completed</option>
        </select>
      </div>
      <ul className="listContainer grid gap-2 relative h-[30rem] overflow-auto content-start">
        {listMapped.length ? (
          listMapped
        ) : (
          <li className="mt-8 w-3/5 justify-self-center text-2xl text-center">
            {selectVal === "Completed" && "Completed"} ToDo List is currently
            empty. Kindly {selectVal === "Completed" ? "complete" : "add"} a
            Task
          </li>
        )}
      </ul>
    </div>
  );
}
