import {trendingAPI} from "../app/api";

const SET_TRENDING_FEED = '/trending/SET_TRENDING_FEED'

let initialState = {
    trendingFeed: null
}

const trendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRENDING_FEED:
            return {
                ...state, trendingFeed: action.trendingFeed
            }
        default:
            return state
    }
}

export const setTrendingFeed = (trendingFeed) => ({type: SET_TRENDING_FEED, trendingFeed})


export const requestTrendingFeed = () => async (dispatch) => {
    const data = await trendingAPI.getTrendingFeed();
    dispatch(setTrendingFeed(data));
}

export default trendingReducer