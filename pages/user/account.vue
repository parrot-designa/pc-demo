<template>
  <b-row>
    <b-col cols="12" lg="6">
      <div class="form-group">
        <label>出生日期</label>
        <div class="form-row">
          <div class="col-auto">
            <custom-select
              :options="yearOptions"
            />
          </div>
          <div class="col-auto">
            <custom-select
              :options="[
                { name: '01', value: '2000' },
                { name: '02', value: '2010' },
                { name: '03', value: '2020' },
              ]"
            />
          </div>
          <div class="col-auto">
            <custom-select
              :options="[
                { name: '01', value: '2000' },
                { name: '02', value: '2010' },
                { name: '03', value: '2020' },
              ]"
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