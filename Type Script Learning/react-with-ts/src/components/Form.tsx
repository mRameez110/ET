import React, { useState } from "react";
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const MyForm: React.FC<ButtonProps> = (props) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("see input value", e.target.value);
  };
};
