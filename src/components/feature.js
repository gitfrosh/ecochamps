const Feature = ({ text }) => {

    return (<div class="max-w-sm w-full lg:max-w-full ">

        <div class="m-4 border-r border border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div>
                {/* <p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                </p> */}
                {/* <div class="text-gray-900 font-bold text-xl mb-2"></div> */}
                <p class="text-gray-700 text-base">{text}</p>
            </div>
        </div>
    </div>)
}

export default Feature  