import Vuex from 'vuex';
import Vue from 'vue';
import tasks from './modules/tasks';
import projects from './modules/projects';
import asignees from './modules/assignee';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tasks,
        projects,
        asignees
    }
});