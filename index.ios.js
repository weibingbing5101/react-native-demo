/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS
} from 'react-native';

import SearchPage from './ios/SearchPage/SearchPage.js';

const styles = StyleSheet.create({
  container: {
    flex: 1
    }
});


class HelloWorld extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage
        }}/>
    );
  }
}

// 此处和init创建的项目名称必须一致
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

// <Navigator
    // initialRoute={{ name: 'SearchPage', component: SearchPage }}
    // 初始化页面设置（组件名称、组件类、参数），
    // configureScene={(route) => {
      // return Navigator.SceneConfigs.PushFromRight;
    // }}
    // 定义动画
    // renderScene={(route, navigator) => {
        // let Component = route.component;   
        // renderScene 接收的 route (组件名和组件类对象)和 navigator
        // 此处的 Component 是 initialRoute 传过来的组件 SearchPage
        
        // return <Component {...route.passProps} navigator={navigator} />
        // 返回的是默认第一个初始化的组件 SearchPage  
        // SearchPage 组件中可以使用 this.props.navigator使用navigator的push pop jump...等方法，用于页面跳转
    // }} 
// />

// 注意 return <Component {...route.passProps} navigator={navigator} />  
// 此行代码  中的{...route.passProps}  passProps 必须要和searchPage组件中his.props.navigator.push({})中传参的passProps字段名一致，否则报错
























/*
1、实验   Navigator路由（循环）
import PageOne from './PageOne.js';
import PageTwo from './PageTwo.js';

<Navigator
    // 初始页面
    initialRoute={{ title: 'My Initial Scene', index: 0 }}

    renderScene={(route, navigator) =>
      <PageOne
        title={route.title}
        onForward={ () => {    
          const nextIndex = route.index + 1;
          navigator.push({
            title: 'Scene ' + nextIndex,
            index: nextIndex,
          });
          // 此处push的数据title index会被组件pageone接收   并通过renderScene方法传入
        }}

        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
      />
    }
/>

2、页面跳转路由
import React from 'react';
import {
    View,
    Navigator
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';
// 引入一个组件

export default class SampleComponent extends React.Component {
    render() {
        return (
        <Navigator
          initialRoute={{ name: 'FirstPageComponent', component: FirstPageComponent, params:{} }}  
          // 这个指定了默认的页面，也就是启动app之后会看到界面的第一屏。 
          // 需要填写两个参数: name 跟 component。
          // （注意这里填什么参数纯粹是自定义的，因为这个参数也是你自己发自己收，自己在renderScene方法中处理。
          // 我们这里示例用了两个参数，但其实真正使用的参数只有component）
       

          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          // 这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
         

          renderScene={(route, navigator) => {
            let Component = route.component;
            // 此处的 Component 是initialRoute传过来的组件 FirstPageComponent
            return <Component {...route.params} navigator={navigator} />
            // 返回的是默认第一个初始化的组件 FirstPageComponent  
            // FirstPageComponent 组件中可以使用 this.props.navigator使用navigator的push pop jump...等方法，用于页面跳转
          }} />
          
          // 回调里的两个参数:route, navigator。
          // =====通过打印我们发现route里其实就是我们传递的name,component这两个货，
          // =====navigator是一个Navigator的对象，
          // 为什么呢，因为它有push pop jump...等方法，这是我们等下用来跳转页面用的那个navigator对象。 
        );
    }
} 



*/



