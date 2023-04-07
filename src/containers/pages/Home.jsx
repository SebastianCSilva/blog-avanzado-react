import BlogCategories from "components/blog/BlogCategories";
import Header from "components/blog/Header";
import Especiales from "components/navigation/Especiales";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";

function Home({

}){



    return(
        <FullWidthLayout>
            <Header/>
            <BlogCategories/>
            <Especiales/>
        </FullWidthLayout>
    )

}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

})(Home)