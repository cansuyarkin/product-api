import axios from "axios";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorComponent, LoadingComponent } from "./helperComponents";
import { fetchProducts } from "../api";

const QueryProducts = (props) => {

    const { isLoading, isError, error, data, isFetched, isFetching, ...query } =
        useQuery('products', fetchProducts, { retry: false, select: (data) => data.data })

    console.log(query)
    console.log(data)

    // if (error) {
    //     return <ErrorComponent message={error} />
    // }

    // if (isLoading) {
    //     return <LoadingComponent />
    // }

    if (isError) {
        return <ErrorComponent message={error.message} />;
    }

    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <>
            <h1>QueryProducts</h1>
            <ul>
                {data?.map((item) => (
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`} >
                            {item.title} - {item.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )

}



export default QueryProducts;