import useFetch from "./customHooks/useFetch";

const App = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data)
  return (
    <div className='pl-10 flex flex-col gap-4'>
        {
          data && data.map((item) => (
            <li key={item.id} className="flex gap-4">
              <p>{item.id}.</p>
              <p>{item.title}</p>
              <button className="bg-blue-300 p-1 rounded rounded-lg">{`${item.completed ? "completed" : "Not Completed"}`}</button>
            </li>
          ))
        }
    </div>
  )
}

export default App