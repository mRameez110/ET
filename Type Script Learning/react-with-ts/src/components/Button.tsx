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
