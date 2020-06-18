import React from 'react';
import styled from 'styled-components';
import img from '../assets/Logo/logo.png';
const BannerDiv = styled.div`
    height:4.5rem;
    background-color: #303946;
    padding:2px;
`;

const LogoDiv = styled.div`
    background-image: url(${img});
    background-size: cover;
    /* background-color: #1e20178f; */
    height:4rem;
    width:9rem;
    margin:0px 10px 10px 10px;
`;

const Banner = () => (
    
    <BannerDiv className="BannerClass">
        <LogoDiv className='logodiv'></LogoDiv>
    </BannerDiv>
    
);

export default Banner;