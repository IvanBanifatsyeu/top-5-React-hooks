import React, { useState, useRef } from "react";
import useScroll from "../hooks/useScroll";

const List = () => {
	const [todos, setTodos] = useState([]);
	const [page, setPage] = useState(1);
	const limit = 20;
	const parentRef = useRef();
	const childRef = useRef();
	const intersected = useScroll(parentRef, childRef, () => {
		fetchTodos(page, limit);
	})



	function fetchTodos (pages, limits) {
		fetch(
			`https://jsonplaceholder.typicode.com/todos?_limit=${limits}&_page=${pages}`
		)
			.then((response) => response.json())
			.then((json) => {
				setTodos((prev) => [...prev, ...json]);
				setPage((prev) => prev + 1)
			});
	};



	return (
		<div ref={parentRef} style={{height: '70vh', overflow: 'auto', border: '1px solid red'}}>
			{todos.map((todo) => {
			
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
            <div ref={childRef} style={{height: 40, background: 'red'}}></div>
		</div>
	);
};

export default List;
