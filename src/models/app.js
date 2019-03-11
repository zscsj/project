import Login from "../containers/Login/Login";
export default {
	namespace: "test",
	state: {
		userName: "",
		passWord: "",
		addText: "",
		deleteText: "",
		nameList: [
			{
				id: 1,
				name: "易烊千玺"
			},
			{
				id: 2,
				name: "王源"
			},
			{
				id: 3,
				name: "王俊凯"
			},
			{
				id: 4,
				name: "潘思言"
			},
			{
				id: 5,
				name: "李安逸"
			},
		]
	},
	reducers: {
		setState(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	},
	effects: {
		*handleChangeUsername({ payload }, { put }) {
			yield put({
				type: 'setState',
				payload: {
					userName: payload.userName
				}
			})
		},
		*handleChangePassword({ payload }, { put }) {
			yield put({
				type: 'setState',
				payload: {
					passWord: payload.passWord
				}
			})
		},
		*handleChangeName({ payload }, { put }) {
			yield put({
				type: 'setState',
				payload: {
					addText: payload.addText
				}
			})
		},
		*handleChangeId({ payload }, { put }) {
			yield put({
				type: 'setState',
				payload: {
					deleteText: payload.deleteText
				}
			})
		},
		*handleRemoveItem({ payload }, { put }) {
			console.log("delete", payload)
			yield put({
				type: 'setState',
				payload: {
					nameList: payload.nameList
				}
			})
		}
	}
};
