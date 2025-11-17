import React, { useState } from "react";
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const MyForm: React.FC<ButtonProps> = (props) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("see input value", e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted event", e.target);
  };
};
