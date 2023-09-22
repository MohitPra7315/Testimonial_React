import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

function Card(props) {
    const review = props.reviews
    console.log(review)
    return (

        <div className="flex flex-col gap-y-4  items-center justify-center relative">
            <div className="h-[150px] w-[180px]  my-4  "  >
                <img src={review.image} className='aspect-square rounded-lg ' />
            </div>

            <div>

                <h1 className="font-bold text-[25px]">{review.name}</h1>
                <h4 className=''> {review.job}</h4>
            </div>

            <div className='flex flex-col items-center gap-2 justify-center'>

                <FaQuoteLeft className='text-blue-400'></FaQuoteLeft>
                {/* <div className='w-[100%] h-[100px]  bg-red-400 text-center'> */}
                <p className='text-gray-600 h-[100px] w-[90%]'>{review.text}</p>

                {/* </div> */}
                <FaQuoteRight className='text-blue-400'></FaQuoteRight>
            </div>



        </div>
    )

}
export default Card