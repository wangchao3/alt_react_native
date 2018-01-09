import React, {View, Text, StyleSheet} from 'react-native';
import Container from './container';

export default React.createClass({
    render: function() {
        return (
            <Container>
                <Text style={styles.container}>Loading...</Text>
            </Container>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        color: '#333',
        textAlign: 'center',
        paddingTop: 20,
    }
})
