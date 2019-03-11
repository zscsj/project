import React, { Component, Fragment } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
@connect((state) => ({
    deleteText: state.test.deleteText,
    nameList: state.test.nameList
}))

class Delete extends React.PureComponent {
    handleChangeId = val => {
        const { dispatch } = this.props;
        dispatch({
            type: "test/handleChangeId",
            payload: { deleteText: val }
        });
    };
    handleRemoveItem = () => {
        const { navigation, nameList, dispatch, deleteText } = this.props;
        const List = nameList.filter(item => item.id != deleteText);
        dispatch({
            type: "test/handleRemoveItem",
            payload: { nameList: List }
        });
        navigation.navigate("Home");
    }

    render() {
        const { deleteText } = this.props
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                    <Text style={{ fontSize: 30 }}>删除人员信息</Text>
                    <TextInput placeholder="请输入id" value={deleteText} onChangeText={this.handleChangeId} />
                    <Button title="确定删除" onPress={this.handleRemoveItem}></Button>
                </View>
            </View>
        )
    }
}

export default Delete;
