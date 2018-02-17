// import libs for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.headerText }</Text>
        </View>

    );
};

const styles = {

    viewStyle: {

        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        paddingTop: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 2,
        position: 'relative'


    },

    textStyle: {
        fontSize: 17

    }

};


// make the component available to other parts of the app
export default Header;
