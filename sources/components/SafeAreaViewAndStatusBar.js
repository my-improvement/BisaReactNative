import React from 'react'

import {
    SafeAreaView,
    StatusBar,
    View
} from 'react-native'

import PropTypes from 'prop-types'

export default class SafeAreaViewAndStatusBar extends React.Component {
    static propTypes = {
        barStyle: PropTypes.oneOf(["light-content", "dark-content"]),
        color: PropTypes.string
    }

    barStyle = this.props.barStyle || "light-content"
    color = this.props.color || "black"

    componentDidMount() {
        StatusBar.setBackgroundColor(this.color)
        StatusBar.setBarStyle(this.barStyle)
    }

    render() {
        return (
            <SafeAreaView
                style = {{
                    backgroundColor: this.color,
                    flex: 1
                }}
            >
                <View
                    style = {{
                        backgroundColor: "white",
                        flex: 1
                    }}
                >
                    {this.props.children}
                </View>
            </SafeAreaView>
        )
    }
}