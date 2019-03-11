import React, { Component, Fragment } from "react";
import { Text, View, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
@connect((state) => ({
	nameList: state.test.nameList
}))

class Home extends React.PureComponent {
	add = () => {
		const { navigation } = this.props;
		navigation.navigate("Add");
	}
	delete = () => {
		const { navigation } = this.props;
		navigation.navigate("Delete");
	}
	update = () => {
		const { navigation } = this.props;
		navigation.navigate("Update");
	}
	render() {
		const { nameList } = this.props;
		console.log("props", nameList)
		// console.log("nameList", nameList[0].name)
		return (
			<View style={{ flex: 1, flexDirection: "column" }}>
				<FlatList
					data={nameList}
					renderItem={(data) => <View style={{ flex: 1 }}>
						<Text style={{ lineHeight: 50, fontSize: 20 }} >{data.item.name}
						</Text>
					</View>}
				/>
				<Button title="添加" onPress={this.add}></Button>
				<Button title="删除" onPress={this.delete}></Button>
			</View>
		)
	}
}

export default Home;
