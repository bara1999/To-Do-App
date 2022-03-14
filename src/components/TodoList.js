import React from 'react';
import ToDo from './ToDo';

function TodoList(props) {
    const { items } = props;
    return (
        <div style={{ border: '2px solid red', margin: '10px 0', padding: '5px' }}>
            {
                items.map((item, index) => <ToDo
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    isDone={item.isDone}
                    onDelete={props.onDelete}
                    onToggle={() => props.onToggle(index)}
                />)
            }
            {
                items.length === 0 && <span>!لا توجد مهام بعد</span>
            }
        </div>
    )
}

export default TodoList;
