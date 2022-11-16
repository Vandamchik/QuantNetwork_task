import React from 'react';
import { Link } from "react-router-dom";


export function HomeButton(): JSX.Element {

    return (
        <div className="flex w-[100px] h-[40px] rounded-[12px] justify-evenly bg-slate-200 items-center">
           <Link to={ `/` }>Back</Link>
        </div>
    );
}