import React from 'react'

type StateType = {

}
type ActionType = {
    type: string
}

const initialState = {

}

const AuthReducer = (state: StateType = initialState, action: ActionType) => {
    switch(action.type){
        default:
            return state
    }
}

export default AuthReducer