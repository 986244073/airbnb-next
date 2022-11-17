import Image from 'next/image'

function SmallCard({ img, distance, location }: any) {
  return (
    <div className="m-2 mt-5 flex cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image fill alt="img" className="rounded-lg" src={img} />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
