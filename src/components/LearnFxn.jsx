import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const hii = () => {
    console.log("hiii");
}


const LearnFxn = () => {

    const navigate = useNavigate();

    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
        navigate("/courses");
    }
    useEffect(() => {
        console.log("component re-rendered!");
    })
    return (
        <div>
            {count === 4 && <Navigate to={"/courses"} />}
            <h1 className="text-3xl">{count}</h1>
            {/* <button className="btn bg-primary" onClick={increment()}>click me </button> */}
            <button className="btn bg-primary" onClick={increment}>click me </button>
            <button className="btn bg-danger" onClick={() => increment()}>click me </button>
            <button className="btn bg-danger" onClick={() => setCount(count + 1)}>click me </button>
            <button className="btn bg-danger" onClick={decrement}>click me </button>
            <button className="btn bg-danger" onClick={() => hii()}>click me </button>

            <pre>
                useState
                useEffect
                useLocation
                useForm
                useNavigate
                useRef 
                createContext 
                useContext
                useDispatch 
                useSelector 
            </pre>

        </div>
    )
}

export default LearnFxn
export { hii, LearnFxn }