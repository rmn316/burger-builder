import { useEffect, useState } from 'react';

export default httpClient => {
    const [error, setError] = useState(null);

    const requestInterceptor = axios.interceptors.request.use(request => {
        setError(null);
        return request;
    });

    const responseInterceptor = axios.interceptors.response.use(response => response, error => {
        setError(error);
    });

    useEffect(() => {
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.request.eject(responseInterceptor);
        };
    }, [responseInterceptor, responseInterceptor]);

    const errorConfirmedHandler = () => {
        setError(null);
    };

    return [error, errorConfirmedHandler];
};

