import {
    baseUrls,
    usedBaseUrlIndex
} from '../references/API'

export function AppendURL(additionalUrl = "") {
    return baseUrls[usedBaseUrlIndex] + additionalUrl
}

export function CreateRequest(requestType = "", params = {}) {
    return {
        method : requestType,
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(params),
    }
}