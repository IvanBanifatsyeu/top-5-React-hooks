import React, { useRef, useState } from "react";
import "./App.css";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";


function App() {
	// const userName = useInput("");
	// const password = useInput("");
	// const ref1 = useRef()
	// const isHovering = useHover(ref1)
	const [value, setValue] = useState('')
    const debouncedSearch = useDebounce(search, 500)

	function search (query) {
		fetch(`https://jsonplaceholder.typicode.com/todos?query=`+ query)
			.then((response) => response.json())
			.then((json) => {console.log(json)});
	};

	
	const onChange = (e)=> {setValue(e.target.value);
	debouncedSearch(e.target.value)}
	

	return (
		<div>
			<input type="text" value={value} onChange={onChange}/>
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
		
		</div>
	);
}

export default App;
