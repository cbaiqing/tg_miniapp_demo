import React from 'react'
import { IndexNavBg, IndexNavBox, IndexNavBgBox, IndexNavContent, IndexNavItem, IndexNavItemImg, IndexNavItemName, IndexNavBetItem } from "./styled";
import navBg from "../../assets/images/nav_bg.png";
import taskImg from "../../assets/images/nav_task.png";
import inviteImg from "../../assets/images/nav_invite.png";
import bettingImg from "../../assets/images/nav_betting.png";
import rankinImg from "../../assets/images/nav_ranking.png";
import mineImg from "../../assets/images/nav_mine.png";
import bettingItemBg from "../../assets/images/nav_betting_bg.png";
const naviList = [
    {name:"任务",img:taskImg},
    {name:"邀请",img:inviteImg},
    {name:"竞猜",img:bettingImg},
    {name:"排行",img:rankinImg},
    {name:"我的",img:mineImg}
]
const NavigateComp = (props) =>{

    const {onNavigateChange} = props;

    const _onNaviItemClick = (index) =>{
        if (typeof onNavigateChange == "function") {
            onNavigateChange(index);
        }
    }
    return <IndexNavBox>
    <IndexNavBgBox >
        <IndexNavBg src={navBg}/>
    </IndexNavBgBox>
    <IndexNavContent>
        {
            naviList.map((item,index)=>
                index==2
            ?
            <IndexNavItem key={"nav_"+index} onClick={()=>_onNaviItemClick(index)}>
                <IndexNavBetItem bg={bettingItemBg}>
                    <IndexNavItemImg width={"24px"} height={"24px"} src={item.img}/>
                    <IndexNavItemName color="black">{item.name}</IndexNavItemName>
                </IndexNavBetItem>
            </IndexNavItem>
            :
            <IndexNavItem key={"nav_"+index} onClick={()=>_onNaviItemClick(index)}>
                <IndexNavItemImg src={item.img}/>
                <IndexNavItemName>{item.name}</IndexNavItemName>
            </IndexNavItem>
            )
        }
    </IndexNavContent>
</IndexNavBox>
}

export default NavigateComp;