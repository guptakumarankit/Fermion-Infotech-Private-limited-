import { useEffect, useState } from "react";

const App = () => {
  const products = [
    "Apple iPhone 15 Pro",
    "Apple iPhone 14",
    "Samsung Galaxy S24",
    "Samsung Galaxy A54",
    "Google Pixel 8",
    "OnePlus 12",
    "Xiaomi Redmi Note 13",
    "Sony WH-1000XM5 Headphones",
    "Bose QuietComfort 45",
    "JBL Flip 6 Speaker",
    "Apple AirPods Pro",
    "Samsung Galaxy Buds 2",
    "Dell XPS 13 Laptop",
    "MacBook Air M2",
    "HP Spectre x360",
    "Lenovo ThinkPad X1 Carbon",
    "Asus ROG Strix G16",
    "Acer Aspire 5",
    "Canon EOS R6 Camera",
    "Nikon D7500",
    "Sony Alpha A7 IV",
    "GoPro Hero 12",
    "Apple Watch Series 9",
    "Samsung Galaxy Watch 6",
    "Fitbit Charge 6",
    "Garmin Forerunner 265",
    "Amazon Echo Dot",
    "Google Nest Hub",
    "Philips Hue Smart Bulb",
    "Ring Video Doorbell",
    "LG OLED C3 TV",
    "Samsung QLED Q80C",
    "Sony Bravia XR A80L",
    "TCL 6-Series Roku TV",
    "Microsoft Xbox Series X",
    "Sony PlayStation 5",
    "Nintendo Switch OLED",
    "Logitech MX Master 3S Mouse",
    "Apple Magic Keyboard",
    "Razer BlackWidow V4",
    "Seagate 2TB External Drive",
    "WD My Passport 1TB",
    "SanDisk Extreme 128GB SD Card",
    "Anker PowerCore 20000",
    "Belkin 3-in-1 Charging Pad",
    "HP DeskJet 4155e Printer",
    "Epson EcoTank ET-2800",
    "Canon PIXMA TR4720",
    "DJI Mini 3 Drone",
    "Kindle Paperwhite",
  ];

  const [debouncedSearch , setDebouncedSearch] = useState("");
  const [search, setSearch] = useState("");
  const [matchedData, setMatchedData] = useState([]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    } , 500)

    return () => clearTimeout(timer);
  } , [search])

    // console.log(debouncedSearch);
    
    useEffect(() =>  {

    if (debouncedSearch.trim() === "") {
      setMatchedData([]);
      return;
    }

    const filteredData = products.filter((product) =>
      product.toLowerCase().startsWith(debouncedSearch.toLowerCase()),
    );

    setMatchedData(filteredData);
    // console.log("filteredData", filteredData);
  } , [debouncedSearch]);

  const handleSave = (item) => {
    setSearch(item);
    setMatchedData([]);
  };

  return (
    <div className="h-screen w-screen bg-green-100 p-2 flex justify-center items-center">
      <div>
        <input
          type="text"
          value={search}
          placeholder="You can Search here..."
          className="border rounded p-2 w-100 mb-1"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-col max-h-60 overflow-y-auto gap-1">
          {matchedData.length > 0 &&
            matchedData.map((item, idx) => (
              <div
                key={idx}
                className="border rounded p-2"
                onClick={() => handleSave(item)}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
