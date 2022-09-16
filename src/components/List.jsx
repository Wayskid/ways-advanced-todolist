import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function List({ listArray, setListArray, item, text, setInputVal }) {


  
  
  function handleChecked(){
      setListArray(
        listArray.map((el)=>{
          if(el.id === item.id){
            return {
              ...el,
              completed: !el.completed,
            }
          }
          return el
      })
      )
  }

  function handleDelete(){
    setListArray(listArray.filter(el=>{
      return item.id !== el.id
    }))
  }

  function handleEdit() {
    setListArray(listArray.filter(el=>{
      setInputVal(item.text)
      return item.id !== el.id
    }))

  }

  const completedIconStyle = {
    color: "green"
  }

  return (
    <li className={ `list ${item.completed === true && "completedListStyle"}` }>
        <p className={ `liText ${item.completed === true && "completedStyle"}` }>{text}</p>
        <FontAwesomeIcon 
          icon={faCheckSquare}
          className="iconComplete"
          onClick={handleChecked}
          style={item.completed === true && completedIconStyle}
        />
        <FontAwesomeIcon 
            icon={faEdit} 
            className="iconEdit"
            onClick={handleEdit}
        />
        <FontAwesomeIcon 
            icon={faTrashCan} 
            className="iconDelete" 
            onClick={handleDelete}
        />
    </li>
  )
}
