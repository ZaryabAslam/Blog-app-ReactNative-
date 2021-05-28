import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import BlogContext from '../context/BlogContext'
import { MaterialIcons } from '@expo/vector-icons';

const Index = ({navigation}) => {
    const { data, getBlogPosts, deleteBlog } = useContext(BlogContext)
    return (
        <View>
            {/* <Button title='add post' onPress={addBlog} /> */}
            <Button title='create post' onPress={()=>navigation.navigate('Create')} />
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={()=> navigation.navigate('Show', {id: item.id})}>
                    <View style={styles.button}>
                        <Text>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={()=>deleteBlog(item.id)}>
                        <MaterialIcons name="delete" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                }}
                keyExtractor={item => item.title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    //borderTopColor: 'black',
    // borderWidth: 1,
    borderTopWidth: 1,
    marginHorizontal: 10
  },
});

export default Index;