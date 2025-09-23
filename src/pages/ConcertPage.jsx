import React from 'react'
import ArticlePage from './ArticlePage'
import { useParams } from 'react-router-dom'

const ConcertPage = () => {
    const {id} = useParams()

    return (
        <ArticlePage id={id} type="0" />
    )
}

export default ConcertPage