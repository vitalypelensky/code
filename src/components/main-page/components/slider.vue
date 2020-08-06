<template>
<!--      <button @click.prevent="slidePrev">prev</button>-->
<!--      <input v-model="carouselData" type="number" min="0" max="5">-->
<!--      <button @click.prevent="slideNext">next</button>-->
    <div class="wrapper-slider">
      <hooper ref="carousel" @slide="updateCarousel" :wheelControl='false' class="slider">
        <slide v-for="(slide, index) in lastNews" :key="index">
          <div class="slide" :style="{backgroundImage: `url(${slide.photos.length ? slide.photos[0].photo : require('@/assets/image/background.jpg')})`}">
              <div class="content-slide">
                  <p class="group sizeM">{{slide.group}}</p>
                  <p class="name sizeXL">{{slide.title}}</p>
                  <button @click="openFullNew(slide.id)" class="button sizeS">Детальніше</button>
              </div>
          </div>
        </slide>
      </hooper>
      <navigation class="navigation" :items="news" :carouselData="carouselData" @changeSlide="changeSlide"/>
    </div>
</template>

<script>
  import { Hooper, Slide } from 'hooper'
  import 'hooper/dist/hooper.css'
  import navigation from './navigationSlider'
  export default {
    name: "slider",
    props:{
      news: null
    },
    components:{
      Hooper,
      Slide,
      navigation
    },
    data() {
      return {
        carouselData: 0
      }
    },
    methods:{
      updateCarousel(payload) {
        this.carouselData = payload.currentSlide;
      },
      changeSlide(index){
        this.$refs.carousel.slideTo(index);
      },
      openFullNew(id){
        this.$router.push(`news/${id}`)
      }
    },
    watch: {
      carouselData () {
        this.$refs.carousel.slideTo(this.carouselData);
      }
    },
    computed:{
      lastNews(){
        return this.news && this.news.length > 4 ? this.news.slice(-4) : this.news
      }
    }
  }
</script>

<style scoped>
  .wrapper-slider{
    position: relative;
  }
  .slider{
    color: white;
    height: 90vh;
  }
  .slide{
    width: 100%;
    height: 100%;
    /*padding-top: 30vh;*/
    /*padding-left: 30%;*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
  }
  .slide:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.5);
  }
  .content-slide{
    width: 50%;
    position: absolute;
    top: 50%;
    left:50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .button{
    margin-top: 40px;
    padding: 13px 24px;
    background-color: rgba(26, 24, 125, 0.7);
    color: white;
    border-radius: 30px;
    border: none;
    cursor: pointer;
  }
  .navigation{
    position: relative;
    /*bottom: px;*/
    -webkit-transform: translateY(-60%);
    -moz-transform: translateY(-60%);
    -ms-transform: translateY(-60%);
    -o-transform: translateY(-60%);
    transform: translateY(-60%);
  }
  .group{
    margin-bottom: 20px;
  }
  @media screen and (max-width: 992px) {
    .navigation{
      display: none;
    }
    .content-slide {
      width: 90%;
    }
  }
  @media screen and (max-width: 500px) {
    .content-slide {
      width: 90%;
    }
  }
</style>
