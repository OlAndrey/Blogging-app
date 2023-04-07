import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'
import { createPost } from '../store/actionts/posts'

const CreatePostPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBlogCreateConfirm = async (data) => {
    try {
      const res = await dispatch(createPost(data))
      if (res) navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  return <PostForm onSubmit={handleBlogCreateConfirm} />
}

export default CreatePostPage
