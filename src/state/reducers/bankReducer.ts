const reducer =  (state, action) => {
switch (action.type) {
    case "depsit" :
        return state + action.payload
}
}