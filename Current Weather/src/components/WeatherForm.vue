<!-- Template that holds the input from the user, and also holds the WeatherResult data -->
    <template>
        <div>
            <!-- User input -->
                <input type="text" id="zipCode" placeholder="Insert ZIP Code here" maxlength="5"/>
                <select id="units">
                    <option value='F'>Fahrenheit</option>
                    <option value='C'>Celsius</option>
                </select>
                <input type="button" v-on:click="validateAndSend" value="View the weather">
                <h3 id='invalid-input' class="invalid-input-hidden"> INPUT MUST BE A 5 DIGIT NUMBER </h3>
            <!-- Vue component that shows the result -->    
                <WeatherResult :status="this.status" :result="this.weatherResult" :unit="this.selectedUnit"/>
        </div>
    </template>

<!-- Script that holds all of the data for the website. 
    This is wher Axios gets called, and where data is stored to be referenced elsewhere. -->
        <script>
            //Import the WeatherResult VUE component and the Axios module
                import WeatherResult from './WeatherResult.vue';
                import axios from 'axios'

            //Export this and the WeatherResult component as "WeatherForm"
                export default {
                    name: "WeatherForm",
                    components:
                    {
                        //The WeatherResult element/component
                            WeatherResult
                    },
            //Where the data is stored        
                data()
                {
                    return {
                        //The weatherResult array
                            //Setting the temp to an empty string to prevent errors being
                            //thrown when the page loads (as this doesn't exist yet until Axios says so)
                            weatherResult: 
                            {
                                main:
                                    {
                                            temp: -100000.0
                                    }
                            },
                        //Var for the unit selected by the user
                        selectedUnit: '',
                        status: ''
                    }
                },
            //Methods used to validate user input and trigger Axios
                methods:
                {
                    // Validating the ZIP code is in a correct format before actually
                        // having Axios do it's thing.
                        validateAndSend()
                        {
                            //Get the zipCode and the invalidInput from the page
                                var zipCode = document.getElementById("zipCode");
                                var invalidInput = document.getElementById('invalid-input');

                            //Using RegEx to see if the zipCode matches requirements
                            if ((zipCode.value).match('[0-9][0-9][0-9][0-9][0-9]')) {
                                invalidInput.className = 'invalid-input-hidden';
                                this.getWeather();
                            }
                            else invalidInput.className = 'invalid-input-shown';
                        },
                    // Get the weather with an Axios call. This function is only called
                        //If validateAndSend() passed and called this.
                        getWeather()
                        {
                            // Get and set data from the site
                                var zipCode = document.getElementById("zipCode");
                                var selectedUnit = document.getElementById('units');
                                var unit;

                                this.selectedUnit = selectedUnit.value;

                                if (selectedUnit.value == 'F')
                                    unit = 'imperial'
                                else
                                    unit = 'metric'

                            //Axios call the API
                                axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode.value + '&units=' + unit + '&appid=ba3445903951460cb44b581c0e56a8f3')
                                    //This runs first, tries to get data from the API
                                        .then(
                                            (response) => {
                                                // Set the weatherResult to the response from the Axios call
                                                    this.weatherResult = response.data
                                                // Set the status to something other than 'bad' so that the
                                                    // 'city not found' message will show
                                                    this.status = '';
                                            })
                                    // This catches any error that would come from the Axios call (404's or 400's)
                                        // Helps reduce the amount of error codes in the console
                                        .catch(
                                            (error) => {
                                                if (error.response) {
                                                    // Log that no data could be found
                                                        console.log('Could not load the data. Possibly a 404 or 400.\nClearing the array.');
                                                    // Set the status to 'bad' to show that no city was found
                                                        this.status = 'bad'
                                                    // Set weatherResult's temp to -100000.0 so that all of the result elements will be hidden
                                                        this.weatherResult =  
                                                            {
                                                                main: { temp: -100000.0 }
                                                            }}
                                                    }
                                                )
                        }
                }
            }
        </script>

// Style scoped to only this file
    <style scoped>
        input:nth-of-type(1) {
            background-color: white;
            color: black;
            border-radius: 10px;
            padding-left: 10px;
            padding-top: 12.5px;
            padding-bottom: 12.5px;
            width: 56.25%;
            height: 30px;
            outline-width: 0;
            font-size: 30px;
        }
        select, option {
            color: black;
            border-radius: 10px;
            outline-width: 0;
            padding-top: 15px;
            padding-bottom: 15px;
            font-size: 18px;
            width: 15.0%;
            position: relative;
            text-align: center;
            top: -5px;
            background-color: rgb(122, 189, 211);
        }
        input:nth-of-type(2) {
            color: black;
            border-radius: 10px;
            width: 20%;
            outline-width: 0;
            padding-top: 15px;
            padding-bottom: 15px;
            font-size: 20px;
            position: relative;
            text-align: center;
            top: -5px;
            background-color: rgb(122, 189, 211);
            transition: background-color .15s, color .15s;
        }
        input:nth-of-type(2):hover {
            background-color: rgb(196, 239, 253);
        }
        input:nth-of-type(2):active {
            background-color: rgb(82, 128, 143);
            color: white;
        }
        * {
            text-align: left;
            background-color: rgb(78, 121, 121);
            padding: 10px;
            border-radius: 2vw;
        }
        .invalid-input-hidden
        {
            opacity: 0;
            margin-top: -10px;
        }

        .invalid-input-shown
        {
            color: rgb(253, 168, 168);
            opacity: 1;
            margin-top: -10px;
            transition: opacity .25s linear;
        }
    </style>