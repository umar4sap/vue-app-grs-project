<template>
<div class="card">
  
        <div class="card w-100 board-item grc-card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title flex-nowrap">{{project.buildingName}}</h5>
              <span @click="handleProjectBoardEditing(board)">...</span>
            </div>
                  
                                                <h6 class="dp-h">{{project.buildingDescription}}</h6>
                                                <hr class="mt-1">
                                                <div class="d-flex align-items-cetner justify-content-between small mb-1">
                                                    <div class="font-weight-bold">Todo Tasks</div>
                                                    <div class="small">25%</div>
                                                </div>
                                               
                                                <div class="progress mb-3"><div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>
                                                <div class="d-flex align-items-cetner justify-content-between small mb-1">
                                                    <div class="font-weight-bold">In progress</div>
                                                    <div class="small">50%</div>
                                                </div>
                                                <div class="progress mb-3"><div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>
                                                <div class="d-flex align-items-cetner justify-content-between small mb-1">
                                                    <div class="font-weight-bold">Completed</div>
                                                    <div class="small">25%</div>
                                                </div>
                                                <div class="progress mb-3"><div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div></div>
                                                <div class="text-right">
                                                   <router-link :to="{ name: 'task', params: { projectId:project.projectId} }"  class="btn btn-primary btn-sm d-btn" href="javascript:void(0);">Visit Project Center<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></router-link>
                                                </div>
           
      
          
          </div>
        </div>
      </div>


  
    
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Project",
  props: ["project"],
  methods: {
    ...mapActions(["removeProject", "updateProject"]),
    markComplete() {
      const updatedProject = {
        projectId: this.project.projectId,
        projectName: this.project.projectName,
        status: !this.project.status ? "completed" : "todo"
      };
      this.updateProject(updatedProject);
    },
    deleteProject() {
      this.removeProject(this.project);
    }
  }
};
</script>

<style scoped>
.grc-card {
  margin-left: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.dn-btn {
  background: #ff3f3f;
  color: blanchedalmond;
  border: transparent;
}

a.d-btn {
  background: #828283;
  color: blanchedalmond;
  padding: 6px 20px;
  border: transparent;
}
h4.my-3 {
  border-left: 3px solid #000;
  padding-left: 7px;
}

h6.dp-h {
  color: #f92528;
  font-weight: bold;
}
.card {
  margin: 10px;
}
.card:hover {
  background: #c8c8ce;
  color: blanchedalmond;
}
</style>