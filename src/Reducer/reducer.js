const initState = {
    addedItems: [],
    allCost: 0,
    piece:0,

}
const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_Item':
            return {
                ...state,
                addedItems: [...state.addedItems, action.payload],
            }
        case 'TotalCost':
            return {
                ...state,
                allCost: state.allCost += action.payload
            }
        case 'TotalPiece':
            return {
                ...state,
                piece: state.piece += action.payload
            }
                default:
            return state
    }
};
export default CartReducer;