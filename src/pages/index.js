import Head from 'next/head'
import Header from '@/components/header'
import Vector from '@/components/vector'
import Feature from '@/components/feature'
import Link from 'next/link'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
export default function Home() {
  const { width, height } = useWindowSize()

  return (

    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div class="container mx-auto p-12">
        {/* <Confetti
          width={width}
          height={height}
          numberOfPieces={70}
        /> */}
        <div>
          <img
            width="200"
            className="mx-auto"
            src="/bee-level2.png"
            alt=""
          />
          <div>
            <div class="mb-1 text-lg font-medium dark:text-white">Congrats! You recently unlocked level 2 / "Pollinator"!</div>

            <div class="mb-1 text-lg text-gray-700">Your EcoPoints: 220EP</div>
            <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="h-6 bg-yellow-600 rounded-full dark:bg-yellow-500" style={{ width: "15%" }}></div>
            </div>
          </div>

          <div class="mt-12 bmax-w-sm w-full lg:max-w-full ">
            <div class="mb-1 text-lg font-medium dark:text-white">Last products purchased:</div>

            <Link href="/retailer/1/products/1"><div class="order-r border border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div>

                {/* <div class="text-gray-900 font-bold text-xl mb-2">sdfdf</div> */}
                <p class="text-gray-700 text-base">T-Shirt / ZARA / EcoPoints: 200</p>
              </div>
            </div></Link>
            <div class="mt-2 order-r border border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div>

                {/* <div class="text-gray-900 font-bold text-xl mb-2">sdfdf</div> */}
                <p class="text-gray-700 text-base">Socks / H&M / EcoPoints: 5</p>
              </div>
            </div>
          </div>

        </div>
        {/* <Feature text={"Use your EcoChamps card to collect Ecopoints on every purchase"}></Feature >
        <Feature text={"Link online purchases as well to collect more point"}></Feature > */}
        {/* <Vector /> */}

      </div>
    </>
  )
}
