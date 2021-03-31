<template>
  <div class="sp-type-list" v-if="depsLoaded">
    <div class="sp-type-list__main sp-box">
      <div class="sp-type-list__header sp-box-header">
        TASKS&nbsp;&nbsp;&nbsp;&nbsp;
        <span style="color:green">{{this.editSuccessMsg}}</span>
      </div>
      <div class="SpTypeListEmpty" v-if="!taskListItems || taskListItems.length == 0">
        <em>No items available</em>
      </div>
      <template v-else>
        <div v-for="(item, index) in taskListItems" v-bind:key="item.id">
          <div class="sp-dashed-line" v-if="index != 0" />
          <div class="sp-type-list__item">
            <div class="sp-type-list__item__icon">
              <div class="sp-icon sp-icon-Docs" />
            </div>
            <div class="sp-type-list__item__details">
              <details>
                <summary
                  v-on:click="; (completionListID = item['id']), this.openCloseCompletionList()"
                >{{item[fieldList[2]["name"]]}}</summary>
                <div
                    class="sp-type-list__item__details__field"
                    v-for="field in fieldList"
                    v-bind:key="field"
                >
                  <strong> {{ capitalize(field.name) }} </strong><br />
                  {{ item[field.name] }}
                </div>
                <!-- here needed, check that the task is open -->
                <div class="sp-type-form__message" v-if="!address">
                  Add or unlock a wallet to create a Completion
                </div>
                <sp-button :disabled="!address"
                    class="sp-type-list__item__options__edit"
                    v-on:click=";(completeID = item['id']), (completeOpen = true), logg(item['id'])"
                >Complete</sp-button>
                </details>
              </div>
            <div
                class="sp-type-list__item__more"
                :class="{ 'sp-type-list__item__more__open': moreOpen == index }"
                v-if="item[fieldList[0]['name']]===this.address"
            >
              <div class="sp-icon sp-icon-More" v-on:click="moreOpen = index" />
              <div
                  class="sp-type-list__item__options sp-box"
                  v-if="moreOpen == index"
              >
                <div
                    class="sp-type-list__item__options__edit"
                    v-on:click=";(editID = item['id']), (editOpen = true)"
                >
                  Edit
                </div>
                <div
                    class="sp-type-list__item__options__delete"
                    v-on:click=";(deleteID = item['id']), (deleteOpen = true)"
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div v-if="completionListOpen">
      <CompletionList
          :modulePath="modulePath"
          :compTaskId="completionListID"
          v-if="completionListID >=0"
        />
      <span v-if="completionListID <0">no completionlistid</span>
    </div>
    <div class="sp-type-list__edit__overlay" v-if="editOpen || deleteOpen ||completeOpen" v-on:click="editOpen=false,deleteOpen=false,completeOpen=false" />
    <div class="sp-type-list__edit__form" v-if="editID >= 0">
      <TaskForm
          :modulePath="modulePath"
          :id="editID"
          action="update"
          v-on:cancel-update=";(editID = -1), (editOpen = false)"
          v-on:updated=";(editID = -1), (editOpen = false), this.showSuccessMsg(1)"
      />
    </div>
    <div class="sp-type-list__delete__form" v-if="deleteID >= 0">
      <TaskForm
          :modulePath="modulePath"
          :id="deleteID"
          action="delete"
          v-on:cancel-delete=";(deleteID = -1), (deleteOpen = false)"
          v-on:deleted=";(deleteID = -1), (deleteOpen = false), this.showSuccessMsg(2)"
      />
    </div>
    <div class="sp-type-list__edit__form" v-if="completeID >= 0">
        <CompletionForm
            :modulePath="modulePath"
            :creatorId="address"
            :taskId="completeID"
            action="create"
            v-on:cancel-completion=";(completeID = -1), (completeOpen = false)"
            v-on:completed=";(completeID = -1), (completeOpen = false), this.showSuccessMsg(3)"
        />
    </div>
  </div>
</template>
<script>
import TaskForm from '../components/TaskForm'
import CompletionForm from '../components/CompletionForm'
import CompletionList from '../components/CompletionList'

export default {
  name: 'TaskList',
  components: {
    TaskForm,
    CompletionForm,
    CompletionList
  },
  props: {
    modulePath: {
      type: String,
      default: ''
    },
  },
  data: function () {
    return {
      fieldList: [],
      moreOpen: -1,
      editOpen: false,
      deleteOpen: false,
      completeOpen: false,
      editID: -1,
      deleteID: -1,
      completeID: -1,
      editSuccessMsg: "",
      intervalId: -1,
      completionListOpen: false,
      completionListID: -1
    }
  },
  computed: {
    address() {
      return this.$store.getters['common/wallet/address']
    },
    taskListItems() {
      if (this._depsLoaded) {
        let items = this.$store.getters[
        this.modulePath + '/getTaskAll'
            ]({ params: {} })
        return items ? items[this.capitalize('Task')] : []
      } else {
        return []
      }
    },
    depsLoaded() {
      return this._depsLoaded
    }
  },
  beforeCreate() {
    const module = [...this.modulePath.split('/')]
    for (let i = 1; i <= module.length; i++) {
      let submod = module.slice(0, i)
      if (!this.$store.hasModule(submod)) {
        console.log('Module ' + this.modulePath + ' has not been registered!')
        this._depsLoaded = false
        break
      }
    }
  },
  async created() {
    if (this._depsLoaded) {
      this.fieldList = this.$store.getters[
      this.modulePath + '/getTypeStructure'
          ]('Task')
      await this.$store.dispatch(
          this.modulePath + '/QueryTaskAll',
          { options: { subscribe: true } }
      )
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    showSuccessMsg(task){
      let taskStr = ""
      if(task==1){
        taskStr = "Update"
      }else if(task=2){
        taskStr = "Delete"
      }else{
        taskStr ="Completion"
      }
      this.editSuccessMsg = taskStr+" successful!"
      this.intervalId = setInterval(this.hideEditSuccessMsg, 5000)
    },
    hideEditSuccessMsg(){
      console.log("hideSuccessMsg")
      this.editSuccessMsg = ""
      clearInterval(this.intervalId)
    },
    openCloseCompletionList(){
      if(this.completionListOpen){
        this.completionListOpen = false
      }else{
        this.completionListOpen = true
      }
    },
    logg(id){
      console.log(id)
    }

  }
}
</script>
