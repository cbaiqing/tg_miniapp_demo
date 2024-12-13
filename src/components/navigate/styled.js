import styled from "styled-components";

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
export const IndexNavBg = styled.img`
    width: 100%;
    height: 57px;
    object-fit: fill;

`
export const IndexNavContent = styled.div`
    position: absolute;
    left: 10px;
    right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const IndexNavItem = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const IndexNavItemImg = styled.img`
    width: ${props=>props.width||"15px"};
    height: ${props=>props.height||"15px"};
`
export const IndexNavItemName = styled.span`
    color: ${props=>props.color||"white"};
    font-size: 14px;
`

export const IndexNavBetItem = styled.div`
    position: absolute;
    width: 50px;
    top: -8px;
    bottom: 0px;
    padding-bottom: 5px;
    background-image: url(${props=>props.bg});
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`