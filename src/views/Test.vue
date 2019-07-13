<template>
  <div class="test">
    <div>
      平均值: {{average}}
    </div>
    <button @click="update">加载更多</button>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div><b>ID:</b><span>{{item.id}}</span></div>
      <div><b>Data:</b><span>{{item.data}}</span></div>
      <div><b>Time:</b><span>{{item.time}}</span></div>
  </div>
</div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      index:'0',
      click:true
    }
  },
  computed: {
    average:function(){return this.$store.getters.getAverage},
    dataList:function(){this.click = true;return this.$store.getters.getData}
  },
  methods: {

    update () {
      if(this.click){
        this.click = false;
        this.$store.dispatch("getDataCall",this.index);
        this.index++;
      }else{
        alert("数据加载中，请稍候..");
      }
    }
  },
  mounted(){
    if(!this.dataList.length)this.update();
  }
}
</script>

<style scoped lang="less">

.test{
  height:100%;
  .list{
    display: flex;
    flex-direction: row;
    div{
      flex:1;
      text-align:left;
    }
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
  b{
    margin-right:15px;
  }
}

</style>
