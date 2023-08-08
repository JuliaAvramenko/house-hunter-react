import { Api } from "../api"
import { GET_HOUSE_STATS, GET_RECOMMENDATION_CARDS, GET_REVIEW_CARDS, GET_TIPS_AND_TRICKS_CARDS } from "../constants"

export type TGetHouseStats = {
    readonly type: typeof GET_HOUSE_STATS
    readonly stats: object
}
export type TGetRecommendationCards = {
    readonly type: typeof GET_RECOMMENDATION_CARDS
    readonly recommendationCards: object
}
export type TGetReviewCards = {
    readonly type: typeof GET_REVIEW_CARDS
    readonly reviewCards: object
}
export type TGetTipsAndTricksCards = {
    readonly type: typeof GET_TIPS_AND_TRICKS_CARDS
    readonly tipsandtrickscards: object
}
export const getHouseStats = () => {
    const stats = Api.getHouseStats()
    return {
        type: GET_HOUSE_STATS,
        stats
    }
}
export const getRecommendationCards = () => {
    const recommendatidonCards = Api.getRecommendationCards()
    return {
        type: GET_RECOMMENDATION_CARDS,
        recommendatidonCards

    }
}
export const getReviewCards = () => {
    const reviewCards = Api.getReviewCards()
    return {
        type: GET_REVIEW_CARDS,
        reviewCards

    }
}
export const getTipsAndTricksCards = () => {
    const tipsAndTricksCards = Api.getTipsAndTricksCards()
    return {
        type: GET_TIPS_AND_TRICKS_CARDS,
        tipsAndTricksCards

    }
}