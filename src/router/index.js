// 路由配置
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import Publish from '@/pages/Publish'
import Article from '@/pages/Article'
import Home from '@/pages/Home'
import AuthRoute from '@/components/AuthRoute'


// 配置路由实例
import {createBrowserRouter} from "react-router-dom";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthRoute><Layout/></AuthRoute>,
      children:[
        {
          index: 1,
          element: <Home/>,
        },
        {
          path: "article",
          element: <Article/>,
        },
        {
          path: "publish",
          element: <Publish/>,
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);
  export default router