<template>
  <div class="sp-type-form sp-box" :class="typeClass" v-if="depsLoaded">
    <form class="sp-type-form__main__form" id="taskform" v-if="action == 'create'" >
      <div class="sp-type-form__header sp-box-header" style="color:green">
        {{this.successMsg}}
      </div>
      <div
          class="sp-type-form__field sp-form-group"
          v-for="field in createFieldList"
          v-bind:key="field.name"
      >
        <label>{{capitalize(field.name)}}</label><br/>
        <span v-if="this.isError[field.name]" style="color:#ff0000">{{this.errorMsg[field.name]}}</span><br/>
        <input
            type="text"
            class="sp-input"
            :placeholder="'DD/MM/YYYY'"
            v-model="typeData[field.name]"
            v-if="field.name==='endedAt' || field.name==='startedAt'"
        />
        <input
            type="number"
            class="sp-input"
            :placeholder="capitalize(field.name)"
            v-model="typeData[field.name]"
            v-if="field.type == 'number'"
            min="0"
        />
        <input
            type="text"
            class="sp-input"
            :placeholder="'Task '+field.name"
            v-model="typeData[field.name]"
            v-if="field.name==='title' || field.name==='description'"
        />

      </div>
      <div class="sp-type-form__message" v-if="!address">
        Add or unlock a wallet to create a Task
      </div>
      <div class="sp-type-form__btns">
        <div class="sp-type-form__btns__reset" v-on:click="resetForm('taskform')">
          Reset
        </div>
        <SpButton type="primary" v-on:click="createType" :disabled="!address"
        >Create Task</SpButton
        >
      </div>
    </form>
    <form class="sp-type-form__main__form" v-if="action == 'update'">
      <!-- this successMsg should be shown some other way..., the form is closed, when succeeded -->
      <!--<div class="sp-type-form__header sp-box-header" style="color:green">
        {{this.successMsg}}
      </div>-->
      <div
          class="sp-type-form__field sp-form-group"
          v-for="field in updateFieldList"
          v-bind:key="field.name"
      >
        <label>{{capitalize(field.name)}}</label><br/>
        <span v-if="this.isError[field.name]" style="color:#ff0000">{{this.errorMsg[field.name]}}</span><br/>
        <input
            type="text"
            class="sp-input"
            :placeholder="'DD/MM/YYYY'"
            v-model="typeData[field.name]"
            v-if="field.name==='endedAt' || field.name==='startedAt'"
        />
        <input
            type="number"
            class="sp-input"
            :placeholder="capitalize(field.name)"
            v-model="typeData[field.name]"
            v-if="field.type == 'number' && field.name!=='id'"
            min="0"
        />
        <input
            type="text"
            class="sp-input"
            :placeholder="capitalize(field.name)"
            v-model="typeData[field.name]"
            v-if="field.name==='id'"
            v-bind:readonly="id != '' && field.name == 'id'"
            v-bind:disabled="field.name=='id'"
        />

        <input
            type="text"
            class="sp-input"
            :placeholder="'Task '+field.name"
            v-model="typeData[field.name]"
            v-if="field.name==='title' || field.name==='description'"
        />

      </div>
      <div class="sp-type-form__btns">
        <div
            class="sp-type-form__btns__reset"
            v-on:click="$emit('cancel-update')"
        >
          Cancel
        </div>
        <SpButton type="primary" v-on:click="updateType()"
        >Update Task</SpButton
        >
      </div>
    </form>
    <form class="sp-type-form__main__form" v-if="action == 'delete'">
      <div class="sp-type-form__header sp-box-header">
        DELETE TASK
      </div>
      <div
          class="sp-type-form__field sp-form-group"
          v-for="field in deleteFieldList"
          v-bind:key="field.name"
      >
        <!--<input
            type="text"
            class="sp-input"
            :placeholder="capitalize(field.name)"
            v-model="typeData[field.name]"
            v-if="field.type == 'string'"
            v-bind:disabled="field.name!==''"
        />-->
        <!-- basically all except the id filtered out -->
        <input
            type="number"
            class="sp-input"
            :placeholder="capitalize(field.name)"
            v-model="typeData[field.name]"
            v-if="field.type == 'number'"
            v-bind:disabled="field.name!==''"
        />
      </div>
      <div class="sp-type-form__btns">
        <div
            class="sp-type-form__btns__reset"
            v-on:click="$emit('cancel-delete')"
        >
          Cancel
        </div>
        <SpButton type="primary" v-on:click="deleteType()"
        >Delete Task</SpButton
        >
     </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'TaskForm',
  components: {

  },
  props: {
    modulePath: {
      type: String,
      default: '',
      required: true
    },
    action: {
      type: String,
      default: '',
      required: true
    },
    id: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      fieldList: [],
      typeData: {},
      isError: [],
      errorMsg: [],
      dates: [],
      successMsg: "",
      intId: 0
    }
  },
  watch: {
    async id(newId) {
      this.typeData['id'] = newId
      if (this._depsLoaded) {
        if (this.typeData['id'] != '') {
          await this.$store.dispatch(
              this.modulePath + '/QueryTask',
              {
                options: { subscribe: true },
                params: { id: this.typeData['id'] }
              }
          )
          let data = this.$store.getters[
          this.modulePath + '/getTask'
              ]({ params: { id: this.typeData['id'] } })
          this.typeData = data[this.capitalize('Task')]

        }
      }
    }
  },
  computed: {
    address() {
      return this.$store.getters['common/wallet/address']
    },
    typeClass() {
      return 'sp-type-form-task'
    },
    createFieldList() {
      return this.fieldList.filter((x) => x.name != 'creator' && x.name != 'id')
    },
    updateFieldList() {
      return this.fieldList.filter((x) => x.name != 'creator')
    },
    deleteFieldList() {
      return this.fieldList.filter((x) => x.name == 'id')
    },
    selectedAccount() {
      if (this._depsLoaded) {
        return this.$store.getters['common/wallet/address']
      } else {
        return null
      }
    },
    createTypeData() {
      if (this.checkData()) {
        //console.log("data fine, sending")
        // eslint-disable-next-line no-unused-vars
        const {id, ...rest} = this.typeData
        //console.log(rest)
        return rest
      }
      else{
        //console.log("data not ok")
        return false
      }
    },
    updateTypeData() {
      if(this.checkData()) {
        console.log("valid info")
        return this.typeData
      }
      return false
    },
    deleteTypeData() {
      // eslint-disable-next-line no-unused-vars
      const { id, creator, ...rest } = this.typeData
      return { id, creator }
    },
    depsLoaded() {
      return this._depsLoaded
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
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
      for (let field of this.fieldList) {
        this.typeData[field.name] = ''
      }
      this.typeData['id'] = this.id
      if (this.typeData['id'] != '') {
        await this.$store.dispatch(
            this.modulePath + '/QueryTask',
            { options: { subscribe: true }, params: { id: this.typeData['id'] } }
        )
        let data = this.$store.getters[
        this.modulePath + '/getTask'
            ]({ params: { id: this.typeData['id'] } })
        this.typeData = data[this.capitalize('Task')]
      }
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    checkData(){
      /*check data before sending
      *
      * Done:
      * Title cannot be empty
      * Description cannot be empty
      * price has to be positive
      * started at --> format (also give hint to the user)
      * ended at --> format (also give hint to the user)
      *
      * + errormessages <-- in red?
      *
      *
      * TODO: if everything is fine, then should clear error messages and give info if some other error...
      *  also give info, if everything fine
      * */

      for (let dataId in this.typeData){
          this.errorMsg[dataId]=""
          this.isError[dataId]=false
      }
      //calling these here, in order to have all fields tested...
      let validSDate = this.checkDate("startedAt")
      let validEDate = this.checkDate("endedAt")
      let validTitle = this.checkInfo("title")
      let validDesc = this.checkInfo("description")
      let validPrize = this.checkInfo("prize")


      if(!validSDate||!validEDate||!validTitle||!validDesc||!validPrize){
        return false  //found errors, don't send
      }
      document.getElementById("taskform").reset()
      return true  //no errors, just send forward

    },
    isValidDate(s, id) {
      if(s.length ==0){
        return 3
      }
      // Assumes s is "mm/dd/yyyy"
      if ( ! /^\d\d\/\d\d\/\d\d\d\d$/.test(s) ) {
        return 2;  //not valid date format
      }

      const parts = s.split('/').map((p) => parseInt(p, 10));
      parts[1] -= 1  //in js months are given as 0..11
      const d = new Date(parts[2],parts[1],parts[0]);
      const today = Date.now()
      if (d.getMonth()===parts[1] && d.getDate()===parts[0] && d.getFullYear()===parts[2] && d>=today){
          //date is valid and not in past, checking if end date --> should be after start date
          if(id==='endedAt'){
            if (!this.dates['startedAt'] || d<this.dates['startedAt']){
               return 4
            }
          }
          this.dates[id] = d
          return 0 //valid date
      }else if(d.getMonth() === parts[1] && d.getDate() === parts[0] && d.getFullYear() === parts[2] && d<today){
          return 1  //date in past --> error
      } else{
          return 2  //date not valid format, should never end up here...
      }

    },
    initializeErrors(value, index){
      this.errorMsg[index]=""
      this.isError[index]=false
    },
    checkInfo(id){
      if(this.typeData[id].length==0){
        this.isError[id]=true
        this.errorMsg[id]="The task must have "+id
        return false
      }
      return true
    },
    checkDate(id){
      let code = this.isValidDate(this.typeData[id], id)
      console.log("isValidDate return code:"+code.toString()+" "+typeof(code).toString())
      if(code==1){
        this.errorMsg[id] = "Check the date. It cannot be in past"
      }else if(code==2){
        this.errorMsg[id] = "Check the date string. Give date in format DD/MM/YYYY"
      }else if(code==3){
        this.errorMsg[id] = "Date cannot be empty"
      }else if(code==4){
        this.errorMsg[id] = "End date cannot be before start date"
      }
      if(code>0){ //date was ok, but still checking that endDate is after startDate
        this.dates = []  //clearing the saved dates for next try
        this.isError[id] = true
        return false
      }
      this.errorMsg[id] = ""
      this.isError[id] = false
      return true  //date was valid, no errors found
    },
    async createType() {
      console.log("createType")
      if (this._depsLoaded && this.address) {
        this.typeData['creator'] = this.selectedAccount
        this.txResult = await this.$store.dispatch(
            this.modulePath + '/sendMsgCreateTask',
            {
              value: { ...this.createTypeData },
              fee: []
            }
        )
        //this one shows what has happened in the tx
        console.log(this.txResult)
        if(this.txResult.data === undefined){
          console.log("error:", this.txResult)
        }else{
          this.intId = setInterval(this.hideSuccessMsg, 5000)
          this.successMsg = "Task creation succeeded"
        }
        document.getElementById("taskform").reset()

      }
    },
    hideSuccessMsg(){
      //console.log("hideSuccessMsg")
      this.successMsg = ""
      clearInterval(this.intId)
    },
    async updateType() {
      console.log("yeah")
      if (this._depsLoaded) {
        this.typeData['creator'] = this.selectedAccount
        this.txResult = await this.$store.dispatch(
            this.modulePath + '/sendMsgUpdateTask',
            {
              value: { ...this.updateTypeData },
              fee: []
            }
        )
        //this one shows what has happened in the tx
        console.log(this.txResult)
        if(this.txResult.data === undefined){
          console.log("error in update:", this.txResult)
        }else{
          this.$emit('updated')
        }

      }
    },
    async deleteType() {
      if (this._depsLoaded) {
        this.typeData['creator'] = this.selectedAccount
        this.txResult = await this.$store.dispatch(
            this.modulePath + '/sendMsgDeleteTask',
            {
              value: { ...this.deleteTypeData },
              fee: []
            }
        )
        //this one shows what has happened in the tx
        console.log(this.txResult)
        if(this.txResult.data === undefined){
          console.log("error in update:", this.txResult)
        }else{
          this.$emit('deleted')
        }
      }
    },
    resetForm(id){
      document.getElementById(id).reset()
    }
  }
}
</script>
