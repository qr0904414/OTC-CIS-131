<template>
  <div id="app">
    <Header theTitle="Popular TV Shows"/>
    <TVList theTitle="My Tasks" :tvList="rawTVList"/>
  </div>
</template>

<script>
 import Header from './components/Header.vue'
 import TVList from './components/TVList.vue'
 import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    TVList
  },
  data()
  {
    return {
      rawTVList:[]
    }
  },
  mounted()
  {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=06f9613c9f9ff1705f5428c0dad73313&language=en-US&page=1').then(
      (response) => 
      {
        for (var i = 0; i < 4; i++)
        {
          this.rawTVList.push(response.data.results[i]);
        }
    })
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    background: #333;
    color: white;
  }
</style>
