import { useState } from "react";

function App() {
		const [todos, setTodos] = useState([]);
		const [isloadClicked, setIsloadClicked] = useState(false);
		const loadTodos = async () => {
		setIsloadClicked(true);
		const res = await fetch("https://jsonplaceholder.typicode.com/todos");
		console.log("see response ", res);
		const data = await res.json();
		console.log("see response in json ", data);
		setTodos(data);
	};

		const getUsers = () => {
			fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setTodos(data));
		
		};

			return (
		<div className="container mt-5">
			<h2>Todos List</h2>
			</div>
)




}