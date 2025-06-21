import React from 'react'

const Ref = () => { 
    const [count, setCount] = React.useState(0);
    const value = React.useRef(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
            value.current += 1;
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleIncrement = () => {
        setCount(count + 1);
        value.current += 1;
    };
    return (
        <div>
           <h1>{count}</h1>
           <button onClick={handleIncrement}>+</button>
           <h1>{value.current}</h1>
        </div>
    );
}

export default Ref
