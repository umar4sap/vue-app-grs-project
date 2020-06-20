// Assignees module
import axios from 'axios';

const resource_uri = "http://localhost:8080/grs/apis/v1/employees/";
const assignee_resource_uri = "http://localhost:8080/grs/apis/v1/tasks/employee/";

const state = {
    assignees: []
};

const getters = {
    allAssignees: state => state.assignees
};
const header= {"Access-Control-Allow-Origin ":'*'};
const actions = {
    
    async fetchAssignees({ commit },assigneeId) {
        const response = await axios.get(`${assignee_resource_uri}${assigneeId}`,header);    
        commit('setAssignees', response.data);
    },
    async addAssignee( { commit }, assignee) {
        const response = await axios.post(resource_uri,assignee,header );
        commit('newAssignee', response.data);
    },
    async updateAssignee( { commit }, assignee) {
        const response = await axios.put(`${resource_uri}${assignee.assigneeId}`,assignee,header);
        commit('updAssignee', response.data);
    }
    // async removeAssignee( { commit }, assignee) {
    //     const response = await axios.delete(`${resource_uri}${assignee.id}`);
    //     commit('deleteAssignee', assignee);
    // }
};

const mutations = {
    setAssignees: (state, assignees) => state.assignees = assignees,
    newAssignee: (state, assignee) => state.assignees.unshift(assignee),
    updAssignee: (state, updatedAssignee) => {
        const index = state.assignees.findIndex(t => t.id === updatedAssignee.id);
        if(index !== -1) {
            state.assignees.splice(index, 1, updatedAssignee);
        }        
    },
    deleteAssignee: (state, assignee) => state.assignees = state.assignees.filter(t => assignee.id !== t.id),
};

export default {
    state, getters, actions, mutations
}