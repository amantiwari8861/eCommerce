import { useEffect } from "react";
import { useState } from "react";

const LearnUseEffect = () => {
    const [num, setNum] = useState(0);
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    const incrementNum = () => {
        setNum(num + 1);// 100 line
    }

    // it will execute when component is mounted (added(rendered) on UI)
    useEffect(() => {
        console.log("component mounted!");
    }, []);// runs only once

    //it will execute on every re-renders or change in state or prop 
    // useEffect(() => {
    //     console.log("component re-rendered");
    // });
    //it will execute when count updates
    // useEffect(() => {
    //     console.log("component re-rendered Count :",count);
    // },[count]);
    //it will execute when count,num  updates
    useEffect(() => {
        console.log("component re-rendered Count :",count," Num :",num);
    },[count,num]);

    // it will execute when component is un-mounted
    // useEffect(() => {
    //     console.log("component re-rendered");
    //     return () => {
    //         console.log("component un-mounted");
    //     }
    // });

    return (
        <div className="text-center">
            <h1 className="text-3xl">LearnUseEffect</h1>
            <h1 className="text-3xl">Count : {count}</h1>
            <h1 className="text-3xl">Num : {num}</h1>
            <h1 className="text-3xl">Name : {name}</h1>

            <button
                className="mt-4 text-white bg-blue-600 rounded px-4 py-2 cursor-pointer hover:bg-gray-700"
                onClick={incrementNum}
            >increment num</button>

            <button
                className="ml-3 text-white bg-blue-600 rounded px-4 py-2 cursor-pointer hover:bg-gray-700"
                onClick={() => setCount(count + 1)}
            >increment count</button>

            <button
                className="ml-3 text-white bg-blue-600 rounded px-4 py-2 cursor-pointer hover:bg-gray-700"
                onClick={() => setName("Aman")}
            >change name</button>



        </div>
    )
}

export default LearnUseEffect;