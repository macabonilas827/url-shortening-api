import img from "../assets/images/illustration-working.svg"

const LandingPage = () => {
  return (
    <div className="text-center">
      
      <img className=" scale-150 ml-20 mt-20 mb-20 " src={img} alt="" />
     
      <h1 className="text-very-dark-blue font-bold text-4xl ">More than just shorter links</h1>
      <p className="text-grayish-violet m-2 text-lg font-normal my-4" >Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <button className="bg-cyan-500 hover:bg-cyan-700 text-lg font-medium text-white text-center py-2 px-8 rounded-full my-2  ">Get Started</button>
    </div>
  )
}
export default LandingPage