export interface IImagesData {
    alt_description?: null,
    blur_hash?: string,
    color?: string,
    created_at?: string,
    current_user_collections?: any[],
    description?: null,
    height?: number,
    id?: string,
    liked_by_user?: boolean,
    likes?: number,
    links?: {
        download?: string,
        download_location?: string,
        html?: string,
        self?: string,
    }
    promoted_at?: null,
    sponsorship?: {
        impression_urls?: any[],
        sponsor?: {
            accepted_tos?: boolean,
            bio?: string,
            first_name?: string,
            for_hire?: boolean,
            id?: string,
            instagram_username?: string,
            last_name?: string,
            links?: {
                followers?: string,
                following?: string,
                html?: string,
                likes?: string,
                photos?: string,
                portfolio?: string,
                self?: string
            }
            location?: null,
            name?: string,
            portfolio_url?: string
            profile_image?: {
                large?: string,
                medium?: string,
                small?: string
            }
            social?: {
                instagram_username?: string,
                paypal_email?: null,
                portfolio_url?: string,
                twitter_username?: string
            }
            total_collections?: number,
            total_likes?: number,
            total_photos?: number,
            twitter_username?: string,
            updated_at?: string,
            username?: string
        },
        tagline?: string,
        tagline_url?: string,
    }
    topic_submissions?: {},
    updated_at?: string,
    urls?: {
        full?: string,
        raw?: string,
        regular?: string,
        small?: string,
        small_s3?: string,
        thumb?: string
    }
    user?:{
        accepted_tos?: boolean,
        bio?: string,
        first_name?: string,
        for_hire?: boolean,
        id?: string,
        instagram_username?: string,
        last_name?: string,
        links?: {
            followers?: string,
            following?: string,
            html?: string,
            likes?: string,
            photos?: string,
            portfolio?: string,
            self?: string
        }
        location?: null,
        name?: string,
        portfolio_url?: string,
        profile_image?: {
            large?: string,
            medium?: string,
            small?: string
        }
        social: {
            instagram_username?: string,
            paypal_email?: null,
            portfolio_url?: string,
            twitter_username?: string
        }
        total_collections?: number,
        total_likes?: number,
        total_photos?: number,
        twitter_username?: string,
        updated_at?: string,
        username?: string
    }
    width?: number
}

export interface ImagesState {
    images: IImagesData[],
    isLoading: boolean,
    error: string
}