import { connect } from "react-redux";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useParams } from "react-router-dom";

function Search(){

    const params = useParams()
    const term = params.term

    return(
        <FullWidthLayout>
            {term}
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {

})(Search)