import {SafeAreaView, Text, StyleSheet, StatusBar, View, Image} from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

const Start = () => {
    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: 'Description.\nSay something cool',
            image: require('./assets/1.jpg'),
            backgroundColor: '#59b2ab',
        },
        {
            key: 2,
            title: 'Title 2',
            text: 'Other cool stuff',
            image: require('./assets/2.jpg'),
            backgroundColor: '#febe29',
        },
        {
            key: 3,
            title: 'Rocket guy',
            text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
            image: require('./assets/3.jpg'),
            backgroundColor: '#22bcb5',
        }
    ];
    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    const onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    }
    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 100,
    },
    slide: {

    },
    title: {

    },
    text: {

    }
});


export default Start;