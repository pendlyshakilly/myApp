import React from 'react'

type StateType = {

}
type ActionType = {
    type: string
}

const initialState = {

}

const ProfileReducer = (state: StateType = initialState, action: ActionType) => {
    switch(action.type){
        default:
            return state
    }
}

export default ProfileReducer