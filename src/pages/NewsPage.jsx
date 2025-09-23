import React from 'react'
import ArticlePage from './ArticlePage'
import { useParams } from 'react-router-dom'

const NewsPage = () => {
    const {id} = useParams()

    return (
        <ArticlePage id={id} type="1" />
    )
}

export default NewsPage