import React, { useState } from 'react';

const TodoForm = (props) => {
    const [value, setValue] = useState("");
    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit(value);
            setValue("");
        }
    }
    return (
        <div className="form">
            <input
                placeholder="                                                            أدخل المهمة"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
                //onKeyUp={(e) => e.key === "Enter" ? handleSubmit() : ''}
            />
            <button
                className="action-button"
                style={{ width: '20%' }}
                onClick={handleSubmit}
            >+</button>
        </div>
    )
}

export default TodoForm
