// projects module
import axios from 'axios';

const resource_uri = "http://localhost:8080/grs/apis/v1/projects/";

const state = {
    projects: []
};

const getters = {
    allProjects: state => state.projects
};
const header= {"Access-Control-Allow-Origin ":'*'};
const actions = {
    
    async fetchProjects({ commit }) {
     
        const response = await axios.get(resource_uri,header);    
        commit('setProjects', response.data);
    },
    async addProject( { commit }, Project) {
        const response = await axios.post(resource_uri,Project,header );
        commit('newProject', response.data);
    },
    async updateProject( { commit }, Project) {
        const response = await axios.put(`${resource_uri}${Project.ProjectId}`,Project,header);
        commit('updProject', response.data);
    }

    // async removeProject( { commit }, Project) {
    //     const response = await axios.delete(`${resource_uri}${Project.id}`);
    //     commit('deleteProject', Project);
    // }
};

const mutations = {
    
    setProjects: (state, projects) => state.projects = projects,
    newProject: (state, project) => state.projects.unshift(project),
    updProject: (state, updatedProject) => {
        const index = state.projects.findIndex(t => t.id === updatedProject.id);
        if(index !== -1) {
            state.projects.splice(index, 1, updatedProject);
        }        
    },
    deleteProject: (state, Project) => state.projects = state.projects.filter(t => Project.id !== t.id),
};

export default {
    state, getters, actions, mutations
}