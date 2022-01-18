import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSingleProduct } from "../api";
import { ErrorComponent, LoadingComponent } from "./helperComponents";

const SingleProduct = (props) => {
    const { productId } = useParams()
    const { isLoading, isError, error, data, isFetched, isFetching, ...query } =
        useQuery(
            ["product", productId],
            () => fetchSingleProduct(productId),
            {
                retry: false,
                select: (data) => data.data
            }
            );

    if (isError) {
        return <ErrorComponent message={error.message} />;
    }

    if (isLoading) {
        return <LoadingComponent />
    }

    return <>
    <h1>SingleProduct</h1>
    <img src={data?.image} alt="" style={{width: "200px"}} />
    <h5>{data?.title}</h5>
    <p>{data?.price}</p>
    </>
    
};

export default SingleProduct;