<template>
  <div class="sp-type-form sp-box" :class="typeClass" v-if="this._depsLoaded">
    <form class="sp-type-form__main__form" id="completionform" v-if="action == 'create'" >
      <div class="sp-type-form__header sp-box-header" >
        CREATE COMPLETION
        <span class="sp-type-form__message" style="color:green">{{this.completionSuccessMsg}}</span>
      </div>
      <div
          class="sp-type-form__field sp-form-group"
          v-for="field in createCompletionFieldList"
          v-bind:key="field.name"
      >
        <label>{{capitalize(field.name)}}</label><br/>
        <span v-if="this.isCError[field.name]" style="color:#ff0000">{{this.cErrorMsg[field.name]}}</span><br/>
        <input
            type="text"
            class="sp-input"
            :placeholder="address"
            v-model="completionData[field.name]"
            v-if="field.name==='creator'"
            v-bind:disabled="field.name==='creator'"
        />
        <input
            type="text"
            class="sp-input"
            :placeholder="'Waiting for to be checked'"
            v-model="completionData[field.name]"
            v-if="field.name==='status'"
            v-bind:disabled="field.name==='status'"
        />

        <input
            type="text"
            class="sp-input"
            :placeholder="capitalize(completionData[field.name])"
            v-model="completionData[field.name]"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            v-if="field.name!=='creator' && field.name!=='id' && field.name!=='taskID' &&field.name!=='status'"
            v-bind:disabled="field.name==='id'||field.name==='taskID'"
        />
        <input
            type="number"
            class="sp-input"
            :placeholder="capitalize(taskId)"
            v-model="completionData[field.name]"
            v-if="field.type == 'number'"
            v-bind:disabled="field.name==='taskID'||field.name==='id'"
        />

      </div>
      <!--<div class="sp-type-form__message" v-if="!address">
        Add or unlock a wallet to create a {{ moduleType }}
      </div>-->
      <div class="sp-type-form__btns">
        <div class="sp-type-form__btns__reset" v-on:click="this.resetForm('completionform')">
          Reset
        </div>
        <SpButton type="secondary" v-on:click="$emit('cancel-completion')">Cancel</SpButton>
        <SpButton type="primary" v-on:click="createCompletion" :disabled="!address"
        >Create Completion</SpButton
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
          v-for="field in updateCompletionFieldList"
          v-bind:key="field.name"
      >
        <label>{{capitalize(field.name)}}</label><br/>
        <span v-if="this.isCError[field.name]" style="color:#ff0000">{{this.cErrorMsg[field.name]}}</span><br/>
        <input
            type="text"
            class="sp-input"
            :placeholder="''"
            v-model="completionData[field.name]"
            v-if="field.name==='status'"
        />

      </div>
      <div class="sp-type-form__btns">
        <div
            class="sp-type-form__btns__reset"
            v-on:click="$emit('cancel-update-comp')"
        >
          Cancel
        </div>
        <SpButton type="primary" v-on:click="updateCompletion()"
        >Update Completion</SpButton
        >
      </div>
    </form>
    <form class="sp-type-form__main__form" v-if="action == 'delete'">
      <div class="sp-type-form__header sp-box-header">
        DELETE COMPLETION
      </div>
      <div
          class="sp-type-form__field sp-form-group"
          v-for="field in deleteCompletionFieldList"
          v-bind:key="field.name"
      >
        <!-- basically all except the id filtered out -->
        <input
            type="number"
            class="sp-input"
            :placeholder="capitalize(field.name)"
            v-model="completionData[field.name]"
            v-if="field.type == 'number'"
            v-bind:disabled="field.name!==''"
        />
      </div>
      <div class="sp-type-form__btns">
        <div
            class="sp-type-form__btns__reset"
            v-on:click="$emit('cancel-delete-comp')"
        >
          Cancel
        </div>
        <SpButton type="primary" v-on:click="deleteCompletion()"
        >Delete Completion</SpButton
        >
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'CompletionForm',
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
    creatorId: {
      type: String,
      default: ''
    },
    taskId: {
      type: Number,
      default: -1
    },
    id: {
      type: String,
      default: ''
    }

  },
  data: function () {
    return {
      completionFieldList: [],
      completionData: {},
      isCError: [],
      cErrorMsg: [],
      completionSuccessMsg: "",
      intvalId: 0,
    }
  },
  watch: {
    async id(newId) {
      console.log("watch")
      this.completionData['id'] = newId
      if (this._depsLoaded) {
        if (this.completionData['id'] != '') {
          await this.$store.dispatch(
              this.modulePath + '/QueryCompletion',
              {
                options: { subscribe: true },
                params: { id: this.completionData['id'] }
              }
          )
          let data = this.$store.getters[
          this.modulePath + '/getCompletion'
              ]({ params: { id: this.completionData['id'] } })
          this.completionData = data[this.capitalize('Completion')]

        }
      }
    }
  },
  computed: {
    address() {
      return this.$store.getters['common/wallet/address']
    },
    typeClass() {
      return 'sp-type-form-completion'
    },
    createCompletionFieldList() {
      return this.completionFieldList.filter((x) => x.name != 'creator' && x.name != 'id')
    },
    updateCompletionFieldList() {
      return this.completionFieldList.filter((x) => x.name =='status')
    },
    deleteCompletionFieldList() {
      return this.completionFieldList.filter((x) => x.name == 'id')
    },
    selectedAccount() {
      if (this._depsLoaded) {
        return this.$store.getters['common/wallet/address']
      } else
        return null
     },
    createCompletionData() {
      console.log("createCompletionData")
      if (this.checkCompletionData()) {
        //console.log("data fine, sending")
        // eslint-disable-next-line no-unused-vars
        const {id, ...rest} = this.completionData
        //console.log(rest)
        console.log("ok createCompletionData")
        return rest
      }
      else{
        console.log("not ok createCompletionData")
        //console.log("data not ok")
        return false
      }
    },
    updateCompletionData() {
      //if(this.checkCompletionData()) {
        //console.log("valid info")
        return this.completionData
      //}
      //return false
    },
    deleteCompletionData() {
      // eslint-disable-next-line no-unused-vars
      const { id, creator, ...rest } = this.completionData
      return { id, creator }
    },
    depsLoaded() {
      return this._depsLoaded
    },
  },


  beforeCreate() {
    console.log("beforeCreateCompletion")
    const module = [...this.modulePath.split('/')]
    for (let i = 1; i <= module.length; i++) {
      let submod = module.slice(0, i)
      if (!this.$store.hasModule(submod)) {
        console.log('Module ' + this.modulePath + ' has not been registered!')
        this._depsLoaded = false
        break
      }
    }
    console.log("end beforeCreateCompletion")
  },
  async created() {
    if (this._depsLoaded) {
      this.completionFieldList = this.$store.getters[
      this.modulePath + '/getTypeStructure'
          ]('Completion')
      for (let field of this.completionFieldList) {
        this.completionData[field.name] = ''
      }
      this.completionData['id'] = this.id
      if (this.completionData['id'] != '') {
        await this.$store.dispatch(
            this.modulePath + '/QueryCompletion',
            { options: { subscribe: true }, params: { id: this.completionData['id'] } }
        )
        let data = this.$store.getters[
        this.modulePath + '/getCompletion'
            ]({ params: { id: this.completionData['id'] } })
        this.completionData = data[this.capitalize('Completion')]
      }
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    checkCompletionData(){
      /*check data before sending
      *
      * ImageUrl cannot be empty
      * ImageHash cannot be empty
      * should there be some checking with imageurl and imagehash?
      * what are the status options?
      *

      *
      * if everything is fine, then should clear error messages and give info if some other error...
      *  also give info, if everything fine
      * */
      /*clearing possible errormessages*/
      for (let dataId in this.completionData){
        this.cErrorMsg[dataId]=""
        this.isCError[dataId]=false
      }

      //checking that imageurl and imagehash are not empty
      let validImgUrl = this.checkCompletionInfo("imageURL")
      let validImgHash = this.checkCompletionInfo("imageHash")



      if(!validImgUrl||!validImgHash){
        return false  //found errors, don't send
      }
      document.getElementById("completionform").reset()
      return true  //no errors, just send forward


    },
    checkCompletionInfo(id){
      if(this.completionData[id].length==0){
        this.isCError[id]=true
        this.cErrorMsg[id]="The completion must have "+id
        return false
      }
      return true
    },

    async createCompletion() {
      if (this._depsLoaded && this.address) {
        this.completionData['creator'] = this.creatorId
        this.txResult = await this.$store.dispatch(
            this.modulePath + '/sendMsgCreateCompletion',
            {
              value: { ...this.createCompletionData },
              fee: []
            }
        )
        //this one shows what has happened in the tx
        console.log("creation result:",this.txResult)
        if(this.txResult.data === undefined){
          console.log("error:", this.txResult)
        }else{
          //this.intvalId = setInterval(this.hideCompletionSuccessMsg, 5000)
          //this.completionSuccessMsg = "Task creation succeeded"
          this.$emit('completed')
        }
        //document.getElementById("taskform").reset()

      }
    },
    async updateCompletion() {
      if (this._depsLoaded) {
        this.completionData['creator'] = this.selectedAccount
        this.txResult = await this.$store.dispatch(
            this.modulePath + '/sendMsgUpdateCompletion',
            {
              value: { ...this.updateCompletionData },
              fee: []
            }
        )
        //this one shows what has happened in the tx
        console.log(this.txResult)
        if(this.txResult.data === undefined){
          console.log("error in update:", this.txResult)
        }else{
          this.$emit('updated-comp')
        }
      }
    },
    async deleteCompletion() {
      if (this._depsLoaded) {
        this.completionData['creator'] = this.selectedAccount
        this.txResult = await this.$store.dispatch(
            this.modulePath + '/sendMsgDeleteCompletion',
            {
              value: { ...this.deleteCompletionData },
              fee: []
            }
        )
        //this one shows what has happened in the tx
        console.log(this.txResult)
        if(this.txResult.data === undefined){
          console.log("error in update:", this.txResult)
        }else{
          this.$emit('deleted-comp')
        }
      }
    },
    resetForm(id){
      document.getElementById(id).reset()
    }
  }
}
</script>
