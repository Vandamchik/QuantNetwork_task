import React from 'react';
import { useParams } from "react-router-dom";
import { useGetImgByTokenQuery } from "../store/services/imgApi";
import { ImageOutput } from "../components/ImageOutput";


export function SecondPage(): JSX.Element {
    const { id } = useParams()
    const { data } = useGetImgByTokenQuery("");
    const currentImageData = data?.filter(el => el.id === id)

    return (
        <div className="bg-neutral-400 flex h-full justify-evenly">
            { currentImageData?.map(el => <ImageOutput currentImage={ el } key={ el.id }/> ) }
        </div>
    );
}

