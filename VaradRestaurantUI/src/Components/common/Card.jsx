const Card = () => {
  return (
    <div className="w-[250px] h-[300px] bg-gray-100 rounded-lg shadow-md flex flex-col items-center ">
      <div className="h-3/4 w-full border bg-grey-200">img</div>
      <div className="w-full flex flex-col px-3">
        <div className="w-full flex justify-between ">
          <h6>Item Name</h6>
          <span>Rating</span>
        </div>

        <h6>300 Rs</h6>
      </div>
    </div>
  );
};

export default Card;
