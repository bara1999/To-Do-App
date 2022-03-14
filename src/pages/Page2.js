import React from 'react';
import Title from '../components/Title';
import { v4 as uuidv4, v4 } from 'uuid';

const Page2 = () => {
    
    // React.useEffect(() => {
    //     alert("Welcome to page 2!");
    //     return () => {
    //         alert("Goodbye from page 2!");
    //     }
    // });

    const props = {
        name: "أحمد",
        title: "سيد.",
        age: "15"
    }
    return (
        <div>
            <Title title="معلومات شخصية" />
            <span>الاسم:{props.title} </span>
            <span> {props.name} </span>
            <br />
            <span>العمر: {props.age } </span>
            <br />

            <a href="/admin/dashboard">العودة للصفحة الرئيسية</a>
            <br />
            
        </div>
    )
}

export default Page2;
