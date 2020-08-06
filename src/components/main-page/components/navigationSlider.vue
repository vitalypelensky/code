<template>
    <div class="wrapper padding-wrapper">
      <div class="wrapper-items justifyContent-spaceBetween">
        <div class="item justifyContent-spaceBetween-column"
             :class="{active: index == indexActive}"
             v-for="(item, index) in itemsShow"
             :key="index"
             @click="changeSlide(index)">
              <div>
                <p class="group">{{item.group}}</p>
                <p class="title">{{item.title}}</p>
              </div>
              <p class="number">
                {{`0${index+1}`}}
              </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "navigationSlider",
      props:{
          items: null,
          carouselData: 0
      },
      data(){
          return{
            indexActive: 0
          }
      },
      methods:{
          changeSlide(index){
            if(index == this.indexActive){return}
            this.indexActive = index
            this.$emit('changeSlide', index)
          }
      },
      watch:{
        carouselData(newIndex){
          this.indexActive = newIndex
        }
      },
      computed:{
          itemsShow(){
            return this.items && this.items.length > 4 ? this.items.slice(-4) : this.items
          }
      }
    }
</script>

<style scoped>
  .wrapper-items{
    border-radius: 5px;
    background-color: white;
  }
  .item{
    padding: 37px 40px 24px 40px;
    cursor: pointer;
    border-bottom: 4px solid #BDBCE8;
    color: #878997;
    font-weight: bold;
    width: 25%;
  }
  .active{
    border-bottom: 4px solid #1A187D;
    color: #1A187D;
  }
  .group{
    margin-bottom: 16px;
    font-size: 16px;
  }
  .title{
    font-size: 18px;
  }
  .number{
    margin-top: 24px;
    font-size: 24px;
  }
  @media screen and (max-width: 1200px) {
    .group{
      margin-bottom: 16px;
      font-size: 14px;
    }
    .title{
      font-size: 16px;
    }
    .number{
      margin-top: 16px;
      font-size: 16px;
    }
  }
</style>
