import React, { useState } from "react";
import { useCounter } from "../provider/Counter";

interface ButtonProps {
  text: string;
  onClick: () => void;
}
