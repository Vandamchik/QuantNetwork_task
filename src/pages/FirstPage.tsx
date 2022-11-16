import React from 'react';
import { useGetImgByTokenQuery } from "../store/services/imgApi";
import { ImagesList } from "../components/ImagesList";


export function FirstPage(): JSX.Element {
    const { data, isLoading, error } = useGetImgByTokenQuery("");

    return (
        <div className="bg-neutral-400 flex h-full justify-evenly flex-wrap">
            { error &&
                <h1 className="text-center text-red-700 font-bold text-[28px] mt-[50px]">
                    Something goes wrong.
                </h1> }
            { isLoading &&
                <h1 className="text-center text-green-700 font-bold text-[28px] mt-[50px]">
                    Loading...
                </h1> }
            { data && data.map(el => <ImagesList key={ el.id } imageData={ el } />) }
        </div>
    );
}

