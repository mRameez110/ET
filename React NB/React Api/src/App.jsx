import { useState } from "react";

function App() {
		const [todos, setTodos] = useState([]);
		const [isloadClicked, setIsloadClicked] = useState(false);
		const loadTodos = async () => {
		setIsloadClicked(true);
		}



}