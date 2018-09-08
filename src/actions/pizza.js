
const CHANGE_BASE =  'CHANGE_BASE'
const CHANGE_SAUCE =  'CHANGE_SAUCE'


function ChosenBase(select_base, price) {
    return {
        type: CHANGE_BASE, 
        payload: { 
            select_base,
            price 
        }
    }
}

function ChosenSauce(select_sauce, price) {
    return {
        type: CHANGE_SAUCE, 
        payload: { 
            select_sauce,
            price 
        }
    }
}

export default { ChosenBase, ChosenSauce }