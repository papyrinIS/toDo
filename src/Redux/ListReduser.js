const DELETE_LIST="DELETE_LIST"


let initState={
    "lists": [

    ]
}


const ListReduser = (state=initState,action)=> {
    switch (action.type) {
        case DELETE_LIST:{
            return{
                ...state,
                lists: [ ...state.lists, ...action.id]
            }
        }
        default:
            return state

    }

}

export const deleteList=(id)=>({type:DELETE_LIST, id})


export default ListReduser;