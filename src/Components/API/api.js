import axios from "axios";


const instance =axios.create({
    baseURL:`http://localhost:3008/`
})

export const listAPI = {
     getLists(){
        return instance.get(`lists`).then(response => {
            return response.data
        });
    },

    addList(name){
        return instance.post(`lists/`,{name:name}).then(response =>{
            console.log(response.data);
            return response.data;

        })
    },

    deleteListAPI(Id){
        return instance.delete(`lists/` + Id).then(response => {
            return response.data;
        })
    },
    updateNameList(listName, id){
         return instance.patch(`lists/`+id,{name:listName}).then(response=>{
         return response.data})
    }

}


export const taskAPI = {
   getTasks() {
        return  instance.get(`tasks`).then(response => {
            return response.data;
        });
    },

   addTask(id, text) {
        return instance.post(`tasks/`, {listId:id, text:text}).then(response => {
            return response.data;
        })
    },

    deleteTaskAPI(Id){
        return instance.delete(`tasks/`+Id).then(response => {
            return response.data;
        })
    },

    updateNameTask(taskName, id){
        return instance.patch(`tasks/`+id,{text:taskName}).then(response=>{
            return response.data})
    },
    updateDescription(id, Description){
        return instance.patch(`tasks/`+id,{description:Description})
    }

}

export const subTaskAPI = {
    setSubTask(){
        return instance.get(`subTask`).then(response=>{
            return response.data
        });
    },
    addNewSubTask(taskId,newSubTask){
        return instance.post(`subTask/`,{taskId:taskId,check:newSubTask,complete:false}).then(response=>{
            return response.data;
        })
    },
    deleteNewSubTask(id){
        return instance.delete(`subTask/`+id).then(response=>{
            return response.data;
        });
    },
    updateCheck(id, complete){
        return instance.patch(`subTask/`+id,{complete:complete})
    }


}











