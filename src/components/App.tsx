import React from 'react';
import { useGetImgByTokenQuery } from "../store/services/imgApi";


export function App(): JSX.Element {
    const { data, isLoading, error } = useGetImgByTokenQuery("");

    console.log(data)


    return (
        <>
            work
        </>
    );
}