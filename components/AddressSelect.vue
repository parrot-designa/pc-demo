<template>
  <b-row :class="[classnames]">
    <b-col cols="12" md="4">
      <div class="form-group mb-md-0">
        <custom-select-2
          :options="level1Data"
          @change="level1Change"
          :initialValue="level1Value"
        ></custom-select-2>
      </div>
    </b-col>
    <b-col cols="12" md="4">
      <div class="form-group mb-md-0">
        <custom-select-2
          :options="level2Data"
          @change="level2Change"
          :initialValue="level2Value"
        ></custom-select-2>
      </div>
    </b-col>
    <b-col cols="12" md="4">
      <div class="form-group mb-md-0">
        <custom-select-2
          :options="level3Data"
          @change="level3Change"
          :initialValue="level3Value"
        ></custom-select-2>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import CustomSelect2 from "./CustomSelect2.vue";
import S from "@/spx";

export default {
  components: { CustomSelect2 },
  props: ["classnames", "initialCode"],
  data() {
    return {
      level1Data: [],
      level1Value: {},
      level2Data: [],
      level2Value: {},
      level3Data: [],
      level3Value: {},
      allData: [],
    };
  },
  methods: {
    level1Change: function (value) {
       
      this.level1Value = this.allData.find((item) => item.id == value);
      this.level2Data = this.level1Value.sub.map((item) => ({
        ...item,
        name: item.name,
        value: item.id,
      }));
    },
    level2Change: function (value) {
       
      this.level2Value = this.level2Data.find((item) => item.id == value);
      this.level3Data = this.level2Value.sub.map((item) => ({
        ...item,
        name: item.name,
        value: item.id,
      }));
    },
    level3Change: function (value) {
       
      this.level3Value = this.level3Data.find((item) => item.id == value);
      this.$emit("change", [
        this.level1Value,
        this.level2Value,
        this.level3Value,
      ]);
    },
    getAllCity: async function () {
      let addressList = S.getAddressList();
      if (!addressList) {
        const data = await this.$store.dispatch("address/getAllList");
        addressList = [...data];
      }
      this.allData = addressList;
      this.level1Data = addressList.map((item) => ({
        ...item,
        name: item.name,
        value: item.id,
      }));
      return true;
    },
  },
  watch: {
    initialCode: {
      handler: async function (newVal,oldVal) {
        console.log("===initialCode==>", newVal,oldVal);
        const hasChange=!oldVal || oldVal[2]!==newVal[2];
        if (newVal.length === 3 && hasChange) {
          const res = await this.getAllCity();
          if (res) { 
            this.level1Change(newVal[0]);
            this.level2Change(newVal[1]);
            this.level3Change(newVal[2]);
          }
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted: async function () {
    this.getAllCity();
  },
};
</script>

