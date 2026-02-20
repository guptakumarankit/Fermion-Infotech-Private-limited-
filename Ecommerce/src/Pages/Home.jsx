import { useEffect, useState } from "react";
import Cards from '../components/Cards'

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState("");

  const fetchApi = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if(searchInput.trim() == "") {
      toast.error("Input Filed is required");
      return;
    }

    const newData = data.filter(
      (item) =>
        item.category.name.toLowerCase() == searchInput.toLowerCase() ||
        item.price.toString() == searchInput,
    );

    if (newData.length > 0) {
      toast.success("Data Search SuccessFully");
    } else {
      toast.success("Doesn't Found");
    }
    setFilteredData(newData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="p-2 justify-center flex gap-2">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Your can Search Category and Price...."
          className="p-2 w-[40%] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          required
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="p-2 bg-yellow-400 rounded"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,2fr))] auto-rows-auto gap-4 m-6">
        {error ? (
          <div>Error is occur</div>
        ) : loading ? (
          <div>Data is Loading....</div>
        ) : filteredData.length == 0 ? (
          <div>Data Doesn't Found</div>
        ) : (
          filteredData &&
          filteredData.map((item) => <Cards key={item.id} item={item} />)
        )}
      </div>
    </>
  );
};

export default Home;
