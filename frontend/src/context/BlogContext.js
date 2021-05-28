import React, { createContext, useReducer } from 'react'
import jsonServer from '../api/jsonServer'

const BlogContext = createContext();

const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        case 'delete_blog':
            return state.filter((BlogPostanyvar) => BlogPostanyvar.id !== action.payload)
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {
    const [BlogPosts, dispatch] = useReducer(BlogReducer, [])

    const getBlogPosts = async() =>{
        const response = await jsonServer.get('/blogposts')
        dispatch({type: 'get_blogposts', payload: response.data})
    }


    const addBlog = async(title, content, callback) => {
        return (
            await jsonServer.post('/blogposts', {title, content}),
            callback()
        )


    }

    const deleteBlog = async(id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        return dispatch({ type: 'delete_blog', payload: id })
    }

    const editBlogPost = async(id, title, content, callback) => {
        return (
            await jsonServer.put(`/blogposts/${id}`, {title, content}),
            dispatch({
                type: 'edit_blogpost',
                payload: { id, title, content },
            }),
            callback()
        )
    }
    return <BlogContext.Provider value={{ data: BlogPosts, addBlog, deleteBlog, editBlogPost, getBlogPosts }}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;

//the above commented code can be used if using only one context in an app.

// import React, { createContext, useReducer } from 'react'
// import createDataContext from './createDataContext';

// const blogReducer = (state, action) => {
//     switch (action.type) {
//         case 'add_blog':
//             return [...state, { title: `blog post num ${state.length + 1}` }]
//         default:
//             return state;
//     }
// }
// //the func below will now not have acces to dispatch b/c it is createdatacontext file
// // const addBlog = (dispatch) => {
// //     return dispatch({ type: 'add_blog' })
// // }

// //so we have to call this will dispatch as param
// const addBlogPost = (dispatch) => {
//     return () => {
//         dispatch({ type: 'add_blog' })
//     }
// }



// export const { Context, Provider } = createDataContext(
//     blogReducer,
//     { addBlogPost },
//     []
// ) //reducer, then action then empty state value