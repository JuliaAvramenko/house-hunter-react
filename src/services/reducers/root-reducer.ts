import { combineReducers } from "redux";
import { GET_HOUSE_STATS, GET_RECOMMENDATION_CARDS, GET_REVIEW_CARDS, GET_TIPS_AND_TRICKS_CARDS } from "../constants";


const initialState = {
    stats: [],
    recommendationCards: [],
    reviewCards: [],
    tipsAndTricksCards: []
}


const houterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case GET_HOUSE_STATS:
            return {
                ...state,
                stats: action.stats
            }
        case GET_RECOMMENDATION_CARDS:
            return {
                ...state,
                recommendationCards: action.recommendatidonCards
            }
        case GET_REVIEW_CARDS:
            return {
                ...state,
                reviewCards: action.reviewCards
            }
        case GET_TIPS_AND_TRICKS_CARDS:
            return {
                ...state,
                tipsAndTricksCards: action.tipsAndTricksCards
            }

        default:
            return state;

    }

}

export const rootReducer = combineReducers<any>({
    houterReducer: houterReducer
})