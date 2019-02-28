
// function to enables passing an object with the action.type as the key and reducer functoin as the value
//action.typeをkeyとして受け取り、reducer functionをvalueとして受け取る機能がcreateReducer()?
export const createReducer = (initailState = {}, actionHandlerKeyFuncs = {})=> {
    return (state = initailState, action) =>{
        const actionHandler = actionHandlerKeyFuncs[action.type];
        return actionHandler ? actionHandler(state, action) : state;
    }
};


// creates a basic action
// 基本的なactionのテンプレートを作る
const createAction = (type, actionProps) => {
    return {
        type,
        ...actionProps
    };
}

export const createAsyncActionCreator = (actionType, asyncRequestFn, requestParams) => {
    return (dispatch) => {
        dispatch(createAction(`${actionType}_START`, {request: requestParams}));

        return asyncRequestFn(requestParams)
            .then(response => {
                response.json()
                    .then(json => dispatch(createAction(`${actionType}_SUCCESS`, {response: json})))
                    .catch(error => dispatch(createAction(`${actionType}_ERROR`, {error})));
            });
    }
}

const initailAsyncState = { isLoading: false, resonse: null, request: null};

export const createAsyncReducer = (actionType, actionHandlerKeyFuncs = {}, initailState = initailAsyncState) =>{
    const startReducerFn = (state, action) => ({
        ...state,
        inLoading: true,
        request: action.request
    });

    const successReducerFn = (state, action) =>({
        ...state,
        isLoading: false,
        request: action.response
    });

    const errorReducerFn = (state, action) => ({
        ...state,
        isLoading: false,
        request: action.error
    })

    return createReducer(
        initailState,
        {
            [`${actionType}_START`]: startReducerFn,
            [`${actionType}_SUCCESS`]: successReducerFn,
            [`${actionType}_ERROR`]: errorReducerFn,
            ...actionHandlerKeyFuncs
        }
    );
}
