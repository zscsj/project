import React, { Component, Fragment } from "react";
import { Text, View, Button, } from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
@connect((state) => ({
	userName: state.test.userName,
	passWord: state.test.passWord
}))
class Login extends React.PureComponent {

	login = () => {
		const { navigation, userName, passWord } = this.props;
		if (userName === "Admin" && passWord === "123456") {
			navigation.navigate("Home");
		}
		else {
			alert("登录失败！")
		}
	}
	handleChangeUsername = val => {
		const { dispatch } = this.props;
		dispatch({
			type: "test/handleChangeUsername",
			payload: { userName: val }
		});
	};
	handleChangePassword = val => {
		const { dispatch } = this.props;
		dispatch({
			type: "test/handleChangePassword",
			payload: { passWord: val }
		});
	};
	render() {
		const { userName, passWord } = this.props;
		return (
			<View style={{ flex: 1, flexDirection: 'column', }}>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
					<Text style={{ fontSize: 30 }}>您好！请登录</Text>
					<TextInput placeholder="请输入用户名：" value={userName} onChangeText={this.handleChangeUsername} />
					<TextInput placeholder="请输入密码" secureTextEntry={true} value={passWord} onChangeText={this.handleChangePassword} />
					<Button title={"登录"} onPress={this.login}></Button>
				</View>
			</View>
		);
	}
}

export default Login;
