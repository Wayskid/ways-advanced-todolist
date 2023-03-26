import { useContext, useEffect, useState } from "react"
import todoContext from "../context/todoContext"
import List from "./List"
export default function ListContainer() {

    //Use Context
    const { listArray } = useContext(todoContext)

    //State for the select filter button
    const [ selectVal, setSelectVal ] = useState("")
    
    function handleSelect(e) {
        setSelectVal(e.target.value);
    }

    //State to hold filtered tasks
    const [ taskStatusArray, setTaskStatusArray ] = useState([])    


    //Run filtering on new tasks and filter selection
    useEffect(()=>{
        if (selectVal === "Completed") {
            setTaskStatusArray(
                listArray.filter(el=>{
                    return el.completed === true
                })
            )
        }
        else if (selectVal === "Not Completed") {
            setTaskStatusArray(
                listArray.filter(el=>{
                    return el.completed === false
                })
            )
        }
        else {
            setTaskStatusArray(listArray)
        }
    }, [selectVal, listArray])


    //Map List
    const listMapped = taskStatusArray.map(item=>{
        return <List
                    key= {item.id}
                    item={item}
                />
    })

    return (
            <div className="listHeaderContainer grid gap-2 ">
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
                    <ul className="listContainer grid gap-2 relative h-40 content-baseline"> {listMapped.length ? listMapped : <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-center">{selectVal==="Completed"&&"Completed"} ToDo List is currently empty. Kindly {selectVal==="Completed" ? "complete" : "add"} a Task</h1>}</ul>
            </div>
    )  
}
