<template>
    <div v-if="contacts" class="wrapper padding-wrapper justifyContent-spaceBetween-alignItem-end">
      <div>
        <p class="sizeXXL title">Наші контакти</p>
        <div>
          <address class="sizeL address">{{contacts.address}}</address>
          <div v-for="(item, index) in contacts.numbers" :key="index">
            <a class="sizeL color-link" :href="`tel: ${item}`">{{item}}</a>
          </div>
        </div>
      </div>
      <div class="soc-network">
        <div class="justifyContent-start-alignItem-center margin-bottom">
          <p class="sizeL margin-right">Email: </p>
          <div>
            <a class="link sizeL color-silver" href="mailto:school67lviv@ukr.net"> school67lviv@ukr.net</a>
          </div>
        </div>
        <div v-for="(item, index) in contacts.networks" :key="index" class="justifyContent-start-alignItem-center">
          <img src="../../assets/image/site.svg" alt="">
         <div>
           <a class="link sizeL color-silver" :href="item">{{item}}</a>
         </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from '../../plugins/axios'
    export default {
        name: "Footer",
      data(){
          return{
            contacts:null
          }
      },
      methods:{
          getData(){
             axios.get('/contacts')
               .then(this.successGetData)
               .catch(this.errorGetData)
          },
        successGetData({data}){
          this.contacts = data.data[0]
          console.log(this.contacts,1111)
        },
        errorGetData(error){
            console.log(error)
        }
      },
      created(){
          this.getData()
      }
    }
</script>

<style scoped>
  .wrapper{
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .title{
    margin-bottom: 36px;
  }
  address{
    margin-bottom: 16px;
  }
  .link{
    text-decoration: none;
  }
  img{
    margin-right: 8px;
  }
  .margin-bottom{
    margin-bottom: 30px;
  }
  .margin-right{
    margin-right: 10px
  }
  @media screen and (max-width: 500px) {
    .wrapper{
      flex-direction: column;
      align-items: center;
    }
    .soc-network{
      margin-top: 30px;
    }

  }
</style>
