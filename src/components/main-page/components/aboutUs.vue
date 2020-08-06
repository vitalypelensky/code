<template>
    <div class="wrapper padding-wrapper">
      <div class="content">
        <p class="sizeXXL">Про нас</p>
        <p class="sizeXS description">{{aboutDescription}}</p>
        <button class="button-details sizeS" @click="openAboutUsPage">Детальніше</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "aboutUs",
        props:{
          aboutDescription: ''
        },
      methods:{
        openAboutUsPage(){
          this.$router.push('/about')
        }
      }
    }
</script>

<style scoped>
  .wrapper{
    padding-top: 80px;
    padding-bottom: 80px;
    background-image: url('../../../assets/image/about.jpg');
    background-size: contain;
    background-repeat-x: no-repeat;
  }
  .description{
    margin-top: 32px;
    line-height: 22px;
    white-space: pre-wrap;
  }
  .content{
    width: 50%;
  }
  button{
    margin-top: 30px;
  }
  @media screen and (max-width: 768px) {
    .wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content{
      width: 100%;
    }
  }
</style>
