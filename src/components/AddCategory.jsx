import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("");

	const inputChangeHandler = (e) => {
		setInputValue(e.target.value);
	};

  const onSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length <= 1 )  return;

    onNewCategory( inputValue.trim() );
    setInputValue('');

  }

	return (
		<form onSubmit={onSubmit}>
			<input 
        placeholder="Buscar Gifs"
        type="text" 
        value={inputValue} 
        onChange={inputChangeHandler} 
      />
		</form>
	);
};
