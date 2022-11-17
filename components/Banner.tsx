import Image from 'next/image'

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <Image
        fill
        alt="banner"
        // sizes="(max-width: 768px) 100vw,
        //         (max-width: 1200px) 50vw,
        //         33vw"
        src={'https://links.papareact.com/0fm'}
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          Im flexable
        </button>
      </div>
    </div>
  )
}

export default Banner
