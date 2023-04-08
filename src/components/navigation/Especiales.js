import { Link } from "react-router-dom"
function Especiales(){
    return(
    <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Publicaciones especiales</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Mi mejor trabajo que considero de gran aporte para todos.
            </p>
          </div>
          <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                
                <Link
                    to="#"
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                >
                    <span aria-hidden="true" className="absolute inset-0">
                    <img src="#" alt="" className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">Name</span>
                </Link>
                <Link
                    to="#"
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                >
                    <span aria-hidden="true" className="absolute inset-0">
                    <img src="#" alt="" className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">Name</span>
                </Link>
                <Link
                    to="#"
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                >
                    <span aria-hidden="true" className="absolute inset-0">
                    <img src="#" alt="" className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">Name</span>
                </Link>
                <Link
                    to="#"
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                >
                    <span aria-hidden="true" className="absolute inset-0">
                    <img src="#" alt="" className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">Name</span>
                </Link>
                <Link
                    to="#"
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                >
                    <span aria-hidden="true" className="absolute inset-0">
                    <img src="#" alt="" className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">Name</span>
                </Link>
                    
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    )
}
export default Especiales