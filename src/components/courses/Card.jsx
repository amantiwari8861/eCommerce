import { useDispatch } from "react-redux"
import { Link } from "react-router"
import { addProduct } from "../../redux/slices/cartSlice";

// const Card = (props) => {
const Card = ({ course, institute }) => {

    const dispatch=useDispatch();
    return (
        <>
            <div className="relative block rounded-3xl border border-gray-900 bg-white">
                <Link to={`/coursedetail/${course.courseId}`}>
                    <span
                        className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase"
                    >
                        Save 25%
                    </span>
                    <img
                        src={course.imageUrl}
                        alt=""
                        className="h-52 w-full rounded-tr-3xl rounded-tl-3xl object-contain"
                    />
                    <hr />
                </Link>
                <div className="p-4 text-center">
                    {/* {console.log(props)} */}
                    {/* {console.log(course)} */}

                    {/* {JSON.stringify(props)} */}
                    <strong className="text-xl font-medium text-gray-900"> {course.courseName}</strong>

                    <p className="mt-2 text-pretty text-gray-700 wrap-break-word">
                        {course.description}
                    </p>
                    <p className="mt-2 text-pretty text-gray-700">
                        Actual Price : Rs. <del className="text-red-500">{course.price * 1.25} </del>
                    </p>
                    <p className="mt-2 text-pretty text-gray-700">
                        {institute} exclusive Price :  {course.price}
                    </p>
                    {/* {
                        course.price > 20000 ?
                            <p className="mt-2 text-pretty text-green-700">
                                easy EMI available
                            </p>
                            : null
                    } */}
                    {
                        course.price > 20000
                        &&
                        <p className="mt-2 text-pretty text-green-700">
                            easy EMI available
                        </p>
                    }

                    <span
                        className="mt-4 block rounded-md border cursor-pointer border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
                        onClick={()=>dispatch(addProduct(course))}
                    >
                        add product
                    </span>
                    <Link to={`/coursedetail/${course.courseId}`}>
                    <span
                        className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
                    >
                        Learn More
                    </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card