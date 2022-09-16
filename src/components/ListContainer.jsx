import { useEffect, useState } from "react"
import List from "./List"
export default function ListContainer({ listArray, handleChecked, setListArray, setInputVal}) {

    const [ selectVal, setSelectVal ] = useState("")
    const [ taskStatusArray, setTaskStatusArray ] = useState([])

    

    function handleSelect(e) {
        setSelectVal(e.target.value);
    }

    function filterOnSelect() {
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
    }

    

    useEffect(()=>{filterOnSelect()}, [selectVal, listArray])


    const listMapped = taskStatusArray.map(item=>{
        return <List
                    key= {item.id}
                    listArray={listArray}
                    handleChecked={handleChecked}
                    setListArray={setListArray}
                    item={item}
                    text={item.text}
                    setInputVal={setInputVal}
                />
    })

    return (
            <div className="listHeaderCont">
                <div className="header">
                    <h1 className="listHeader">My Tasks</h1>
                    <select
                        name="taskStatus" 
                        onChange={handleSelect}
                    >
                        <option value="All">All Tasks</option>
                        <option value="Completed">Completed</option>
                        <option value="Not Completed">Not completed</option>
                    </select>
                </div>
                    <ul className="listCont"> {listMapped.length ? listMapped : <h1>ToDo List is Currently Empty. Kindly add a Task</h1>} </ul>
            </div>
    )  
}
