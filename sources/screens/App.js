import React from 'react'

import {
    createAppContainer
} from 'react-navigation'

import {
    createStackNavigator,
    StackViewStyleInterpolator
} from 'react-navigation-stack'

import Home from './Home'
import Detail from './Detail'

export default createAppContainer(createStackNavigator(
    {
        Home,
        Detail
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: true,
            header: null
        },
        transitionConfig: () => ({screenInterpolator: screenProps => StackViewStyleInterpolator.forHorizontal(screenProps)})
    }
))