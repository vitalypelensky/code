<template>
    <div class="wrapper padding-wrapper">
      <div class="header justifyContent-spaceBetween-alignItem-end">
        <p class="sizeXXL title">Останні новини</p>
        <p @click="$router.push('/news')" class="sizeM color-link underline all-news">Усі новини</p>
      </div>
      <div class="wrapper-news justifyContent-spaceAround">
        <div class="new justifyContent-spaceBetween-column" v-for="(oneNew, index) in news" :key="index">
          <div>
            <div class="photo" :style="{backgroundImage: `url(${oneNew.photos.length && oneNew.photos[0].photo})`}"/>
            <div class="justifyContent-start-alignItem-center">
              <p class="sizeM type-news">{{oneNew.group}}</p>
              <div class="doter"/>
              <p>{{oneNew.date}}</p>
            </div>
            <p class="title color-link sizeL">{{oneNew.title}}</p>
            <p class="description sizeXS">{{oneNew.shortDescription}}</p>
          </div>
          <button @click="$router.push(`/news/${oneNew.id}`)" class="button-details sizeS">Детальніше</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "lastNews",
      props:{
          news: null
      },
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
  .wrapper{
    padding-top: 10px;
    padding-bottom: 100px;
  }
  .wrapper-news{
    align-items: stretch;
    flex-wrap: wrap;
  }
  .all-news{
    cursor: pointer;
  }
  .new{
    padding: 20px 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 32%;
    /*cursor: pointer;*/
  }
  .photo{
    width: 100%;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 16px;
  }
  .doter{
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #121212;
    margin: 0px 8px;
  }
  .title{
    /*margin: 10px 0px;*/
    /*line-height: 50px;*/
    padding: 15px 0px;
  }
  .description{
    line-height: 22px;
  }
  .type-news{
    width: calc(100% - 110px)
  }

  @media screen and (max-width: 992px) {
    .new{
      width: 49%;
      /*cursor: pointer;*/
    }
    .wrapper{
      padding-top: 100px;
    }
  }
  @media screen and (max-width: 500px) {
    .new{
      width: 100%;
      /*cursor: pointer;*/
    }
    .header{
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
