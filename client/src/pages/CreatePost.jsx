import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'
import { clearPostForm, createPost } from '../store/actionts/posts'

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

  const handleCancelConfirm = () => {
    dispatch(clearPostForm())
    navigate('/home')
  }

  return <PostForm onSubmit={handleBlogCreateConfirm} onCancel={handleCancelConfirm} />
}

export default CreatePostPage
