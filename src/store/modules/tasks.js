// Tasks module
import axios from 'axios';

const resource_uri = "http://localhost:8080/grs/apis/v1/tasks/";
const project_resource_uri = "http://localhost:8080/grs/apis/v1/tasks/project/";

const state = {
    tasks: []
};

const getters = {
    allTasks: state => state.tasks
};
const header= {"Access-Control-Allow-Origin ":'*'};
const actions = {
    
    async fetchTasks({ commit}, getTasks) {
        console.log(getTasks)
        const response = await axios.get(`${project_resource_uri}${getTasks.projectId}`,header);    
        commit('setTasks', response.data);
    },
    async addTask( { commit }, task) {
        const response = await axios.post(resource_uri,task,header );
        commit('newTask', response.data);
    },
    async updateTask( { commit }, task) {
        const response = await axios.put(`${resource_uri}${task.taskId}`,task,header);
        commit('updTask', response.data);
    }
    // async removeTask( { commit }, task) {
    //     const response = await axios.delete(`${resource_uri}${task.id}`);
    //     commit('deleteTask', task);
    // }
};

const mutations = {
    setTasks: (state, tasks) => state.tasks = tasks,
    newTask: (state, task) => state.tasks.unshift(task),
    updTask: (state, updatedTask) => {
        const index = state.tasks.findIndex(t => t.id === updatedTask.id);
        if(index !== -1) {
            state.tasks.splice(index, 1, updatedTask);
        }        
    },
    deleteTask: (state, task) => state.tasks = state.tasks.filter(t => task.id !== t.id),
};

export default {
    state, getters, actions, mutations
}