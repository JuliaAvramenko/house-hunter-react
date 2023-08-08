import React from 'react';
import logo from './logo.svg';
import styles from './app.module.css';


import Footer from '../footer/footer';
import Header from '../header/header';

import ReadyToSellSection from '../ready-to-sell-section/ready-to-sell-section';

import green from "../../assets/images/app-green.png"
import blue from "../../assets/images/app-blue.png"
import orange from "../../assets/images/orange.png"
import yellow from "../../assets/images/yellow.png"
import SearchHouseSection from '../search-house-section/search-house-section';
import TipsAndTricksSection from '../tips-and-tricks-section/tips-and-tricks-section';
import SubscribeSection from '../subscribe-section/subsrcibe-section';
import RecommendationSection from '../recommendation-section/recommendation-section';
import ReviewSection from '../review-section/review-section';
import { useDispatch } from 'react-redux';
import { getHouseStats, getRecommendationCards, getReviewCards, getTipsAndTricksCards } from '../../services/actions/actions';
import { useEffect } from 'react';


function App() {
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getReviewCards())
        dispatch(getRecommendationCards())
        dispatch(getHouseStats())
        dispatch(getTipsAndTricksCards())

    }, [])

    return (
        <div className={`${styles.app}`}>
            <img src={blue} alt="" className={`${styles.blue}`} />
            <img src={green} alt="" className={`${styles.green}`} />
            <img src={orange} alt="" className={`${styles.orange}`} />
            <img src={yellow} alt="" className={`${styles.yellow}`} />


            <Header></Header>
            <SearchHouseSection></SearchHouseSection>
            <RecommendationSection></RecommendationSection>
            <ReadyToSellSection></ReadyToSellSection>
            <ReviewSection></ReviewSection>
            <TipsAndTricksSection></TipsAndTricksSection>
            <SubscribeSection></SubscribeSection>
            <Footer></Footer>
        </div>
    );
}

export default App;
