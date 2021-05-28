
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import BlogContext from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const Edit = ({ route, navigation }) => {
    const { data, editBlogPost } = useContext(BlogContext)
    const { id } = route.params;
    const blogPost = data.find((blogPost) => blogPost.id === id)

    return (
        <BlogPostForm
          initialValues={{ title: blogPost.title, content: blogPost.content }}
          onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop());
          }}
        />
      );
};

const styles = StyleSheet.create({});

export default Edit;
