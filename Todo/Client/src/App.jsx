import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { todoBaseUrl } from "../instanceAxios";
import toast , { Toaster } from 'react-hot-toast'

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");

<<<<<<< HEAD
  const [todo, setTodo] = useState(() => {
    const savedData = localStorage.getItem("todoList");
    return savedData ? JSON.parse(savedData) : [];
  });

=======
  const [todo, setTodo] = useState([]);
  const [filterData, setFilterData] = useState([]);
>>>>>>> 3982775 (update Todo)
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const nameInputRef = useRef(null);

  // Fetch all todos
  const fetchTodo = async () => {
    try {
      const { data } = await todoBaseUrl.get('/todoList');
      // console.log(data.data);
      setTodo(data.data)
      setFilterData(data.data);
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    if(editingId && nameInputRef.current){
      nameInputRef.current.focus();
    }
  }, [editingId]);

  const handleSubmit = (e) => {
    if (editingId) {
      const newTodo =  todo.map((user) =>
          user.id === editingId
            ? { id: editingId, name: name, email: email , activity : activity}
            : user,
        )
      setTodo(newTodo);
      setFilterData(newTodo);
      setEditingId(null);
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
=======
    if(editingId && nameInputRef.current) nameInputRef.current.focus();
  }, [editingId]);

  // Add or Edit Todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, task };

    try {
      if (editingId) {
        const response = await todoBaseUrl.put(`/editTodo/${editingId}`, formData);
        if(response){
          toast.success("Edit data SuccessFully")
        }
        setEditingId(null);
      } else {
        const response = await todoBaseUrl.post('/addTodo' , formData);

        // filterData
        if(response){
          toast.success("Add Data SuccessFully!");
        }
      }
      setName("");
      setEmail("");
      setTask("");
      fetchTodo();
    } catch (error) {
      toast.error(error.message)
    }
  };

  // Delete Todo
  const handleDelete = async (id) => {
    try {
      const response = await todoBaseUrl.delete(`/deleteTodo/${id}`)
      if(!response){
        toast.error("Something went wrong!")
      }
      else{
        toast.success("Delete Todo SuccessFully");
      }
      fetchTodo();
    } catch (error) {
      toast.error(error.message);
>>>>>>> 3982775 (update Todo)
    }
  };

<<<<<<< HEAD
  const handleDelete = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
    setFilterData(newTodo);
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setActivity(user.activity);
    setEditingId(user.id);
=======
  // Edit Todo
  const handleEdit = (todo) => {
    setName(todo.name);
    setEmail(todo.email);
    setTask(todo.task);
    setEditingId(todo._id);
>>>>>>> 3982775 (update Todo)
  };

  // Search
  const handleSearch = () => {
<<<<<<< HEAD
     const data = todo.filter((item) => (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase())
     ));
     setFilterData(data);
     setSearch("");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className='bg-red-300 w-full h-full flex items-center justify-between p-4'>
        <div className='text-3xl'>TodoList</div>
        <div className='flex items-center'>
            <input onChange={(e) => setSearch(e.target.value)} 
            type="text"
            placeholder='You can Search here by name or email' 
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
          <button className="bg-red-300 rounded p-3 text-xl" type="submit">{`${editingId != null ? "Edit" : "Submit"}`}</button>
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
=======
    const filtered = todo.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filtered);
    setSearch("");
  };

  return (
   <div className="flex flex-col gap-6  bg-gray-50 min-h-screen">
  <Toaster position="top-center" />

  <div className="bg-blue-500 text-white flex items-center justify-between p-4 shadow-md">
    <h1 className="text-4xl font-extrabold tracking-wide">TodoList</h1>
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
      />
      <IoSearchSharp
        className="text-3xl cursor-pointer hover:text-red-200 transition"
        onClick={handleSearch}
      />
>>>>>>> 3982775 (update Todo)
    </div>
  </div>


  <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-5 border p-8 rounded-2xl bg-white shadow-lg w-full max-w-lg mx-auto"
  >
    <h2 className="text-2xl font-semibold text-center text-gray-700">
      {editingId != null ? "Edit Todo" : "Add Todo"}
    </h2>
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      ref={nameInputRef}
      required
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition"
    />
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition"
    />
    <input
      type="text"
      placeholder="Activity"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      required
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition"
    />
    <button
      type="submit"
      className="bg-red-400 text-white font-semibold p-3 rounded-lg hover:bg-red-500 transition shadow-md"
    >
      {editingId ? "Update Todo" : "Add Todo"}
    </button>
  </form>

  <div className="overflow-auto max-h-[400px] mt-6 rounded-xl shadow-lg">
    <table className="w-full text-center border-collapse bg-white">
      <thead>
        <tr className="bg-red-100 text-gray-700 uppercase text-sm">
          <th className="border p-3">Id</th>
          <th className="border p-3">Name</th>
          <th className="border p-3">Email</th>
          <th className="border p-3">Task</th>
          <th className="border p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filterData.length > 0 &&
          filterData.map((item, idx) => (
            <tr
              key={item._id}
              className="hover:bg-red-50 transition"
            >
              <td className="border p-3">{idx + 1}</td>
              <td className="border p-3">{item.name}</td>
              <td className="border p-3">{item.email}</td>
              <td className="border p-3">{item.task}</td>
              <td className="border p-3 flex justify-center gap-4">
                <FaEdit
                  className="cursor-pointer text-blue-500 hover:text-blue-400 transition"
                  onClick={() => handleEdit(item)}
                />
                <MdDelete
                  className="cursor-pointer text-red-500 hover:text-red-400 transition"
                  onClick={() => handleDelete(item._id)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default App;
