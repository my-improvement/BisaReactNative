import {
    AppendURL
} from '../helpers/Networking'

export const baseUrls = [
    "https://reynaldprabha.000webhostapp.com/BisaReactNative"
]

export const usedBaseUrlIndex = 0

export function API() {
    return {
        Home: () => fetch(AppendURL("/home.json"))
    }
}