<template>
  <div>
    <div class="container">
      <!-- this line is used by starport scaffolding # 4 -->
      <TaskView modulePath="blockchaingroup2.helpinghand.helpinghand" moduleType="Completion"  />
      <TaskView modulePath="blockchaingroup2.helpinghand.helpinghand" moduleType="Task"  />
    </div>
  </div>
</template>

<script>
import TaskView from '../components/TaskView'
export default {
  name: 'Types',
  components: {TaskView}
}
</script>

