<template>
  <div v-loading="loading" element-loading-background="rgba(255, 255, 255, 1)">
    <template v-if="events">
      <slider :news="events"/>
      <lastNews :news="events"/>
    </template>
    <aboutUs :aboutDescription = 'aboutDescription'/>
    <maps/>
  </div>
</template>

<script>
  import slider from './components/slider'
  import lastNews from './components/lastNews'
  import aboutUs from './components/aboutUs'
  import maps from '../elements/maps'
  import api from './api'
    export default {
        name: "main-page",
      components:{
        slider,
        lastNews,
        aboutUs,
        maps
      },
        data() {
          return {
            aboutDescription: '',
            events: null,
            loading: false
          }
        },
      methods: {
       async getData(){
          this.toggleLoading(true)
          try {
            let {data} = await api()
            this.successGetData(data)
          } catch (error) {
            this.errorGetData(error)
          } finally {
            this.toggleLoading(false)
          }
        },
        successGetData({data}){
          this.setAboutDescription(data.about_description.content)
          let events = this.deepCopyObj(data.event)
          this.addShortDescriptionForEvent(events)
          this.setFirstSix(events)
        },
        addShortDescriptionForEvent(events){
          events.forEach(item => {
            item.shortDescription = item.description.length > 150 ? `${item.description.slice(0,200)}...` :  item.description
          })
        },
        setAboutDescription(content){
          this.aboutDescription = content
        },
        deepCopyObj(obj){
         return JSON.parse(JSON.stringify(obj))
        },
        toggleLoading(value){
          this.loading = value
        },
        setFirstSix(events){
          this.events = events.splice(0,6)
        },
        errorGetData(error){
          console.log(error)
        }
      },
      created() {
          this.getData()
      }
    }
</script>

<style scoped>

</style>
