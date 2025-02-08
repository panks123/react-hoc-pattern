import { useState } from "react"
// Here withCounter is an HOC - 
// 👉 A Higher-Order Component (HOC) is a function that takes a component as an argument and returns a new enhanced component.
// 👉 The HOC implements common logic inside it and shares that logic with the wrapped component.
// 👉 The original component does not change, but the returned enhanced component has extra functionality.
const withCounter = (OriginalComponent) => {
    return function EnhancedComponent(props) {
        const [count, setCount] = useState(0);

        const incrementCount = () =>{
            setCount(prev => prev +1);
        }
        return (
            <OriginalComponent
                {...props}
                count={count}
                incrementCount={incrementCount}
            />
        )
    }
}

export default withCounter;