<template>
  <div class="sp-type-list" v-if="depsLoaded">
    <div class="sp-type-list__main sp-box">
      <div class="sp-type-list__header sp-box-header">
        COMPLETIONS&nbsp;&nbsp;&nbsp;&nbsp;
        <span style="color:green">{{this.editCompSuccessMsg}}</span>
      </div>
      <div class="SpTypeListEmpty" v-if="!completionListItems || completionListItems.length == 0">
        <em>No items available</em>
      </div>
      <template v-else>
        <div v-for="(item, index) in completionListItems" v-bind:key="item.id">
          <div class="sp-dashed-line" v-if="index != 0" />
          <div class="sp-type-list__item">
            <div class="sp-type-list__item__icon">
              <div class="sp-icon sp-icon-Docs" />
            </div>
            <div class="sp-type-list__item__details">
              <details>
              <summary>Completion</summary>
                <!--<summary>{{item[completionFieldList[0]["name"]]}}</summary>-->
                <div
                    class="sp-type-list__item__details__field"
                    v-for="field in completionFieldList"
                    v-bind:key="field"
                >
                  <strong> {{ capitalize(field.name) }} </strong><br />
                  {{ item[field.name] }}
                </div>
                </details>
              </div>
            <div
                class="sp-type-list__item__more"
                :class="{ 'sp-type-list__item__more__open': moreCompOpen == index }"
                v-if="item['creator']===this.address"
            >
              <div class="sp-icon sp-icon-More" v-on:click="moreCompOpen = index" />
              <div
                  class="sp-type-list__item__options sp-box"
                  v-if="moreCompOpen == index"
              >
                <div
                    class="sp-type-list__item__options__edit"
                    v-on:click=";(editCompID = item['id']), (editCompOpen = true)"
                >
                  Edit
                </div>
                <div
                    class="sp-type-list__item__options__delete"
                    v-on:click=";(deleteCompID = item['id']), (deleteCompOpen = true)"
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="sp-type-list__edit__overlay" v-if="editCompOpen || deleteCompOpen" v-on:click="editCompOpen=false,deleteCompOpen=false" />
    <div class="sp-type-list__edit__form" v-if="editCompID >= 0">
      <CompletionForm
          :modulePath="modulePath"
          :creatorId="address"
          :taskId="compTaskID"
          :id="editCompID"
          action="update"
          v-on:cancel-update-comp=";(editCompID = -1), (editCompOpen = false)"
          v-on:updated-comp=";(editCompID = -1), (editCompOpen = false), this.showCompSuccessMsg(1)"
      />
    </div>
    <div class="sp-type-list__delete__form" v-if="deleteCompID >= 0">
      <CompletionForm
          :modulePath="modulePath"
          :creatorId="address"
          :taskId="compTaskID"
          :id="deleteCompID"
          action="delete"
          v-on:cancel-delete-comp=";(deleteCompID = -1), (deleteCompOpen = false)"
          v-on:deleted-comp=";(deleteCompID = -1), (deleteCompOpen = false), this.showCompSuccessMsg(2)"
      />
    </div>
  </div>
</template>
<script>
import CompletionForm from '../components/CompletionForm'

export default {
  name: 'CompletionList',
  components: {
    CompletionForm
  },
  props: {
    modulePath: {
      type: String,
      default: ''
    },
  },
  data: function () {
    return {
      completionFieldList: [],
      moreCompOpen: -1,
      editCompOpen: false,
      deleteCompOpen: false,
      editCompID: -1,
      deleteCompID: -1,
      editCompSuccessMsg: "",
      intCompId: -1,
      compTaskId: -1,
    }
  },
  computed: {
    address() {
      return this.$store.getters['common/wallet/address']
    },
    completionListItems(){
        console.log("completionlistitems")

      if (this._depsLoaded){
        let items = this.$store.getters[
           this.modulePath + '/getCompletionAll'
                       ]({ params: {} })
        return items ? items[this.capitalize('Completion')] : []
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
      this.completionFieldList = this.$store.getters[
      this.modulePath + '/getTypeStructure'
          ]('Completion')
      await this.$store.dispatch(
          this.modulePath + '/QueryCompletionAll',
          { options: { subscribe: true } }
      )
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    showCompSuccessMsg(task){
      let taskStr = ""
      if(task==1){
        taskStr = "Update"
      }else if(task=2){
        taskStr = "Delete"
      }else{
        taskStr ="Completion"
      }
      this.editCompSuccessMsg = taskStr+" successful!"
      this.intCompId = setInterval(this.hideEditCompSuccessMsg, 5000)
    },
    hideEditCompSuccessMsg(){
      console.log("hideEditCompSuccessMsg")
      this.editCompSuccessMsg = ""
      clearInterval(this.intCompId)
    },
    logg(id){
      console.log(id)
    }

  }
}
</script>
