<template>
  <div><br/>
    <div class="sp-type">
      <div class="sp-type__header sp-component-title">
        <h3>{{moduleType}}</h3>
        <span>|</span>
        <span v-if="moduleType==='Completion'">Log task completion</span>
        <span v-if="moduleType==='Task'">Create new task</span>
      </div>

      <div class="sp-type__holder">
        <div class="sp-type-form__holder">
          <SpTypeForm
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
  </div>
</template>

<script>
import SpTypeList from '../../node_modules/@starport/vue/src/components/SpTypeList'
import SpTypeForm from '../../node_modules/@starport/vue/src/components/SpTypeForm'
export default {
  name: 'TaskView',
  components: {
    SpTypeList,
    SpTypeForm
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
