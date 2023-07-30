import React, { useRef, useState } from "react";
import "./App.css";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";

function App() {
	const userName = useInput("");
	const password = useInput("");
	const ref1 = useRef()
	const isHovering = useHover(ref1)
	
	

	return (
		<div>
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
			<hr />
			<Hover />
			<div ref={ref1} style={{ width: 300, height: 300, background: isHovering ? 'orange' : 'grey' }}></div>
		</div>
	);
}

export default App;
