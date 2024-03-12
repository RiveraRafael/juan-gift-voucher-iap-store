/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from '../../Home-Component/controller/HomeComponent';
import GiftVoucherUI from '../../Gift-Voucher-UI/controller/GiftVoucherUI';
import ItemDataEntity from '../model/ItemDataEntity';

const icon1 = require('../../../lib/resources/icon_1.png');
const icon2 = require('../../../lib/resources/icon_2.png');
const icon3 = require('../../../lib/resources/icon_3.png');
const icon4 = require('../../../lib/resources/icon_4.png');
const icon5 = require('../../../lib/resources/icon_5.png');

const Stack = createStackNavigator();

const ParentComponent = () => {
    const questionButtonHandler = () => console.log('Question mark button clicked');

    const itemClickHandler = (id) => console.log(id);

    const giftVoucherProp = [
        new ItemDataEntity({
            itemID: 'diamond_giftcard_1',
            itemName: 'Small gift card',
            itemPrice: 100,
            itemPriceSymbol: '₱',
            itemIcon: icon1,
            clickHandler: itemClickHandler,
        }),
        new ItemDataEntity({
            itemID: 'diamond_giftcard_2',
            itemName: 'Medium gift card',
            itemPrice: 250,
            itemPriceSymbol: '₱',
            itemIcon: icon2,
            clickHandler: itemClickHandler,
        }),
        new ItemDataEntity({
            itemID: 'diamond_giftcard_3',
            itemName: 'Large gift card',
            itemPrice: 500,
            itemPriceSymbol: '₱',
            itemIcon: icon3,
            clickHandler: itemClickHandler,
        }),
        new ItemDataEntity({
            itemID: 'diamond_giftcard_4',
            itemName: 'X-Large gift card',
            itemPrice: 750,
            itemPriceSymbol: '₱',
            itemIcon: icon4,
            clickHandler: itemClickHandler,
        }),
        new ItemDataEntity({
            itemID: 'diamond_giftcard_5',
            itemName: 'X-L Card gift card',
            itemPrice: 1500,
            itemPriceSymbol: '₱',
            itemIcon: icon5,
            clickHandler: itemClickHandler,
        }),
    ];

    const props = {
        diamondsTabProps: { list: giftVoucherProp },
        coinsTabProps: { list: giftVoucherProp },
        questionButtonHandler,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeComponent}
                    options={{
                        title: 'Home',
                    }}
                />
                <Stack.Screen
                    name="GiftCard_IAP_Store"
                    component={GiftVoucherUI}
                    options={{
                        title: 'Store',
                        headerTitleStyle: { textAlign: 'center' },
                        headerTintColor: '#ffffff',
                        headerStyle: { backgroundColor: '#7260c8' },
                    }}
                    initialParams={props}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ParentComponent;
