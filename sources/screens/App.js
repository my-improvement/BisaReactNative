import React from 'react'

import SafeAreaViewAndStatusBar from '../components/SafeAreaViewAndStatusBar'
import TopBar from '../components/TopBar'

const baseColor = "crimson"

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaViewAndStatusBar
                barStyle = "light-content"
                color = {baseColor}
            >
                <TopBar
                    color = {baseColor}
                    tintColor = "white"
                    title = "Bisa React-Native"
                />
            </SafeAreaViewAndStatusBar>
        )
    }
}