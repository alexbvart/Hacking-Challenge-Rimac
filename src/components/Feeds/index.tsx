const Feeds = () => {
  return (
    <div className="hidden bg-white p-6 flex-col  
                    lg:flex"
    >
        <div className="flex items-center pb-4">
            <div className="w-1/4">
                <div className="relative">
                    <div className="h-8 w-8 rounded-full bg-white border-2 border-steal-300 flex items-center justify-center">
                        1
                    </div>
                    <div className="h-full w-0.5 bg-rose-500  absolute left-1 my-auto mx-2 "></div>
                    
                </div>
            </div>
            <div className="w-3/4 ml-4">
                {/* <p className="text-lg font-semibold">Paso 1</p> */}
                <p className="text-gray-500">Datos</p>
            </div>
        </div>
        
        <div className="flex items-center mt-4">
            <div className="w-1/4">
                <div className="relative">
                    <div className="h-8 w-8 rounded-full bg-rose-500 flex items-center justify-center text-white">
                        2
                    </div>
                    {/* <div className="absolute -left-px h-full w-1 bg-gray-300"></div> */}
                </div>
            </div>
            <div className="w-3/4 ml-4">
                {/* <p className="text-lg font-semibold">Paso 2</p> */}
                <p className="text-gray-500">Arma tu plan</p>
            </div>
        </div>
    </div>
  )
}

export default Feeds