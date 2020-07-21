import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, View, Text } from 'react-native';
const width = Dimensions.get('window').width;
const largeContainerSize = width / 4;
const largeImageSize = width /  1.2;

class PhotoComponent extends Component {
    renderDefault() {
        return (
            <View style={styles.container}>
                <Text style={{marginBottom:550,fontWeight:'bold',fontSize:30}}>Photo/Pictures</Text>
                <Image
                    resizeMode='contain'
                    style={styles.imageSize}
                    source={require('../resources/camera.jpg')}
                />
            </View>
        )
    }
    renderImage() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode='contain'
                    style={styles.chosenImage}
                    source={{ uri: this.props.uri }} />
            </View>
        )
    }
    render() {
        const displayImage = this.props.uri ? this.renderImage() : this.renderDefault()
        return (
            <View style={styles.container}>
                {displayImage}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: '50%'
    },
    containerSize: {
        width: largeContainerSize,
        height: largeContainerSize,
        alignItems: 'center',
        justifyContent: 'center',
        tintColor: 'grey'
    },
    imageSize: {
        width: largeImageSize,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
});
export default PhotoComponent;
