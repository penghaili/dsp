import React,{Component} from 'react'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Home from './pages/home.jsx'
import Plan from './pages/plan.jsx'
import Unit from './pages/unit.jsx'
import Idea from './pages/idea.jsx'
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;
class App extends Component{
    constructor(){
        super()
        this.state = {
            collapsed:false
        }
    }
    render(){
        return <BrowserRouter>
        <div className="wrap">
        <div className="aside" >
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
          <Menu.Item><h3>智能投放系统</h3></Menu.Item>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span><Link to="/">首页浏览</Link></span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>广告管理</span></span>}>
              <Menu.Item key="5">广告计划</Menu.Item>
              <Menu.Item key="6">广告单元</Menu.Item>
              <Menu.Item key="7">广告创意</Menu.Item>
              <Menu.Item key="8">广告计划</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>数据中心</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="setting" /><span>工具箱</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/plan" component={Plan}></Route>
                    <Route path="/unit" component={Unit}></Route>
                    <Route path="/idea" component={Idea}></Route>
                </Switch>
            </div>
        </div>
        </BrowserRouter>
    }
}
export default App;