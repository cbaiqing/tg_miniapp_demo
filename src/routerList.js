import Index from "./page/index";
import Login from "./page/login";

/**
 * siderList 每一项说明
 * * 号为必填
 * @param { * 菜单标题 , string} title
 * @param { * 跳转地址 , string} path
 * @param { * 路由组件 , React.ComponentType } component
 * @param { 分组的菜单项 , []} children
 * @param { 需要激活的侧边栏项，以path为值 , string} activeMenu
 * @param { 需要展开的侧边栏项，以上一级path为值 ,[]} openKeys[]
 * @param { 是否在侧边栏隐藏，默认值false } hidden
 * @param { 是否需要token权限，默认值false } requiresAuth
 * key跟link保持一致，需要通过link判断当前的key
 */
const RouterList = [
    {title: "首页", path: "/", component: Index,requiresAuth:false},
    {title: "登录", path: "/login", component: Login,requiresAuth:false},
];
export default RouterList;
