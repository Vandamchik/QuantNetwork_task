import React from 'react';
import { ImageProps } from "../modules/modules";
import { Link } from "react-router-dom";


export function ImagesList({ imageData }: ImageProps): JSX.Element {

    return (
        <div className="flex-col border-2 rounded border-white m-[20px] p-[10px]">
            <Link to={`/${ imageData?.id }`}>
                <img
                    src={ imageData?.urls?.regular }
                    alt={ imageData?.user?.name }
                    className="w-[200px] h-[150px] m-[10px]"
                />
            </Link>
            <p className="text-center font-bold">
                Title:
                <span className="font-normal"> { imageData?.user?.name }</span>
            </p>
            <p className="text-center font-bold">
                Author name:
                <span className="font-normal"> { imageData?.user?.username }</span>
            </p>
        </div>
    );
}