import Image from 'next/image'

function SmallCard({ img, title }: any) {
  return (
    <div className=" cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image fill alt="card" className="rounded-xl" src={img} />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  )
}

export default SmallCard
