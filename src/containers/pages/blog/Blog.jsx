import BlogCategories from "components/blog/BlogCategories";
import BlogList from "components/blog/BlogList";
import Header from "components/blog/Header";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_blog_list } from "redux/actions/blog";


function Blog({
    get_blog_list
}){
    useEffect(()=>{
        get_blog_list()
    },[])


    return(
        <FullWidthLayout>
            <Header/>
            <BlogCategories/>
            <BlogList/>
        </FullWidthLayout>
    )

}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
    get_blog_list
})(Blog)