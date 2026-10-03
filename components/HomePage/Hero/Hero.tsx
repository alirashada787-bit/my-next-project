import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-4 " >
      <div className="flex flex-col items-center md:items-start gap-7" >
        <h2 className="text-5xl font-bold text-center md:text-left text-green-900" >
            Hero Page
        </h2>
        <p className="max-w-lg text-gray-500 text-center md:text-left " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus autem aliquam sapiente aperiam, culpa magnam aut eveniet recusandae quo reprehenderit.</p>
      </div>
      <div className="m-6" >
        {/* image */}
        <Image src="/Flowers.jpg"
        alt="heroimage" width={150} height={100} />
      </div>
    </div>
  )
}

export default Hero
