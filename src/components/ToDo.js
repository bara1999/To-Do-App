import React from 'react';

function ToDo(props) {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2px 0'

    }
    const textStyle = {
        fontSize: '16px',
        border: '1px solid gray',
        padding: '5px',
        flexGrow: 1,
        marginRight: '5px'
    };
    const textStyleDone = {
        fontSize: '13px',
        border: '1px solid green',
        padding: '5px',
        flexGrow: 1,
        marginRight: '5px',
        textDecoration: 'line-through',
        backgroundColor: 'pink'
    };

    const handleDelete = () => {
        if (props.onDelete)
            props.onDelete(props.id);
    }
    
    React.useEffect(() => {
        console.log(`Item: ${props.id} has been toggled!`);
    }, [props.isDone]);

    return (
        <div style={containerStyle} key={props.id}>
            <span className={props.isDone ? 'task-done' : 'task'}>{props.text}</span>
            {/* <span style={props.isDone ? textStyleDone : textStyle}>{props.text}</span> */}
            {/* <span style={{ ...textStyle, textDecoration: props.isDone ? "line-through" : "none" }}>{props.text}</span> */}
            <button
                className="action-button"
                onClick={handleDelete}
            >
                X
            </button>
            
            <input type="checkbox" onChange={props.onToggle} />
        </div>
    )
}
export default ToDo;