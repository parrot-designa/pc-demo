
<template>
  <b-card>
      <b-container>
          <b-row>
              <b-col cols="4" sm="auto">
                  <div class='mb-5 font-weight-bold'>
                      <a>服饰鞋帽</a>
                  </div>
                  <ul class='list-styled mb-0 font-size-sm'>
                      <li class='list-styled-item' v-for="(menu,index) in menuItemOne" :key="index">
                          <a classs='list-styled-link'>{{menu.name}}</a>
                      </li>  
                  </ul>
              </b-col>
              <b-col cols="4" sm="auto"></b-col>
              <b-col cols="4" sm="auto"></b-col>
              <b-col cols="4" sm="auto"></b-col>
              <b-col cols="4" sm="auto" md="3"></b-col>
              <b-col cols="4" sm="auto" md="3"></b-col>
          </b-row>
      </b-container>
  </b-card>
</template>


<script>
export default {
    data(){
        return {
            menuItemOne:[{
                name:'短袖T恤',
                name:'长袖T恤',
                name:'卫衣&帽衫',
                name:'背心',
                name:'外套&夹克',
                name:'鞋子',
                name:'裤子&裙子',
                name:'帽子',
                name:'箱包',
            }]
        }
    }
};
</script>