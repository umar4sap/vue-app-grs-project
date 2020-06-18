<template>
  <div class="container-fluid">
  
      <span class="btn btn-sm  btn-success btn-app mr-2 mb-1">+ New Building</span>
   
    <div class="row">
      <div class="col">
        <h4 class="my-3">Building Project Sites</h4>
      </div>
    </div>
    <div class="row equal">
      <!-- <div class="col-xs-12 col-sm-6 col-md-3 d-flex pb-3" v-for="board in unarchivedBoards" :key="board.id"> -->
         <div class="col-xs-12 col-sm-6 col-md-3 d-flex pb-3" >
        <div class="card w-100 board-item">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title flex-nowrap">F1</h5>
              <span @click="handleTaskBoardEditing(board)">...</span>
            </div>
                  
                                                <h6>Projects</h6>
                                                <hr class="mt-1">
                                                <div class="d-flex align-items-cetner justify-content-between small mb-1">
                                                    <div class="font-weight-bold">Server Setup</div>
                                                    <div class="small">25%</div>
                                                </div>
                                                <div class="progress mb-3"><div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
                                                <div class="d-flex align-items-cetner justify-content-between small mb-1">
                                                    <div class="font-weight-bold">Database Migration</div>
                                                    <div class="small">50%</div>
                                                </div>
                                                <div class="progress mb-3"><div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>
                                                <div class="d-flex align-items-cetner justify-content-between small mb-1">
                                                    <div class="font-weight-bold">Version Release</div>
                                                    <div class="small">75%</div>
                                                </div>
                                                <div class="progress mb-3"><div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>
                                                <div class="d-flex align-items-cetner justify-content-between small mb-1">
                                                    <div class="font-weight-bold">Product Listings</div>
                                                    <div class="small">100%</div>
                                                </div>
                                                <div class="progress mb-4"><div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>
                                                <div class="text-right">
                                                    <a class="btn btn-primary btn-sm" href="javascript:void(0);">Visit Task Center<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                                                </div>
           
      
          
          </div>
        </div>
      </div>


    </div>
  
  </div>
</template>
<script>

export default {
   name: 'Dashboard',
  computed: {
  }
}
</script>


