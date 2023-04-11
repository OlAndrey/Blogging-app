export const loginEndpoint = '/auth/login'
export const registryEndpoint = '/auth/registration'
export const getMeEndpoint = '/auth/me'

export const getPostByIdEndpoint = (id) => `/post/${id}`
export const getAllPostsEndpoint = (page) => `/post/get-all-posts?page=${page}`
export const getMyPostsEndpoint = (page) => `/post/user/me?page=${page}`
export const createPostEndpoint = '/post/add-post'