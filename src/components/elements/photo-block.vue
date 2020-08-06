<template>
  <div v-if="photos" class="padding-wrapper">
    <p class="title sizeXL color-link">Фото</p>
    <div class="photos justifyContent-start">
      <div class="photo"
           v-for="(photo, imageIndex) in arrayPhotos"
           :key="imageIndex"
           @click="index = imageIndex"
           :style="{backgroundImage: `url(${photo})`}"/>
      <gallery :images="arrayPhotos" :index="index" @close="index = null"/>
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery'
  export default {
        name: "photo-block",
        components:{'gallery': VueGallery},
        props:{
          photos:null
        },
        data(){
          return{
            index:null
          }
         },
      computed:{
          arrayPhotos(){
            console.log(this.photos)
            let array = []
            this.photos.forEach(item =>{
               array.push(item.photo)
            })
            return array
          }
      }
    }
</script>

<style scoped>
  .title{
    margin-bottom: 32px;
  }
  .photos{
    flex-wrap: wrap;
  }
  .photo{
    width: 32%;
    height: 500px;
    margin-top: 30px;
    margin-right: 2%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
  .photo:nth-child(3n+3){
    margin-right: 0%;
  }
  @media screen and (max-width: 992px) {
    .photo{
      width: 49%;
    }
    .photo:nth-child(3n+3){
      margin-right: 2%;
    }
    .photo:nth-child(2n+2){
      margin-right: 0%;
    }
  }
  @media screen and (max-width: 768px) {
    .photo{
      width: 100%;
    }
    .photo:nth-child(3n+3){
      margin-right: 0%;
    }
    .photo:nth-child(2n+2){
      margin-right: 0%;
    }
  }
</style>
