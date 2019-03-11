import React, { Component } from "react";
import Platform from "Platform";
import { PixelRatio, View, Text, Image, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ifIphoneX } from "react-native-iphone-x-helper";
import tabBarOptions from "./config/tab.config";
import navigationOptions from "./config/nav.config";
import Login from "../containers/Login/Login";
import Home from "../containers/Home/index";
import Add from "../containers/Add/add";
import Delete from "../containers/Delete/delete";

const MainRouter = createStackNavigator(
	{
		Login: {
			screen: Login,
			navigationOptions: {
				headerMode: "none",
				header: null,
			},
		},
		Home: {
			screen: Home,
			navigationOptions: {
				headerMode: "none",
				header: null,
			},
		},
		Add: {
			screen: Add,
			navigationOptions: {
				headerMode: "none",
				header: null,
			},
		},
		Delete: {
			screen: Delete,
			navigationOptions: {
				headerMode: "none",
				header: null,
			},
		},
	},

	{
		navigationOptions,
		headerMode: "screen",
		//	gesturesEnabled: true,
		initialRouteName: "Login",
	},
);
const Url = createAppContainer(MainRouter);

export default Url;
// export default MainRouter;
