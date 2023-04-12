import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import PostForm from '../components/PostForm'
import { clearPostForm, getPostForUpdatePost, updatePost } from '../store/actionts/postForm'

const EditPostPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let params = useParams()

  useEffect(() => {
    dispatch(getPostForUpdatePost(params.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])


  const handleBlogCreateConfirm = async (data) => {
    try {
      const res = await dispatch(updatePost(data, params.id))
      if (res) navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  const handleCancelConfirm = () => {
    dispatch(clearPostForm())
    navigate('/home')
  }

  return (
    <PostForm
      onSubmit={handleBlogCreateConfirm}
      onCancel={handleCancelConfirm}
    />
  )
}

export default EditPostPage
