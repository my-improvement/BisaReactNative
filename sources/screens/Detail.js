import React from 'react'

import {
    ActivityIndicator,
    ScrollView,
    View
} from 'react-native'

import Markdown from 'react-native-markdown-renderer'

import SafeAreaViewAndStatusBar from '../components/SafeAreaViewAndStatusBar'
import TopBar from '../components/TopBar'

export default class Detail extends React.Component {
    state = {
        contentData: "",
        isGettingData: false
    }

    componentDidMount() {
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
                    ShowBackButtonWithAction = {() => this.props.navigation.navigate("Home")}
                    tintColor = "white"
                    title = "Materi"
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
                            <Markdown>
                                {this.state.contentData}
                            </Markdown>
                        </ScrollView>
                }
            </SafeAreaViewAndStatusBar>
        )
    }

    LoadData() {
        this.setState({isGettingData: true})

        fetch(this.props.navigation.getParam("item").contentURL)
        .then(res => res.text())
        .then(resText => {
            this.setState({isGettingData: false})

            this.setState({contentData: resText})
        })
        .catch(err => this.setState({isGettingData: false}))
    }
}