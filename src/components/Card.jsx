import { useState } from 'react';

const Card = ({ id, price, image, title, content, removeCard }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-[300px] w-full object-cover"
        />
        <span className="absolute top-0 right-0 bg-blue-400 px-6 py-2 font-bold text-white">
          ${price}
        </span>
        <div className="p-8 flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-center">{title}</h2>
          <p className="leading-relaxed text-justify">
            {toggle ? content : content.slice(0, 300) + '...'}
          </p>
          <span
            className="cursor-pointer text-green-600 font-bold"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? 'see less' : 'see more'}
          </span>
          <button
            className="border-2 border-green-500 text-green-500 w-full p-2 rounded-md font-semibold hover:bg-green-500 hover:text-white duration-500"
            onClick={() => removeCard(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
