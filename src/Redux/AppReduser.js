import {listAPI, subTaskAPI, taskAPI} from "../Components/API/api";

const ADD_NEW_LIST="ADD_NEW_LIST";
const SET_LISTS="SET_LISTS";
const DELETE_LIST="DELETE_LIST";
const EDIT_NAME_LIST="EDIT_NAME_LIST";

const SET_TASKS="SET_TASKS";
const ADD_NEW_TASK="ADD_NEW_TASK";
const DELETE_TASK="DELETE_TASK";
const EDIT_NAME_TASK="EDIT_NAME_TASK";

const SET_DESCRIPTION = "SET_DESCRIPTION";
const EDIT_DESCRIPTION="EDIT_DESCRIPTION";

const SET_SUBTASK="SET_SUBTASK";
const ADD_NEW_SUBTASK="ADD_NEW_SUBTASK";
const DELETE_SUBTASK="DELETE_SUBTASK"
const UPDATE_CHECK="UPDATE_CHECK"



let initState={
    "lists": [],
    "tasks":[],
    "subTask":[]
}


const AppReduser = (state=initState,action)=> {
    switch (action.type) {
        case ADD_NEW_LIST:{
            return{
                ...state,
                lists:[ ...state.lists, { name: action.name}]

            }
        }
        case SET_LISTS:{
            return{
                ...state,
                lists: [...action.lists]
            }
        }
        case DELETE_LIST:{

            return{
                ...state,
                lists: [  ...action.Id]
            }
        }
        case EDIT_NAME_LIST:{
            return{
                ...state,
                lists:[...state.lists]
            }
        }

        case SET_TASKS:{
            return{
                ...state,
                tasks: [...action.tasks]
            }
        }
        case ADD_NEW_TASK:{
            return{
                ...state,
                tasks:[ ...state.tasks,
                    {
                    listId:action.listId,
                    text:action.text
                    }
                    ]
            }
        }
        case DELETE_TASK:{
            return{
                ...state,
                tasks: [  ...action.Id]
            }
        }
        case EDIT_NAME_TASK:{
            return{
                ...state,
                tasks:[...state.tasks]
            }
        }

        case EDIT_DESCRIPTION:{
            return{
                ...state,
                tasks:[...state.tasks]
            }
        }


        case SET_SUBTASK:{
            return{
                ...state,
                subTask:[...action.subTask]
            }
        }
        case ADD_NEW_SUBTASK:{
            return{
                ...state,
                subTask:[
                    ...state.subTask,
                    {
                        taskId:action.taskId,
                        check:action.newSubTask,
                        complete:false
                    }
                ]
            }
        }
        case DELETE_SUBTASK:{
            return{
                ...state,
                subTask:[...action.id]
            }
        }
        case UPDATE_CHECK: {
            return{
              ...state,
              subTask:[...state.subTask]
            }
        }
        default:
            return state

    }

}

export const addNewList=(name) => ({type:ADD_NEW_LIST, name})
export const setLists=(lists)=>({type:SET_LISTS,lists})
export const deleteList=(Id)=>({type:DELETE_LIST, Id})
export const editNameList =()=>({type:EDIT_NAME_LIST})

export const setTasks=(tasks)=>({type:SET_TASKS,tasks})
export const addNewTask = (text, listId) => ({type:ADD_NEW_TASK,text, listId})
export const deleteTask=(Id)=>({type:DELETE_TASK, Id})
export const editNameTask =()=>({type:EDIT_NAME_TASK})


export const setTask = (task,TaskId) => ({type:SET_DESCRIPTION,task,TaskId})
export const editDescription=()=>({type:EDIT_DESCRIPTION})

export const setSubTask=(subTask)=>({type:SET_SUBTASK, subTask})
export const addNewSubTask =(taskId, newSubTask)=>({type:ADD_NEW_SUBTASK, taskId, newSubTask})
export const deleteSubTask=(id)=>({type:DELETE_SUBTASK, id})
export const updateCheck=()=>({type:UPDATE_CHECK})



export const setListsThunkCreator = () => async (dispatch) => {
    let data =await listAPI.getLists();
        dispatch(setLists(data))
}
export const setTasksThunkCreator = () => async (dispatch) => {
    let data = await taskAPI.getTasks();
        dispatch(setTasks(data))
}
export const addListThunkCreator = (name) => async (dispatch) => {
   let data = await listAPI.addList(name);
        dispatch(addNewList(data.name))

}
export const addTaskThunkCreator = (id, text) => async (dispatch) => {
    let data = await taskAPI.addTask(id,text);
        dispatch(addNewTask(data.text,id))
}
export const deleteListThunkCreator = (Id, newList) => async (dispatch) => {
    await listAPI.deleteListAPI(Id);
        dispatch(deleteList(newList.filter(i => i.id !== Id)));
}
export const deleteTaskThunkCreator = (Id, newTask) => async (dispatch) => {
       await taskAPI.deleteTaskAPI(Id);
        dispatch(deleteTask(newTask.filter(i => i.id !== Id)));

}
export const updateNameListThunkCreator =(id, listName)=> async (dispatch)=>{
    let data = await listAPI.updateNameList(id, listName);
       dispatch(editNameList(data))
}
export const updateNameTaskThunkCreator =(id, taskName)=> async (dispatch)=>{
    let data = await taskAPI.updateNameTask(id, taskName);
       dispatch(editNameTask(data))
}
export const updateDescriptionThunkCreator =(id, Description)=> async (dispatch)=>{
    let data= await taskAPI.updateDescription(id, Description);
        dispatch(editDescription(data))
}
export const setSubTaskThunkCreator = () =>async (dispatch) => {
    let data = await subTaskAPI.setSubTask();
        dispatch(setSubTask(data));
}
export const addNewSubTaskThunkCreator =(taskId,newSubTask)=> async (dispatch)=>{
    let data = await subTaskAPI.addNewSubTask(taskId,newSubTask);
        dispatch(addNewSubTask(data.subTask,taskId))
}
export const deleteSubTaskThunkCreator=(id,subtask)=> async (dispatch)=>{
    await subTaskAPI.deleteNewSubTask(id);
        dispatch(deleteSubTask(subtask.filter(i=>i.id !==id)))
}
export const updateCheckThunkCreator = (id,complete)=> async (dispatch)=> {
    let data= await subTaskAPI.updateCheck(id,complete);
        dispatch(updateCheck(data));
}


export default AppReduser;