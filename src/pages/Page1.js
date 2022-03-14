import React, { useState, useEffect } from 'react';
import Title from "../components/Title";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Page1 = () => {
    const [items, setItems] = useState([
        { text: 'مهمة الأولى', id: '1', isDone: false },
        { text: 'المهمة الثانية', id: '2', isDone: false },
        
    ]);

    // useEffect(() => {
    //     alert("Welcome to page 1!");
    //     return () => {
    //         alert("Goodbye from page 1!");
    //     }
    // });
    
    // useEffect(() => {
    //     alert("Items has been modified!");
    // }, [items]);

    const handelSubmit = (value) => {
        setItems([{ text: value, id: new Date().getTime(), isDone: false }, ...items]);   // Push the new item
    }

    const handleDelete = (id) => {
        setItems(items.filter(it => it.id !== id));
    }

    const handleToggle = (index) => {
        console.log("handleToggle");
        const tmpItems = items.slice(0);
        tmpItems[index].isDone = !tmpItems[index].isDone;
        setItems(tmpItems);
    }
    return (
        <div>
            <Title title="تطبيق إدارة المهام" />
            <TodoForm onSubmit={handelSubmit} />
            <TodoList
                items={items}
                onDelete={handleDelete}
                onToggle={handleToggle}
            />
        </div>
    )
}

export default Page1;
