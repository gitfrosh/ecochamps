import SampleProduct from "@/components/sampleProduct"
import Header from '@/components/header'
import Vector from '@/components/vector'
import Feature from '@/components/feature'

const ProductPage = () => {
    return (<>
        <Header />
        <div class="container mx-auto p-12">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hey Juliette</h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"> you are one step closer to becoming an <b>EcoChamp</b>!</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
                Learn more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
        <div>
            <img
                width="200"
                className="mx-auto"
                src="/logo-ecochamps.png"
                alt=""
            />
            <div class="p-12">
                <div class="mb-1 text-lg font-medium dark:text-white">Your EcoPoints: 95EP</div>
                <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: "90%" }}></div>
                </div>
            </div>
            <Vector />
            <Feature text={"Use your EcoChamps card to collect Ecopoints on every purchase"}></Feature >
            <Feature text={"Link online purchases as well to collect more point"}></Feature >
            {/* <Feature text={"Link online purchases as well to collect more points"}></Feature > */}

            <SampleProduct />
        </div>
    </>)
}

export default ProductPage