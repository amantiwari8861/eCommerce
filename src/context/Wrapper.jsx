
const Wrapper = () => {
    return (
        <div>
            <Parent>
                <Child1/>
                <Child1/>
                <Child1/>
                <Child1/>
                <Child1/>
            </Parent>
            <Parent>
                <Child2/>
                <Child2/>
                <Child2/>
                <Child2/>
                <Child2/>
            </Parent>
        </div>
    )
}

export default Wrapper

const Parent = ({children}) => {
    return (
        <>
            <h1 className="text-3xl">Hii i am parent</h1>
            <ul className="bg-gray-700 p-2">
               {children}
            </ul>
        </>
    )
};
const Child1 = () => {
    return <>
        <li className="text-red-400 list-disc bg-[greenyellow] mt-1 rounded w-fit ml-3 px-4">List</li>
    </>
}
const Child2 = () => {
    return <>
        <li className="text-black bg-[tomato] rounded mt-1 w-fit ml-3 px-4">List</li>
    </>
}