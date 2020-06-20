<template>
 
  <div class="container">
     <b-button v-b-modal.modal-prevent-closing>+ New Building Project</b-button>
<b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Create New project"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Building Name"
          label-for="name-input"
          invalid-feedback="Project Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="buildingName"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
         <b-form-group
          :state="nameState"
          label="Building Description"
          label-for="name-input"
          invalid-feedback="Project Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="buildingDescription"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
   
    
    <div class="row">
      <div class="col">
        <h4 class="my-3">Building Project Sites</h4>
      </div>
    </div>
  <div class="row">
   
      <div v-bind:key="project.id" v-for="project in allProjects">
          
      <Project v-bind:project="project"/>
    
    </div>
  </div>
  
  </div>

</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Project from "./Project";

export default {
  name: "Dashboard",

  components: {
    Project
  },

  methods: {
    ...mapActions(["fetchProjects", "addProject"]),
    launchModel() {
      console.log("clicked");
    },
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
      const project = {
        buildingName: this.buildingName,
        buildingDescription: this.buildingDescription
      };
      this.addProject(project);

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    }
  },
  computed: mapGetters(["allProjects"]),
  created() {
    this.fetchProjects();
  },
  data() {
    return {
      name: "",
      buildingDescription: "",
      buildingName: "",
      nameState: null,
      submittedNames: []
    };
  }
};
</script>
<style scoped>
</style>

