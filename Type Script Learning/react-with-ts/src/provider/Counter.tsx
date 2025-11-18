import React, { Children, createContext, useContext, useState } from "react";

interface CounterProviderProps {
  children: React.ReactNode;
}
interface CounterContextValue {
  value: number;
  setCount: (num: number) => void;
}
const CounterContext = createContext<CounterContextValue | null>(null);
