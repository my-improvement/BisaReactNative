import React from 'react'

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import PropTypes from 'prop-types'

export default class TopBar extends React.Component {
    static propTypes = {
        color: PropTypes.string,
        ShowBackButtonWithAction: PropTypes.func,
        tintColor: PropTypes.string,
        title: PropTypes.string
    }

    color = this.props.color || "black"
    tintColor = this.props.tintColor || "white"
    title = this.props.title || "Sample"

    render() {
        return (
            <View
                style = {{
                    alignItems: "center",
                    backgroundColor: this.color,
                    flexDirection: "row",
                    height: 60,
                    paddingHorizontal: 10
                }}
            >
                {
                    this.props.ShowBackButtonWithAction != undefined ?
                        <TouchableOpacity
                            activeOpacity = {0.5}
                            onPress = {() => this.props.ShowBackButtonWithAction()}
                        >
                            <MaterialCommunityIcons
                                color = {this.tintColor}
                                name = "arrow-left"
                                size = {30}
                            />
                        </TouchableOpacity>
                        :
                        null
                }

                <Text
                    numberOfLines = {1}
                    style = {{
                        color: this.tintColor,
                        flex: 1,
                        fontWeight: "bold",
                        fontSize: 24,
                        marginLeft: 10
                    }}
                >
                    {this.title}
                </Text>
            </View>
        )
    }
}