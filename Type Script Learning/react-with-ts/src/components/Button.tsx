import React, { useState } from "react";
import { useCounter } from "../provider/Counter";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

interface Book {
  name: string;
  price: number;
}

const MyButton: React.FC<ButtonProps> = (props) => {
  const context = useCounter();

  const [value, setValue] = useState<Book>({
    name: "Science Book",
    price: 200,
  });

  const { text, onClick } = props;
  return (
    <>
      <h2>
        Name of Book is {value.name} and price is {value.price}
      </h2>
    </>
  );
};

export default MyButton;
