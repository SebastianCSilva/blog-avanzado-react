import BlogCard from "components/blog/BlogCard"
import LoadingCard from "components/loaders/LoadingCard"
import { useEffect } from "react"
import { connect } from "react-redux"


function CategoryList({
    category_list,
    categories,
    
}){
    
    return(
        <div>
            {
                categories ?
                <>
                <div className="relative bg-gray-50 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                            {
                                categories.map(category=>(
                                    <BlogCard data={category}/>
                                    
                                ))
                            }
                        </div>
                        
                    </div>
                </div>
                </>
                :
                <LoadingCard/>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps,{
})(CategoryList)