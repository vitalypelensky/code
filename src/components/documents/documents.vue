<template>
  <div class="wrapper" v-loading="loading" element-loading-background="rgba(255, 255, 255, 0.9)">
    <titleBlock :title="'Інформаційна відкритість'" :backgroundPhoto="require('@/assets/image/doc.jpg')"/>
    <div class="padding-wrapper-small">
      <div class="sizeL center margin-top">Оберіть групу</div>
      <div class="groups">
        <el-radio-group v-model="group" @change="changeGroup">
          <el-radio-button v-for="(documentsGroup, index) in documentGroups" :key="index" :label="index"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="group center">
<!--        <p class="sizeL">{{index == 'no_group' ? 'Без групи' : index}}</p>-->
      <div class="wrapper-news justifyContent-start-alignItem-flexEnd">
          <div class="wrapper-document justifyContent-spaceBetween-column" v-for="(document, indexDocument) in documentGroups[group]" :key="document.id">
            <div v-if="document.isImageType" class="photo" :style="{backgroundImage: `url(${document.path})`}"/>
            <div v-else class="document">
              <iframe
                className="doc"
                :src="`https://docs.google.com/viewerng/viewer?url=${document.path}&a=gt&embedded=true`"
                frameborder="0"
                width="100%"
                height="100%"
              />
            </div>
            <p class="sizeM title-document">{{document.name}}</p>
            <el-button @click="saveDocument(document.path)" class="button" type="primary">Зберегти</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import titleBlock from '../elements/title-block'
  import api from './api'
  export default {
    name: "documents",
    components:{titleBlock},
    data(){
      return{
        documentGroups: {},
        loading: true,
        group: '',
        groups:null
      }
    },
    methods:{
      changeGroup(value){
        console.log(value)
        this.group = value
      },
      getAllDocuments(){
        this.loading = true
        api.get_documents()
          .then(this.successGetDocuments)
          .catch(this.errorGetDocuments)
      },
      successGetDocuments({data}){
        console.log(data,'documents')
        let dataDocumentation = JSON.parse(JSON.stringify(data))
        for(let i in dataDocumentation){
          dataDocumentation[i].forEach(item=>{
            item.isImageType = this.checkIfIsPhoto(item.path)
          })
        }
        this.documentGroups = dataDocumentation
        this.loading = false
      },
      errorGetDocuments(error){
        console.log(error)
        this.loading = false
      },
      checkIfIsPhoto(fileUrl){
        let images = ['jpg', 'jpeg', 'tif', 'tiff', 'png', 'gif', 'svg', 'bmp', 'dib', 'raw'];
        let parts, ext = ( parts = fileUrl.split("/").pop().split(".") ).length > 1 ? parts.pop() : "";
        console.log(ext)
        return images.includes(ext)
      },
      saveDocument(url){
        let link_url = document.createElement("a")
        link_url.download = url.substring((url.lastIndexOf("/") + 1), url.length);
        link_url.href = url
        link_url.target= '_blank'
        document.body.appendChild(link_url);
        link_url.click();
        document.body.removeChild(link_url);
      }
    },
    created() {
      this.getAllDocuments()
    }
  }
</script>

<style scoped>
  .wrapper{
    /*padding-top: 30px;*/
    padding-bottom: 30px;
    background-color: #F6F6F6;
  }
  .wrapper-news{
    align-items: stretch;
    position: relative;
    min-height: 150px;
    flex-wrap: wrap;
  }
  .margin-top{
    margin-top: 50px;
  }
  .wrapper-document{
    align-items: stretch;
    padding: 20px 0px;
    margin: 20px 20px;
    width: calc(25% - 52px);
    align-content: center;
    flex-basis: auto;
    border: 1px solid #878997;
    padding: 5px;
    border-radius: 10px;
    -webkit-box-shadow: 9px 9px 18px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 9px 18px 0px rgba(0,0,0,0.75);
    box-shadow: 9px 9px 18px 0px rgba(0,0,0,0.75);
    /*flex-grow: 1;*/
    /*cursor: pointer;*/
  }
  .document{
    width: 100%;
    height: 300px;
    margin-bottom: 16px;
  }
  .photo{
    width: 100%;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 16px;
  }
  .title{
    /*margin: 10px 0px;*/
    line-height: 50px;
  }
  .button{
    width: 100%;
    margin-top: 10px;
  }
  .group{
    margin-top: 50px;
  }
  .group > p{
    border-bottom: 1px solid #878997;
    padding-bottom: 10px;
  }
  .groups{
    display: flex;
    justify-content: center;
    margin: 30px 0px
  }
  .title-document{
    word-break: break-word;
  }
  .padding-wrapper-small{
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (max-width: 992px) {
    .wrapper-document{
      width: calc(50% - 52px);
      /*cursor: pointer;*/
    }

  }
  @media screen and (max-width: 768px) {
    .wrapper-document{
      width: 100%;
      /*cursor: pointer;*/
    }

    .header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
