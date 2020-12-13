interface GlobalState {
	count: number
}

interface ReducerAction {
	type: string
	value: any
}

interface ContextProps {
	state: GlobalState
	dispatch: Dispatch<ReducerAction>
}