import { Fragment } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();


    return <Fragment>
        <h1>Product detail</h1>
        <p>{params.productId}</p>
    </Fragment>
}

export default ProductDetailPage;