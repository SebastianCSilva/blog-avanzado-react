import { connect } from "react-redux"
import { useEffect } from "react";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";

function BlogList({
    get_blog_list,
    get_blog_list_page,
    blog_list
}){

    useEffect(()=>{
        get_blog_list()
    },[])

    return(
        <div>blog list</div>
    )
}

const mapStateToProps = state =>({
    blog_list: state.blog.blog_list

})

export default connect(mapStateToProps,{
    get_blog_list,
    get_blog_list_page
})(BlogList)