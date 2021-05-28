import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import BlogContext from '../context/BlogContext'

// const Show = ({navigation}) => {
//     const { data } = useContext(BlogContext)
//     console.log(navigation.getParam('id'))
//     // const blogPosts = data.find((blogPosts)=> blogPosts.id === navigation.getParam('id'))
//     return (
//         <View>
//             <Text>hy</Text>
//         </View>
//     )
// }

const Show = ({route, navigation}) => {
    const { data } = useContext(BlogContext)
    const { id } = route.params;
    // console.log(id, 'id')
    const blogPost = data.find((blogPost)=>blogPost.id === id)
    // console.log(blogPost, 'blogpost')
    // const blogPosts = data.find((blogPosts)=> blogPosts.id === navigation.getParam('id'))
    return (
        <View>
            <Button title='Edit' onPress={()=>navigation.navigate('Edit',{id: id})} />
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     button: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     //borderTopColor: 'black',
//     // borderWidth: 1,
//     borderTopWidth: 1,
//     marginHorizontal: 10
//   },
// });

export default Show;