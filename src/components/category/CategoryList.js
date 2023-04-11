import BlogCard from "components/blog/BlogCard"
import LoadingCard from "components/loaders/LoadingCard"
import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { get_categories } from "redux/actions/categories"


function CategoryList({
    get_categories,
    categories
}){
    
    useEffect(()=>{
        get_categories()
    },[])

    return(
        <div>
            <div className="bg-white">
      <div className="py-8 sm:py-10 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Ver Categorias</h2>
          <Link to="/category/" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Buscar todas las Categorias<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {
                    categories ? categories.map(category=>(
                        <Link
                            to={`/blog/categories/${category.id}`}
                            className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                        >
                            <span aria-hidden="true" className="absolute inset-0">
                            <img src={category.thumbnail} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                            />
                            <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                        </Link>
                    )):
                    <LoadingCard/>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <Link to="/category/" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Buscar todas las Categorias<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories
})

export default connect(mapStateToProps,{
    get_categories
})(CategoryList)