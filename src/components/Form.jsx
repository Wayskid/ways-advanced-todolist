import { useContext } from "react"
import todoContext from "../context/todoContext"


export default function Form() {

    const {handleTaskTyping, inputVal, handleTaskSubmit} = useContext(todoContext)

  return (
    <form className="bg-clr-primary-600 py-[2.5rem] rounded-md flex justify-center">
        <div className="inputCont border-[1.8px] border-clr-primary-700 p-[0.4rem] rounded-md  flex w-5/6 justify-center">
            <input
                type="text"
                className="taskInput bg-transparent text-[18px] outline-none w-4/5 p-[0.4rem_1rem] text-clr-neutral-100 placeholder:italic placeholder:text-slate-400 focus:placeholder-transparent"
                placeholder="Add a Task"
                onChange={handleTaskTyping}
                value={inputVal}
            />
            <button
                type="submit"
                className="submitTask w-1/5 rounded-md"
                onClick={handleTaskSubmit}
                disabled={inputVal.trim() ? false : true}
            >
                Submit
            </button>
        </div>
    </form>
  )
}


