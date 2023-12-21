import { MenuItem } from '@/interfaces/menu.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	value: IServerState;
}

interface IServerState {
	pathNumber: number | null,
	menu: MenuItem[]
}

const initialState = {
	value: {
		pathNumber: null,
		menu: [],
	} as IServerState,
} as InitialState;

export const server = createSlice({
	name: "server",
	initialState,
	reducers: {
		setPath: (state, action: PayloadAction<number | null>) => {
			return {
				value: {
					pathNumber: action.payload,
					menu: state.value.menu
				}
			};
		},
		setMenu: (state, action: PayloadAction<MenuItem[]>) => {
			return {
				value: {
					pathNumber: state.value.pathNumber,
					menu: action.payload
				}
			};
		},
	}
});

export const { setPath, setMenu } = server.actions;
export default server.reducer;
