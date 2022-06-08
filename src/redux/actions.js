import axios from 'axios'
export const GET_TEXT = 'GET_TEXT'


export function getText(iecho){
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://copywriteback.herokuapp.com/?iecho=${iecho ? iecho : ''}`)
            return dispatch({
                type: GET_TEXT,
                payload: response.data
            })
        } catch (err){
            console.log(err)
            return dispatch({
                type: GET_TEXT,
                payload: {"error": "no text"}
                })
        }
    }
}