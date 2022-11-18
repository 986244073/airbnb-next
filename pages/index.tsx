import Head from 'next/head'

import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

const Home = ({ exploreData, cardData }: any) => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      {/* header */}

      <Header />
      {/* banner */}
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore NearBy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }: any) => (
              <SmallCard
                key={img}
                distance={distance}
                img={img}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="ml-3 flex  flex-row space-x-3 overflow-x-hidden p-4">
            {cardData?.map(({ img, location }: any) => (
              <MediumCard key={img} img={img} title={location} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  )
  const cardData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  )
  return {
    props: {
      exploreData,
      cardData,
    },
  }
}
