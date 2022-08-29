import React from 'react'
import ContentLoader from 'react-content-loader'

const FavoritesCardLoaded = props => (
    <ContentLoader className='catalog__productCard-loader' viewBox="0 0 290 290" height={310}  width={310} {...props}>
        <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
    </ContentLoader>
)

FavoritesCardLoaded.metadata = {
    name: 'Afrizal Fikri',
    github: 'koneko096', // Github username
    description: 'Catalog',
    filename: 'Catalog', // filename of your loader
}

export default FavoritesCardLoaded