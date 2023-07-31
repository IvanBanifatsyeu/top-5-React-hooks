import React, { useRef, useState } from "react";
import "./App.css";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";
import List from "./components/List";


function App() {
	const userName = useInput("");
	const password = useInput("");
	const ref1 = useRef()
	const isHovering = useHover(ref1)
	
	

	return (
		<div>
		
			<hr />
			<Hover />
			<div ref={ref1} style={{ width: 300, height: 300, background: isHovering ? 'orange' : 'grey' }}></div>
			<List />
			<input type="text" placeholder="Имя" {...userName} />
			<input type="password" placeholder="пароль" {...password}/>
			<button
				onClick={() => {
					console.log(userName.value);
					console.log(password.value);
				}}
			>
				click
			</button>
		</div>
	);
}

export default App;
