import styled from "styled-components";

export const IndexStyled = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /* background-color: #101010; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const IndexBody = styled.div`
    flex: 1;
    width: 100%;
    background-color: white;
    overflow: hidden;
`
export const IndexBottom = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
`
export const IndexNavBox = styled.div`
    position: relative;
    width: 100%;
    height: 57px;
    display: flex;
    box-sizing: border-box;
    margin-bottom: 30px;
`
export const IndexNavBgBox = styled.div`
    position: absolute;
    left: 10px;
    right: 10px;
    height: 100%;

`