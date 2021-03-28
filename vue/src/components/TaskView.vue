<template>
  <div><br/>
    <span v-if="(typeItems && typeItems.length >0) || moduleType=='Task'">
    <div class="sp-type">
      <div class="sp-type__header sp-component-title">
        <h3>{{moduleType}}</h3>
        <span>|</span>
        <span v-if="moduleType==='Completion'">Log task completion</span>
        <span v-if="moduleType==='Task'">Create new task</span>
      </div>

      <div class="sp-type__holder">
        <div class="sp-type-form__holder">
          <TaskForm
              :modulePath="modulePath"
              :moduleType="moduleType"
              action="create"
              class="sp-type__create"
          />
        </div>
        <SpTypeList
            :modulePath="modulePath"
            :moduleType="moduleType"
            class="sp-type__list"
        />
      </div>
    </div>
    </span>
  </div>
</template>

<script>
import SpTypeList from '../../node_modules/@starport/vue/src/components/SpTypeList'
//import SpTypeForm from '../../node_modules/@starport/vue/src/components/SpTypeForm'
import TaskForm from '../components/TaskForm'
export default {
  name: 'TaskView',
  components: {
    SpTypeList,
    TaskForm
  },
  props: {
    modulePath: {
      type: String,
      default: '',
      required: true
    },
    moduleType: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
