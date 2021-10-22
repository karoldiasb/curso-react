import React, { useState } from 'react';
import Button from './Button';
import './InputTask.css';

const InputTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    }

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input" 
                type="text"
            />
            <div className="task-button-container">
                <Button onClick={handleAddTaskClick}>
                    Adicionar
                </Button>
            </div>
        </div>
    );
}
 
export default InputTask;