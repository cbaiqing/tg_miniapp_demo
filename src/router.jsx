import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {getToken} from "./utils/session";
import {useCallbackState} from "./hooks";
import Qs from "qs";
import RouterList from "./routerList";
import {observer} from "mobx-react-lite";

const PrivateRouteComponent = observer((props) => {
    const {Component, location: {search}} = props;
    const [tmpProps, setTmpProps] = useCallbackState(props);
    const [openTime, setOpenTime] = useState(0);
    const [openPage, setOpenPage] = useState(false);
    useEffect(() => {
        let searchDatas = Qs.parse(search.slice(1));
        const jumpTime = searchDatas.jumpTime;
        if (jumpTime && jumpTime > openTime) {
            setOpenPage(false);     //组件刷新第一步，隱藏
            setOpenTime(jumpTime);  //紀录這次刷新时间
            //刷新时间不傳入子组件
            delete searchDatas.jumpTime;
            const newSearch = Qs.stringify(searchDatas);
            setTmpProps({
                ...props,
                location: {
                    ...props.location,
                    search: newSearch,
                }
            }, () => setOpenPage(true))//组件刷新第一步，重新顯示
        } else {
            setTmpProps({
                ...props,
            }, () => setOpenPage(true))//组件刷新第一步，重新顯示
        }
    }, [search]);
    return openPage ? <Component {...tmpProps}/> : null
});
// 需要token权限的路由
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            getToken() ? <PrivateRouteComponent Component={Component} {...props} /> : <Redirect to="/login"/>
        }
    />
);
const RouteItemDom = (item) => {
    const path = item.url ? item.url : item.path;
    return item.requiresAuth ? (
        <PrivateRoute
            exact
            path={path}
            key={"PrivateRoute" + item.path}
            component={item.component}
        />
    ) : (
        <Route exact path={path} key={item.path} component={item.component}/>
    );
};
const RouteListDom = (list) => {
    return list.map((item) => {
        return item.children ? RouteListDom(item.children) : RouteItemDom(item);
    });
};

const BasicRoute = () => (
    <Switch>
        {/* exact 严格模式，统一开启 */}
        {RouteListDom(RouterList)}
    </Switch>
);

export default BasicRoute;
