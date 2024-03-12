import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableNativeFeedback,
    Image,
} from 'react-native';
/* eslint-disable import/no-extraneous-dependencies */
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Styles from './style/GiftVoucherUIStyle';
import InAppPurchaseListTab from '../view/InAppPurchaseListTab';
import TabLabelStyle from '../model/TabStyling';

const questionMark = require('../../../lib/resources/question.png');

const QuestionIcon = (buttonHandler) => (
    <View
        style={Styles.questionMark}
    >
        <TouchableNativeFeedback
            onPress={buttonHandler}
        >
            <View
                style={Styles.questionMarkAlignment}
            >
                <Image
                    style={Styles.questionMarkImage}
                    source={questionMark}
                />
            </View>
        </TouchableNativeFeedback>
    </View>
);

const GiftVoucherUI = ({
    navigation,
    route,
}) => {
    const {
        diamondsTabProps,
        coinsTabProps,
        questionButtonHandler,
    } = route.params;

    const renderScene = SceneMap({
        diamonds: () => InAppPurchaseListTab(diamondsTabProps),
        coins: () => InAppPurchaseListTab(coinsTabProps),
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'diamonds', title: 'Diamonds' },
        { key: 'coins', title: 'Coins' },
    ]);

    navigation.setOptions({
        headerRight: () => QuestionIcon(questionButtonHandler),
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            style={Styles.tabStyle}
            renderTabBar={(tabProps) => (
                <TabBar
                    {...tabProps}
                    renderLabel={({ focused, route: route2 }) => (
                        <Text style={TabLabelStyle(Styles, focused)}>
                            {route2.title}
                        </Text>
                    )}
                    style={Styles.tabStyle}
                    indicatorStyle={Styles.tabSelection}
                />
            )}
        />
    );
};

export default GiftVoucherUI;
