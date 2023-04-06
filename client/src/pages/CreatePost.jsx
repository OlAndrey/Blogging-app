import React from 'react'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'

const CreatePostPage = () => {
  const navigate = useNavigate()

  const handleBlogCreateConfirm = async (data) => {
    try {

      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  return <PostForm onSubmit={handleBlogCreateConfirm} />
}

export default CreatePostPage
