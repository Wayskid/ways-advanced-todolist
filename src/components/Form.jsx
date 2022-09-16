

export default function Form({ handleTaskTyping, inputVal, handleTaskSubmit }) {

  return (
    <form>
        <div className="inputCont">
            <input
                type="text"
                className="taskInput"
                placeholder="Add a Task"
                onChange={handleTaskTyping}
                value={inputVal}
            />
            <button
                type="submit"
                className="submitTask"
                onClick={handleTaskSubmit}
                disabled={inputVal.trim() ? false : true}
            >
                Submit
            </button>
        </div>
    </form>
  )
}


