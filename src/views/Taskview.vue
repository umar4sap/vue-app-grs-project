<template>
    <div class="container">
    <b-button v-b-modal.modal-prevent-closing>+ Add New Task</b-button>
<b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Create and Assign Task"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Task Name(Category)"
          label-for="task-name-input"
          invalid-feedback="Task Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="taskName"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
         <b-form-group
          :state="nameState"
          label="Task Description"
          label-for="Task-Description-input"
          invalid-feedback="Task description is required"
        >
          <b-form-input
            id="name-input"
            v-model="taskDescription"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
         <b-form-group
          :state="nameState"
          label="assigned To"
          label-for="assigned-to-input"
          invalid-feedback="assignee Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="assignedTo"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <div class="row">
      <div class="col">
        <h4 class="my-3">Task Details</h4>
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
         <tr v-if='allTasks.length==0'>there are no tasks</tr>
    <tr  v-bind:key="task.taskId" v-for="task in allTasks">
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Taskview",
  components: {},
  props: ["tasks"],
  methods: {
    ...mapActions(["fetchTasks", "addTask"]),
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.buildingDescription = "";
      this.buildingName = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      const task = {
        taskName: this.taskName,
        taskDescription: this.taskDescription,
        assignedTo: this.taskDescription,
        status: "todo"
      };
      this.addTask(task);

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    }
  },
  computed: mapGetters(["allTasks"]),
  created() {
    this.id = this.$route.params.projectId;
    const getTasks = {
      projectId: this.id
    };
    this.fetchTasks(getTasks);
  },
  data() {
    return {
      name: "",
      taskName: "",
      taskDescription: "",
      assignedTo: "",
      nameState: null,
      submittedNames: []
    };
  }
};
</script>