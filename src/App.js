import ListContainer from "./components/ListContainer";
import Form from "./components/Form";
import { TodoProvider } from "./context/todoContext";

export default function App() {
      

    return (
      <TodoProvider>
        <div className="grid gap-2 w-containerWidth grid content-baseline">
            <Form />
            <ListContainer />  
        </div>
      </TodoProvider>
    );
}
