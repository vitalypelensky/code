<template>
  <div class="wrapper padding-wrapper justifyContent-spaceBetween-alignItem-center">
    <div class="logo justifyContent-center-alignItem-center" @click="openMainPage">
      <img :src="require('@/assets/image/logo.svg')" alt="">
      <div class="alignItem-center">
        <p class="sizeL">СЗШ</p>
        <p class="sizeXL color-link">№67</p>
      </div>
    </div>
    <nav class="justifyContent-spaceBetween-alignItem-center desktop">
      <router-link
          v-for = "(item, index) in navMenu"
          :key="index"
          class="nav-item alignItem-center"
          :to="item.page">
        {{item.name}}
      </router-link>
    </nav>
    <el-drawer
      class="mobile"
      :visible.sync="drawer"
      size="80%"
      :direction="'rtl'">
      <el-menu
        class="el-menu-vertical-demo">
<!--        <el-submenu index="1">-->
<!--          <template slot="title">-->
<!--            <span>Navigator One</span>-->
<!--          </template>-->
<!--            <el-menu-item index="1-1">item one</el-menu-item>-->
<!--            <el-menu-item index="1-2">item one</el-menu-item>-->
<!--            <el-menu-item index="1-3">item three</el-menu-item>-->
<!--        </el-submenu>-->

        <el-menu-item v-for = "(item, index) in navMenu"
                      @click="drawer=false"
                      :key="index"
                      :index="`${index+1}`">
          <router-link
            class="nav-item alignItem-center"
            :to="item.page">
            {{item.name}}
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-drawer>
    <img class='mobile menu' src="../../assets/image/menu.svg" alt="menu" @click="openMenu">
  </div>
</template>

<script>
    export default {
        name: "Header",
      data(){
          return{
            drawer: false,
            navMenu:[
              {
                name: 'Головна',
                page: '/main'
              },
              {
                name: 'Про нас',
                page: '/about'
              },
              {
                name: 'Новини',
                page: '/news'
              },
              {
                name: 'Гуртки та секції',
                page: '/activities'
              },
              {
                name: 'Інформаційна відкритість',
                page: '/information'
              },
            ]
          }
      },
      methods:{
        openMenu(){
          this.drawer = true
        },
        openMainPage(){
          let path = '/'
          if (this.$route.path !== path)
            this.$router.push(path)
        }
      }
    }
</script>

<style scoped>
  .wrapper{
    height: 140px;
  }
  .logo{
    margin-right: 140px;
    cursor: pointer;
  }
  img{
    width: 80px;
    height: 80px;
    margin-right: 24px;
  }
  nav{
    flex-grow: 1;
  }
  .desktop{
    display: flex;
  }
  .nav-item, .nav-item:active, .nav-item:hover, .nav-item:visited{
    padding: 20px 0;
    cursor: pointer;
    font-weight: 600;
    border-bottom: 2px solid white;
    color: #121212;
    text-decoration: none;
    font-family: 'Raleway';
  }
  .nav-item.active, .nav-item:hover{
    color: #1A187D;
    border-bottom: 2px solid #1A187D;
  }

  .menu{
    width: 25px;
    cursor: pointer;
  }

  .mobile{
    display: none;
  }
  @media screen and (max-width: 992px) {
    .logo {
      margin-right: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    .wrapper{
      height: 80px;
    }
    .logo{
      margin-right: 0px;
    }
   .mobile{
     display: block;
   }
   .desktop{
     display: none;
   }
    img{
      width: 55px;
      height: 55px;
      margin-right: 24px;
    }
    .nav-item, .nav-item:active, .nav-item:hover, .nav-item:visited{
      width: 100%;
      display: inline-block;
      padding: 0px 0;
      cursor: pointer;
      font-weight: 600;
      border-bottom: 2px solid white;
      color: #121212;
      text-decoration: none;
      font-family: 'Raleway';
    }
    .nav-item.active, .nav-item:hover{
      color: #1A187D;
      border-bottom: 2px solid #1A187D;
    }
  }
</style>
