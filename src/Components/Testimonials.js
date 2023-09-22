
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Card from "./Card"
import { useState } from "react"

function Testimonial(props) {
    let reviews = props.reviews


const [index,setIndex]=useState(0)

const LeftHandler=()=>{
    if(index-1<0){
        setIndex(reviews.length-1 )
    }
    else{
        setIndex(index-1)
    }

}

const NextHandler=()=>{
    if(index+1>=reviews.length){
        setIndex(0)
    }
    else{
        setIndex(index+1)
    }
}

const RandomHandler=()=>{
let MathRandom=Math.floor(Math.random()*reviews.length);
console.log(MathRandom)
setIndex(MathRandom)
}



    return (

        <div className=" rounded-md bg-gray-100 shadow-20 shadow-sm shadow-black h-[600px] w-[900px] text-center flex flex-col  items-center justify-center gap-6  ">
            <Card reviews={reviews[index]}></Card>

            
            <div className='space-x-6 flex '>
                <FaChevronLeft onClick={LeftHandler} className="text-blue-400 cursor-pointer" />
                <FaChevronRight onClick={NextHandler}  className="text-blue-400 cursor-pointer"/>
            </div>

            <button onClick={RandomHandler} className='bg-blue-400 w-[100%] py-3 rounded-md  hover:bg-blue-600 transition-all duration-200 text-gray-800 font-bold'>Random </button>
        </div>
    )

}
export default Testimonial