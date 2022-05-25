import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => setInputValue(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents posting
        if(inputValue.trim().length > 0){
            // se desestructura para obtener el callback y se obtiene las categorias
            //, los hooks siempre tienen los valores y se pueden obtener como
            // parametros
            setCategories(categories => [...categories,inputValue]);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
