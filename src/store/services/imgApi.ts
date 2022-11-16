import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IImagesData } from "../../modules/modules";


const BASE_URL = "https://api.unsplash.com/photos/?client_id=";
const ACCESS_TOKEN = "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";

export const imgApi = createApi({
    reducerPath: 'imgApi',
    baseQuery: fetchBaseQuery({baseUrl: `${ BASE_URL }${ ACCESS_TOKEN }`}),
    endpoints: (builder) => ({
        getImgByToken: builder.query<IImagesData[], string>({
            query: (token) => `${ token }`,
        }),
    }),
})

export const { useGetImgByTokenQuery } = imgApi