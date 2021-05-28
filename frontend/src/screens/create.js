
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import BlogContext from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'
const Create = ({ navigation }) => {
  const { addBlog } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlog(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default Create;
