import React, { useRef, useState } from "react";
import "./App.css";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";
import axios from "axios";
import useRequest from "./hooks/useRequest";

function App() {
	// const userName = useInput("");
	// const password = useInput("");
	// const ref1 = useRef()
	// const isHovering = useHover(ref1)
	// const [value, setValue] = useState('')
	// const debouncedSearch = useDebounce(search, 500)

	// function search (query) {
	// 	fetch(`https://jsonplaceholder.typicode.com/todos?query=`+ query)
	// 		.then((response) => response.json())
	// 		.then((json) => {console.log(json)});
	// };

	// const onChange = (e)=> {setValue(e.target.value);
	// debouncedSearch(e.target.value)}

	const [todos, loading, error] = useRequest(fetchTodos);
	
	function fetchTodos() {
		return axios.get(`https://jsonplaceholder.typicode.com/todos`);
	}

	if (loading) {
		return <h1>Идет загрузка</h1>
	}

	if (error) {
		return <h1>Произошла ошибка при загрузке</h1>
	}

	return (
		<div>
			{/* <input type="text" value={value} onChange={onChange}/> */}
			{/* <Hover />
			<div ref={ref1} style={{ width: 300, height: 300, background: isHovering ? 'orange' : 'grey' }}></div>
			<hr />
			<List />
			<hr />
			<input type="text" placeholder="Имя" {...userName} />
			<input type="password" placeholder="пароль" {...password}/>
			<button
				onClick={() => {
					console.log(userName.value);
					console.log(password.value);
				}}
			>
				click
			</button> */}
			{todos && todos.map((todo) => {
				return (
					<div
						key={todo.id}
						style={{
							border: `2px solid ${todo.id % 2 === 0 ? "red" : "blue"}`,
							padding: 5,
							margin: 2,
						}}
					>
						{todo.id}. {todo.title}
					</div>
				);
			})}
		</div>
	);
}

export default App;
