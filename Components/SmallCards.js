import Image from "next/legacy/image";


function SmallCards({img, distance, location}) {
  return (
    <div>
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" />
      </div>
      <div></div>

    </div>
  )
}

export default SmallCards