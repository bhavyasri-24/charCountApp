function Count(props){
  return(
    <>
      <div className="flex flex-col justify-around items-center p-5 rounded-md hidden lg:block">
        <div className="text-5xl text-[#76ABAE] flex justify-center items-center font-bold shadow-xl ">{props.num}</div>
        <p className="text-l text-[#EEEEEE] font-bold text-center mt-2">{props.description}</p>
      </div>
      <p className="text-l text-[#EEEEEE] font-bold block lg:hidden">{props.description} : <span className="text-[#76ABAE]">{props.num}</span></p>
    </>
  )
}

export default Count