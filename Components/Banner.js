import Image from "next/image";
import web3 from "/public/web3.gif";
// import web33 from "/public/web33.bin";
import web333 from "/public/web333.gif";



function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image           src={web3} layout="fill" objectFit="cover"/>
        <div className="absolute top-1/2 w-full text-center">
            {/* <p className="text-sm sm:text-lg">
                look for a course? Perfect.
            </p> */}
            <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Panaverse</button>
        </div>
    </div>
  )
}

export default Banner