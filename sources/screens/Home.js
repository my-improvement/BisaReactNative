import React from 'react'

import {
    ActivityIndicator,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import SafeAreaViewAndStatusBar from '../components/SafeAreaViewAndStatusBar'
import TopBar from '../components/TopBar'

import {
    API
} from '../references/API'

export default class Home extends React.Component {
    state = {
        list: [],
        isGettingData: false
    }

    componentDidMount() {
        console.disableYellowBox = true

        this.LoadData()
    }

    render() {
        return (
            <SafeAreaViewAndStatusBar
                barStyle = "light-content"
                color = "cadetblue"
            >
                <TopBar
                    color = "cadetblue"
                    tintColor = "white"
                    title = "Bisa React-Native"
                />

                {
                    this.state.isGettingData ?
                        <View
                            style = {{
                                alignItems: "center",
                                flex: 1,
                                justifyContent: "center"
                            }}
                        >
                            <ActivityIndicator
                                color = "dimgray"
                                size = "large"
                            />
                        </View>
                        :
                        <ScrollView
                            contentContainerStyle = {{
                                padding: 20
                            }}
                            style = {{
                                flex: 1
                            }}
                        >
                            {
                                this.state.list.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity = {0.7}
                                            key = {index.toString()}
                                            onPress = {() => this.props.navigation.navigate("Detail", {item: item})}
                                            style = {{
                                                borderRadius: 7,
                                                backgroundColor: "aliceblue",
                                                marginTop: index == 0 ? 0 : 10,
                                                padding: 10
                                            }}
                                        >
                                            <Text
                                                style = {{
                                                    color: "black",
                                                    fontSize: 18
                                                }}
                                            >
                                                {item.title}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                }
            </SafeAreaViewAndStatusBar>
        )
    }

    LoadData() {
        this.setState({isGettingData: true})

        API().Home()
        .then(res => res.text())
        .then(resText => {
            this.setState({isGettingData: false})

            if(resText[0] == "[") {
                const resJson = JSON.parse(resText)

                this.setState({list: resJson})
            }
        })
        .catch(err => this.setState({isGettingData: false}))
    }
}