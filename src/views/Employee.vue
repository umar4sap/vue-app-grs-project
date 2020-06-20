<template>
    <div class="container">
   <b-button v-b-modal.my-modal class="dn-btn">+ Add New Task</b-button>
    <div class="row">
      <div class="col">
        <h4 class="my-3">Task Details of {{this.id}}</h4>
      </div>
    </div>
    <div class="d-table">
      <div class="row">
         <div class="col-12">
            <table class="table table-striped table-inverse">
  <thead>
    <tr>
      <th>Task Id</th>
      <th>Task Category</th>
      <th>Task Description</th>
       <th>Assigned To</th>
      <th>Status</th>
       <th>Status Updated</th>
    </tr>
  </thead>
  <tbody>
      <tr v-if=!allAssignees>there are tasks</tr>
    <tr  v-bind:key="task.taskId" v-for="task in allAssignees">
      <th scope="row">{{task.taskId}}</th>
      <th >{{task.taskName}}</th>
      <td>{{task.taskDescription}}</td>
       <td> <router-link :to="{ name: 'employee', params: { employeeId:task.assignedTo} }">{{task.assignedTo}}</router-link></td>
        <td>{{task.status}}</td>
   <td>{{task.lastStatusUpdated}}</td>
    </tr>
   
  </tbody>
</table>
<div class="dtb-next">
  <b-button-toolbar key-nav aria-label="Toolbar with button groups">
    <b-button-group class="mx-1">
     <b-button>&lsaquo;</b-button>
      <b-button>&rsaquo;</b-button>
    </b-button-group>
  </b-button-toolbar>
</div>
         </div>


      </div>
    </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

import router from '../router'

export default {
 name: 'Taskview',
components: {
   
  },
  props: ["assignees"],
  methods: {
    ...mapActions(['fetchAssignees']),
    navigate() {
                router.go(-1);
            }
  },
  computed: mapGetters(['allAssignees']),
        created() {
          this.id=this.$route.params.employeeId;

           this.fetchAssignees(this.id)
            
        },
     
    }
</script>