import { useSelector, useDispatch } from "react-redux";
import { AddTodo, RemoveTodo, EditTodo } from "./Redux/slices/OperationSlice";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operation.todos);
  const [editId, setEditId] = useState(null);
  const [editing, setEditing] = useState(false);

  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
    if (editing) {
      dispatch(EditTodo({ id: editId, input: input }));
      setEditing(false);
      setEditId(null);
      setInput("");
    } else {
      dispatch(AddTodo(input));
      setInput("");
    }
  };

  const handleEdit = (id) => {
    const currTodo = todos.find((todo) => todo.id === id);
    // console.log("currTodo", currTodo.todo);
    setInput(currTodo.todo);
    // console.log("id" , id);
    setEditId(id);
    setEditing(true);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <h3>Todo using Redux Toolkit</h3>
        <form
          onSubmit={handleTodo}
          className="flex flex-col bg-red-300 p-3 rounded gap-3"
        >
          <div className="flex flex-col">
            <label htmlFor="">Enter the todo</label>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter the todo..."
              required
            />
          </div>
          <button type="submit" className="bg-blue-300 rounded rounded-lg">
            Add Todo
          </button>
        </form>
      </div>

      <div>
        <table>
          {/* <thead className='flex gap-3'>
              <tr className='flex gap-30'>
                <th>Id</th>
                <th>Name</th>
                <th>Operation</th>
              </tr>
          </thead> */}

          <tbody className=" flex flex-col ">
            {todos.length > 0 &&
              todos.map((item) => (
                <tr className="flex gap-4" key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.todo}</td>
                  <td>
                    <button onClick={() => dispatch(RemoveTodo(item.id))}>
                      Delete
                    </button>
                  </td>
                  <td onClick={() => handleEdit(item.id)}>Edit</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
