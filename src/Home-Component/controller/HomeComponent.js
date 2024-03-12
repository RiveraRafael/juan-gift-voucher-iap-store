import React from 'react';
import { View, Button } from 'react-native';

const HomeComponent = ({ navigation }) => {
    const buttonHandler = () => navigation.navigate('GiftCard_IAP_Store');
    return (
        <View>
            <Button
                title="Store"
                onPress={buttonHandler}
            />
        </View>
    );
};

export default HomeComponent;
