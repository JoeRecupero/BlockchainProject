<template>
  <div><br/>
    <div class="sp-type">
      <div class="sp-type__header sp-component-title">
        <h3>TASK</h3>
        <span>| Create new task</span>
      </div>
      <div class="sp-type__holder">
        <div class="sp-type-form__holder">
          <TaskForm
              :modulePath="modulePath"
              action="create"
              class="sp-type__create"
          />
        </div>
        <TaskList
            :modulePath="modulePath"
            class="sp-type__list"
        />
      </div>
    </div>
   </div>
</template>

<script>
//import SpTypeList from '../../node_modules/@starport/vue/src/components/SpTypeList'
//import SpTypeForm from '../../node_modules/@starport/vue/src/components/SpTypeForm'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'

export default {
  name: 'TaskView',
  components: {
    TaskList,
    TaskForm,
  },
  props: {
    modulePath: {
      type: String,
      default: '',
      required: true
    },
  },
}
</script>
