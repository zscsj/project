import React, { Component, Fragment } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
@connect((state) => ({
    addText: state.test.addText,
    nameList: state.test.nameList
}))

class Add extends React.PureComponent {
    handleChangeName = val => {
        const { dispatch } = this.props;
        dispatch({
            type: "test/handleChangeName",
            payload: { addText: val }
        });
        //   console.log("name",nameList[0].name)
    };
    confirmAdding = () => {
        const { nameList, addText, navigation } = this.props;
        nameList.push({
            id: nameList.length + 1,
            name: addText
        })
        navigation.navigate("Home");
    }
    render() {
        const { addText } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                    <Text style={{ fontSize: 30 }}>添加人员信息</Text>
                    <TextInput placeholder="请输入姓名" value={addText} onChangeText={this.handleChangeName} />
                    <Button title="确定添加" onPress={this.confirmAdding}></Button>
                </View>
            </View>
        )
    }
}

export default Add;
