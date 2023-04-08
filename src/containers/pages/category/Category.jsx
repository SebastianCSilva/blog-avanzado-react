import CategoryList from "components/category/CategoryList";
import Header from "components/blog/Header";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_categories } from "redux/actions/categories";

function Category({
    get_categories,
    categories
}){

    useEffect(()=>{
        get_categories()
    },[])

    return(
        <FullWidthLayout>
            <Header/>
            <CategoryList categories={categories}/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    categories: state.categories.categories,
})

export default connect(mapStateToProps,{
    get_categories,
})(Category)