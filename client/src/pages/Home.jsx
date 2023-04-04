import React from 'react'
import PostsList from '../components/PostsList'
import posts from '../const/posts'
import { Container } from '@mui/material'

const Home = (props) => {
  return (
    <Container fixed sx={{ padding: "4.5em 0 0 0"}}>
      {posts.map((post, key) => {
        return <PostsList own={true} key={key} article={post} />
      })}
    </Container>
  )
}

export default Home
