<template>
  <b-row>
    <b-col cols="12" lg="6">
      <div class="form-group mb-8">
        <label>收货人姓名 *</label>

        <custom-input2 />
      </div>
    </b-col>
    <b-col cols="12" lg="6">
      <div class="form-group mb-8">
        <label>电话 *</label>

        <custom-input2 />
      </div>
    </b-col>
    <b-col cols="12" lg="6">
      <div class="form-group mb-8">
        <label>电子邮件地址 *</label>

        <custom-input2 />
      </div>
    </b-col>
    <b-col cols="12" lg="12">
      <div class="form-group">
        <label>配送区域</label>
        <div class="form-row">
          <div class="col-auto">
            <custom-select
              :options="[
                { name: '上海', value: '2000' },
                { name: '上海', value: '2010' },
                { name: '上海', value: '2020' },
              ]"
            />
          </div>
          <div class="col-auto">
            <custom-select
              :options="[
                { name: '上海', value: '2000' },
                { name: '上海', value: '2010' },
                { name: '上海', value: '2020' },
              ]"
            />
          </div>
          <div class="col-auto">
            <custom-select
              :options="[
                { name: '上海', value: '2000' },
                { name: '上海', value: '2010' },
                { name: '上海', value: '2020' },
              ]"
            />
          </div>
        </div>
      </div>
    </b-col>
    <b-col cols="12" lg="12">
      <div class="form-group mb-8">
        <label>详细地址 *</label>

        <custom-input2 />
      </div>
    </b-col>
    <b-col cols="12" lg="12">
      <normal-button>确认修改</normal-button>
      <normal-button :dark="false">修改</normal-button>
    </b-col>
  </b-row>
</template>