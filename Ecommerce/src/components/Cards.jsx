const Cards = ({ item }) => {
  return (
    <div key={item.id} className="rounded-lg  bg-gray-400">
      <img className="object-cover w-full h-[200px] rounded" src={item.images} alt="img" />
      <div className="flex justify-between m-3">
        <p className="text-xl">{item.category.name}</p>
        <div className="text-xl">{`Price : ${item.price}`}</div>
      </div>
      <div className="m-3">
        {item.description.slice(0,50)}
      </div>
    </div>
  );
};

export default Cards;
