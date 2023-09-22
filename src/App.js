// import logo from './logo.svg';
// import './App.css';
import Testimonial from "./Components/Testimonials";

import reviews from "./data";
console.log(reviews)
function App() {
  return (
    <div className="App  h-[100vh] w-[100vw]  flex flex-col items-center justify-center  ">

      <div className="   mx-auto flex flex-col h-[700px] w-[700px] items-center content-center">

        <div className="flex flex-col items-center">
          <h1 className='text-[30px] font-bold'>OUR Testimonial</h1>
          <div className='bg-blue-400 h-1 w-[200px] '></div>
        </div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  );
}

export default App;
