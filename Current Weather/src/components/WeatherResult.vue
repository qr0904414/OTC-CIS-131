<!--
    Created by: Quinn Ridings
    Last modified date: 12/13/2020

    Assignment for: OTC-CIS-131
-->

<!-- Creating the template -->
<template>
    <div class='root'>
        <!-- This line is for if the user put in a bad ZIP code and nothing was returned-->
            <p class='status' v-if="status == 'bad'"> There is no city at this zip code! </p>
        <!-- As long as the Temperature isn't -100000 then data will be displayed 
                used to hide this section of the template until a valid zip code was entered -->
            <div v-if="result.main.temp != -100000.0">
                <!-- Display the city name -->
                    <h1> {{result.name}} 
                        <img :src="'https://openweathermap.org/img/wn/' + result.weather[0].icon + '@2x.png'" /> 
                    </h1> 
                <!-- Table of data for temp, sky conditions, humidity, etc. -->
                    <table class='data'>
                        <tr>
                            <td> Temperature: </td>
                            <td> {{ (result.main.temp).toFixed(0) }} °{{unit}} </td>
                        </tr>
                        <tr>
                            <td> Feels like: </td>
                            <td> {{ (result.main.feels_like).toFixed(0) }} °{{unit}} </td>
                        </tr>
                        <tr>
                            <td> Humidity: </td>
                            <td> {{result.main.humidity}}% </td>
                        </tr>
                        <tr>
                            <td> Sky condition: </td>
                            <td> {{ result.weather[0].main }} </td>
                        </tr>
                    </table>
            </div>
    </div>
</template>

<!-- Script to export the props and the name of this to be viewed outside of this file-->
    <script>
    export default {
        name: "WeatherResult",
        props: ['result', 'unit', 'status'],
    }
    </script>

<!-- CSS Styles scoped to this file only -->
    <style scoped>
        .root
        {
            padding-top: 0px;
        }
        * {
            background-color: rgb(122, 189, 211);
            color: black;
            padding: 10px;
            margin: 0;
        }
        *:first-child
        {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        *:last-child
        {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        h1 {
            font-size: 60px;
            padding-left: 25px;
        }
        img {
            width: 75px;
            height: 75px;
            float: left;
            position: relative;
            padding: 0px 0px 0px 0px;
            background-color: rgba(0, 0, 0, 0);
        }
        .data {
            font-size: 30px;
            tab-size: 4;
        }
        .status
        {
            font-size: 28px;
            padding: 15px;
            text-align: center;
        }
    </style>