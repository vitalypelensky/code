<template>
    <div class="wrapper justifyContent-start-alignItem-center padding-wrapper" :style="{backgroundImage: `url(${backgroundPhoto})`}">
      <div class="content">
        <p v-if="subTitle" class="bold sizeS color-white">{{subTitle}}</p>
        <p v-if="title" class="bold sizeXXL color-white title">{{title}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "titleBlock",
        props:{
            title: '',
            subTitle: '',
            backgroundPhoto: ''
        }
    }
</script>

<style scoped>
  .wrapper{
    height: 300px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
  }
  .wrapper:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.4);
  }
  .content{
    /*margin-right: 80px;*/
    z-index: 3;
  }
  .title{
    line-height: 55px;
  }
</style>
