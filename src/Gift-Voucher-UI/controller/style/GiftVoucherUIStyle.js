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
    },
    tabStyle: {
        backgroundColor: 'white',
        marginVertical: -0.5,
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
    questionMark: {
        minWidth: 30,
        maxWidth: 30,
        minHeight: 30,
        maxHeight: 30,
        right: 20,
        justifyContent: 'center',
    },
    questionMarkAlignment: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    questionMarkImage: {
        width: 20,
        height: 20,
    },
});
