import React, { Component } from 'react';
import { Text, View, SafeAreaView ,StyleSheet, StatusBar, TouchableOpacity, Platform, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
              <SafeAreaView style={styles.container}>
                    <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
                    <View style = {styles.titleBar}>
                        <Text style={styles.titleText}>ISS Location Tracker</Text>
                        </View>
                        
                        <TouchableOpacity style = {styles.routeCard}
                           onPress={() =>
                            this.props.navigation.navigate("IssLocation")}
                        >
                        
                            <Text>ISS Location</Text>
                            <Text style={styles.knowMore}>{"Know More --->"}</Text>
                            <Text style={styles.bgDigit}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.routeCard}
                            onPress = {() =>
                                this.props.navigation.navigate("Meteors")
                            }
                        >
                            <Text>Meteors</Text>
                            <Text style={styles.knowMore}>{"Know More --->"}</Text>
                            <Text style={styles.bgDigit}>2</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </SafeAreaView>
                </View>
               
               
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',

    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
})