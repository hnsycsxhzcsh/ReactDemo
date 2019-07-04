import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

type Props = {};
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoriatePage from './FavoriatePage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class HomePage extends Component<Props> {
    _tabNavigator() {
        return createBottomTabNavigator({
            PopularPage: {
                screen: PopularPage,
                navigationOptions: {
                    tabBarLabel: "最热",
                    tabBarIcon: ({tintColor, focused}) => (<MaterialIcons
                        name={'whatshot'}
                        size={26}
                        style={{color: tintColor}}/>),
                }
            },
            TrendingPage: {
                screen: TrendingPage,
                navigationOptions: {
                    tabBarLabel: "趋势",
                    tabBarIcon: ({tintColor, focused}) => (<MaterialIcons
                        name={'whatshot'}
                        size={26}
                        style={{color: tintColor}}/>),
                }
            },
            FavoriatePage: {
                screen: FavoriatePage,
                navigationOptions: {
                    tabBarLabel: "收藏",
                    tabBarIcon: ({tintColor, focused}) => (<MaterialIcons
                        name={'favorite'}
                        size={26}
                        style={{color: tintColor}}/>),
                }
            },
            MyPage: {
                screen: MyPage,
                navigationOptions: {
                    tabBarLabel: "我的",
                    tabBarIcon: ({tintColor, focused}) => (<MaterialIcons
                        name={'whatshot'}
                        size={26}
                        style={{color: tintColor}}/>),
                }
            }
        });
    }

    render() {
        const tabNavigator = this._tabNavigator();
        const Tab = createAppContainer(tabNavigator);
        return <Tab/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
