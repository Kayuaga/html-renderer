import keyMirror from "../../utils/keyMirror";


export const actions  = keyMirror({
    GET_TAB: null,
}, 'tab')

export const getTabActionCreator  = () => ({ type: actions.GET_TAB })
