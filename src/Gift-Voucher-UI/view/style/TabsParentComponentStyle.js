import { StyleSheet } from 'react-native';

const tab = 2;
const deviceWidth = 1080 / 3;

const tabWidth = deviceWidth / tab;
const tabSelectWidth = 60;

export default StyleSheet.create({
    parentContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#BBBBBB',
    },
    tabStyle: {
        backgroundColor: 'white',
    },
    tabLabel: {
        color: '#7260c8',
    },
    tabLabelSelected: {
        color: '#a59cca',
    },
    tabSelection: {
        backgroundColor: '#7260c8',
        width: tabSelectWidth,
        left: (tabWidth - tabSelectWidth) / 2,
    },
});
