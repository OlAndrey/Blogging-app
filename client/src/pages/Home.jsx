import React from 'react'
import PostsList from '../components/PostsList'
import posts from '../const/posts'
import { Container } from '@mui/material'

const Home = (props) => {
  return (
    <Container fixed>
      {posts.map((post, key) => {
        return <PostsList own={true} key={key} article={post} />
      })}
    </Container>
  )
}

export default Home
