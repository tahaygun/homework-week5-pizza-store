const CHANGE_BASE =  'CHANGE_BASE'


export default function ChosenBase(select_base, price) {

    return {
        type: CHANGE_BASE, 
        payload: { 
            select_base,
            price 
        }
    }
}