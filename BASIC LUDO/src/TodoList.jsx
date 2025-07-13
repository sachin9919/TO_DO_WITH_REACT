import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos , setTodos] = useState([{task: "sample Task" , id: uuidv4()}]);
    let [newTodo , setNewTodo] = useState("");

    let addNewTask = () => {
        //console.log("we  have to add task");
        // setTodos([...todos , newTodo]);

        setTodos((prevTodos) => {
            return [...prevTodos , {task: newTodo , id: uuidv4()}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        //console.log(event.target.value);
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    return(
        <div>
            <input placeholder="add a task" value = {newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Taks TODO</h4>
            <ul>
                {todos.map((todo) => (  // if we want to render something from array in the form of list so we always use map as it is a kind of notion or fixed way to do these things
                    <li key = {todo.id}>
                        <span>{todo.task}</span>
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>  {/* // ARROOW FUNCTION SIMPLY CREATE COPY OF METHOD DO NOT EXECUTE IT */}
                    </li>
                ))}
            </ul>
        </div>
    );

}