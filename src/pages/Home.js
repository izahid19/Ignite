import React, { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";


const Home = () => {
    //FETCH GAME
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    //GET that Data back
    const games = useSelector((state) => state.games);
    console.log(games);
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};









export default Home;