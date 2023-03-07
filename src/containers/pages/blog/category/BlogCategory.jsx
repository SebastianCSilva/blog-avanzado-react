import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_blog_list_category } from "redux/actions/blog"

function BlogCategory(){

    const params = useParams()
    const category_id = params.category_id

    useEffect(()=>{
        get_blog_list_category(category_id)
    },[])

    return(
        <FullWidthLayout>
            Blog category
        </FullWidthLayout>
    )

}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list_category
})

export default connect(mapStateToProps,{
    get_blog_list_category
})(BlogCategory)