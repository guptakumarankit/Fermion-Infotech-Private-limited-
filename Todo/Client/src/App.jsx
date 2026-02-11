import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [activity , setActivity] = useState("");

  const [todo, setTodo] = useState(() => {
    const savedData = localStorage.getItem("todoList");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search , setSearch] = useState("");
  const [filterData , setFilterData] = useState(todo);

  const nameInputRef = useRef(null);
  // console.log(search)

  useEffect(() => {
    localStorage.setItem("todoList" , JSON.stringify(todo))
  } , [todo]);

  useEffect(() => {
    if(editing && nameInputRef.current){
      nameInputRef.current.focus();
    }
  }, [editing]);

  const handleSubmit = (e) => {
    if (editing) {
      const newTodo =  todo.map((user) =>
          user.id === editingId
            ? { id: editingId, name: name, email: email , activity : activity}
            : user,
        )
      setTodo(newTodo);
      setFilterData(newTodo);
      setEditingId(null);
      setEditing(false);
     
    } else {
      const formData = {
        id: Date.now(),
        name: name,
        email: email,
        activity : activity,
      };

      const newTodo = [...todo, formData];
      setTodo(newTodo);
      setFilterData(newTodo)
      // setName("");
      // setEmail("");
      // setActivity("")
    }
    setName("");
    setEmail("");
    setActivity("")
  };

  const handleDelete = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
    setFilterData(newTodo)
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setActivity(user.activity)
    setEditing(true);
    setEditingId(user.id);
  };

  const handleSearch = () => {
     const data = todo.filter((item) => (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase) 
     ))
     setFilterData(data)
     setSearch("")
  }

  return (
    <div className="flex flex-col gap-4 ">

      <div className='bg-red-300 w-full h-full flex items-center justify-between p-4'>
        <div className='text-3xl'>TodoList</div>
        <div className='flex items-center'>
            <input onChange={(e) => setSearch(e.target.value)} 
            type="text"
            placeholder='You can Search Here...' 
            className='text-white p-2 border rounded text-xl'
            value={search}/>
            <IoSearchSharp onClick={handleSearch} className='border text-5xl rounded bg-blue-300'/>
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center">
        <form
          action={handleSubmit}
          className="flex flex-col gap-7 border rounded p-10 bg-gray-100 w-[50%] "
        >
          <div className="text-center text-3xl text-bold">ADD & Edit Todo</div>
          <input
            type="text"
            placeholder="Enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameInputRef}
            required
            className="border rounded p-2"
          />
          <input
            type="email"
            placeholder="Enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded p-2"
          />

          <input type="text" 
          placeholder="Enter the daily Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
          className="border rounded p-2"
          />
          <button className="bg-red-300 rounded p-3 text-xl" type="submit">{`${editing == true ? "Edit" : "Submit"}`}</button>
        </form>

        <div className="max-h-96 overflow-y-auto rounded-lg flex flex-col gap-8">
          <div className="flex justify-center">
            <div className="text-center text-4xl border-b-2 inline-block">Todo List</div>
          </div>
          <table className="w-full table-fixed text-center">
            <thead className="top-0 bg-gray-100 z-10  text-center">
              <tr className="">
                <th className="p-3 text-center border">Serial NO</th>
                <th className="p-3 text-center border">Name</th>
                <th className="p-3 text-center border">Email</th>
                <th className="p-3 text-center border">Activity</th>
                <th className="p-3 text-center border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filterData && filterData.map((data , idx) => (
                <tr key={data.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{idx + 1}</td>
                  <td className="p-3 border">{data.name}</td>
                  <td className="p-3 border">{data.email}</td>
                  <td className="p-3 border">{data.activity}</td>
                  <td className="p-3 border flex justify-evenly bg-green-200">
                    <MdDelete
                      className="cursor-pointer text-2xl text-red-500"
                      onClick={() => handleDelete(data.id)}
                    />
                    <FaEdit
                      className="cursor-pointer text-2xl text-blue-500"
                      onClick={() => handleEdit(data)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;