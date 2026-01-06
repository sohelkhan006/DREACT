function handleClick(){
    console.log("you clicked me!")
}

function handleMouseOver(){
    console.log("you Hover on me!")
}

function handleDblClick(){
    console.log("you Double clicked me!")
}

let count = 0;
function assistantClick (name){
    if(count < 3){
        count++;
        console.log(`${name} you click me ${count} time/s`)
    }
    else{
        console.log(`${name} Stop clicking me!`)
    }
}

export default function Button (){
    return (
        <div>
        <button onClick={handleClick}>Click me!</button>
        <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea recusandae sequi voluptates et amet libero quam non consectetur nihil tempore voluptatibus nesciunt perspiciatis officia, magni aliquam laboriosam quaerat nemo magnam?</p>
        <button onDoubleClick={handleDblClick}>Double click me</button>
        <button onClick={() => assistantClick("Bro")}>Smart Button</button>
        </div>
    );
}