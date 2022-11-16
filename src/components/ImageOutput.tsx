import React from 'react';
import { CurrentImageProps } from "../modules/modules";
import { HomeButton } from "./HomeButton";

export function ImageOutput({ currentImage }: CurrentImageProps): JSX.Element {

    return (
        <div className="flex-col border-2 rounded border-white m-[20px] p-[10px] h-[550px]">
            <img
                src={ currentImage?.urls?.regular }
                alt={ currentImage?.user?.name }
                className="w-[700px] h-[450px]"
            />
            <div className="flex justify-between items-center mt-[15px]">
                <HomeButton />
                <div className="flex-col">
                    <p className="text-center font-bold">
                        Title:
                        <span className="font-normal"> { currentImage?.user?.name }</span>
                    </p>
                    <p className="text-center font-bold">
                        Author name:
                        <span className="font-normal"> { currentImage?.user?.username }</span>
                    </p>
                </div>
            </div>
        </div>
    );
}