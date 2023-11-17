import { useState } from "react";

export default function useFetch(url, options) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    fetch(url, {
        ...options,
    })
        .then((response) => {
            return response.json();
        })
        .then((response_data) => {
            setData(response_data);
            console.log(response_data)
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    return {error, data, loading};
}
