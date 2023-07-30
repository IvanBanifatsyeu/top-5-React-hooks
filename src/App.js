import React, { useState } from "react";
import "./App.css";
import useInput from "./hooks/useInput";

function App() {
	const userName = useInput("");
	const password = useInput("");
	
	

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
		</div>
	);
}

export default App;
