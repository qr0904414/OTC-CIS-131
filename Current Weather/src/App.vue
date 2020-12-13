<!--
    Created by: Quinn Ridings
    Last modified date: 12/13/2020

    Assignment for: OTC-CIS-131
-->

<!-- Main data for the page that doesn't change -->
  <template>
    <div id="app">
      <h1> OpenWeather's Current Weather </h1>
      <WeatherForm />
    </div>
  </template>

<!-- Script to import the WeatherForm and export this component -->
  <script>
    import WeatherForm from './components/WeatherForm.vue'

    export default {
      name: 'App',
      components: {
        WeatherForm
      }
    }
  </script>

<!-- Style that is not localized to this component
     So this style affects everything, unless overriden later
-->
  <style>
    * {
      background-color: rgb(158, 158, 158);
      color: black;
      padding: 0;
      margin: 1%;
    }
    #app
    {
      text-align: center;
    }
    h1 {
      padding-bottom: 10px;
    }
  </style>