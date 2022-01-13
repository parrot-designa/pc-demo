<template>
  <b-row>
    <b-col cols="12" lg="6">
      <div class="s-group">
        <label>出生日期</label>
        <div class="form-row">
          <div class="col-auto">
            <custom-select
              :options="yearOptions"
            />
          </div>
          <div class="col-auto">
            <custom-select
              :options="monthOptions"
            />
          </div>
          <div class="col-auto">
            <custom-select
              :options="dayOptions"
            />
          </div>
        </div>
      </div>
    </b-col>
    <b-col cols="12" lg="6">
      <div class="form-group mb-8">
        <label>性　别</label>

        <custom-toggle
          :options="[{ name: '男' }, { name: '女' }, { name: '保密' }]"
        />
      </div>
    </b-col>
    <b-col cols="12" lg="6">
      <div class="form-group mb-8">
        <label>电子邮箱地址 *</label>

        <custom-input2 />
      </div>
    </b-col>
    <b-col cols="12" lg="6">
      <div class="form-group mb-8">
        <label>手机 *</label>

        <custom-input2 />
      </div>
    </b-col>
    <b-col cols="12" class="mt-4">
      <hr class="mt-2 mb-8" />
      <normal-button>确认修改资料</normal-button>
    </b-col>
    <hr class="mt-8 mb-8" />
    <b-row>
      <b-col cols="12" lg="4">
        <div class="form-group mb-8">
          <label>原密码 *</label>

          <custom-input2 />
        </div>
      </b-col>
      <b-col cols="12" lg="4">
        <div class="form-group mb-8">
          <label>新密码 *</label>

          <custom-input2 />
        </div>
      </b-col>
      <b-col cols="12" lg="4">
        <div class="form-group mb-8">
          <label>确认密码 *</label>

          <custom-input2 />
        </div>
      </b-col>
      <b-col cols="12" class="mt-4">
          <normal-button>确认修改密码</normal-button>
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
import { mapState } from 'vuex';
import { dateUtil,generateYear } from '@/utils';

export default {
  data(){
    return {
      yearOptions:[],
      monthOptions:[
        {
          name:'01',value:'01'
        },{
          name:'02',value:'02'
        },{
          name:'03',value:'03'
        },{
          name:'04',value:'04'
        },{
          name:'05',value:'05'
        },{
          name:'06',value:'06'
        },{
          name:'07',value:'07'
        },{
          name:'08',value:'08'
        },{
          name:'09',value:'09'
        },{
          name:'10',value:'10'
        },{
          name:'11',value:'11'
        },{
          name:'12',value:'12'
        }
      ],
      dayOptions:[{
          name:'01',value:'01'
        },{
          name:'02',value:'02'
        },{
          name:'03',value:'03'
        },{
          name:'04',value:'04'
        },{
          name:'05',value:'05'
        },{
          name:'06',value:'06'
        },{
          name:'07',value:'07'
        },{
          name:'08',value:'08'
        },{
          name:'09',value:'09'
        },{
          name:'10',value:'10'
        },{
          name:'11',value:'11'
        },{
          name:'12',value:'12'
        },{
          name:'13',value:'13'
        },{
          name:'14',value:'14'
        },{
          name:'15',value:'15'
        },{
          name:'16',value:'16'
        },{
          name:'17',value:'17'
        },{
          name:'18',value:'18'
        },{
          name:'19',value:'19'
        },{
          name:'20',value:'20'
        },{
          name:'21',value:'21'
        },{
          name:'22',value:'22'
        },{
          name:'23',value:'23'
        },{
          name:'24',value:'24'
        },{
          name:'25',value:'25'
        },{
          name:'26',value:'26'
        },{
          name:'27',value:'27'
        },{
          name:'28',value:'28'
        },{
          name:'29',value:'29'
        },{
          name:'30',value:'30'
        }
      ],
      year:dateUtil().year
    }
  },
  watch:{
    year:{
      handler(newVal){
        this.yearOptions=generateYear(newVal) 
      },
      immediate:true
    }
  },
  computed:{
      ...mapState('user',{
      useInfo:state=>state.info
    }) 
  }  
}
</script>