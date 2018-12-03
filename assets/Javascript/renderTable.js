$(function () {
    //Drag and Drop
    // $("#sortable-mtns").sortable({
    //     // connectWith: ".connectedSortable"
    // }).disableSelection();

    

    var peakInfo = [
        {
            rank: 1,
            peakName: "Mount Elbert",
            elevation: 14433,
            peakLocation: "39.1518473,-106.4121822",
            weatherLink: ["https://api.weather.gov/gridpoints/PUB/39,106/forecast"],
            trails: [
                {
                    routeID: 11,
                    routeName: "Mount Elbert - NE Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21808.789909414772!2d-106.44900905419223!3d39.13561769450933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a9896bb697417%3A0x7db7846336fd41c1!2sMt+Elbert+Trailhead+parking+lot%2C+Twin+Lakes%2C+CO+81251!3m2!1d39.1518473!2d-106.41218219999999!4m5!1s0x876aa1f6a3ec0407%3A0xb137245172b73c6!2sMount+Elbert%2C+Colorado!3m2!1d39.1178157!2d-106.4452306!5e1!3m2!1sen!2sus!4v1543515830920",
                    trailHeadLocation: "39.1518473,-106.4121822",
                    mileage: 9.5,
                    gain: 4700,
                    difficulty: 1,
                    exposure: 1,
                },
                {
                    routeID: 12,
                    routeName: "Mount Elbert - Box Creek Couloirs",
                    routeMapEmbed:"https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d25508.894514807103!2d-106.4308786298138!3d39.105241155716435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m4!2sUnnamed+Road%2C+Twin+Lakes%2C+CO+81251!3m2!1d39.099329999999995!2d-106.36713999999999!4m5!1s0x876aa1f6a3ec0407%3A0xb137245172b73c6!2sMount+Elbert%2C+Colorado!3m2!1d39.1178157!2d-106.4452306!5e1!3m2!1sen!2sus!4v1543780071007",
                    trailHeadLocation: "39.09933, -106.36714",
                    mileage: 8.5,
                    gain: 4150,
                    difficulty: 3,
                    exposure: 3,
                },
            ],
        },
        {
            rank: 9,
            peakName: "Gray's Peak",
            peakLocation: "39.660789,-105.784648",
            elevation: 14270,
            weatherLink: ["https://api.weather.gov/gridpoints/PUB/40,106/forecast"],
            trails: [
                {
                    routeID: 91,
                    routeName: "Gray's Peak - North Slopes",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.660124769507!2d-105.81869269847468!3d39.64724068017239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a537ad25d62eb%3A0xee3b27c04410d6ee!2sGrays+Peak%2C+Colorado!3m2!1d39.6336054!2d-105.81716399999999!5e1!3m2!1sen!2sus!4v1543523584382",
                    trailHeadLocation: "39.660789,-105.784648",
                    mileage: 8.00,
                    gain: 3000,
                    difficulty: 1,
                    exposure: 1,
                },
                {
                    routeID: 92,
                    routeName: "Gray's Peak - SW Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.660124769507!2d-105.81869269847468!3d39.64724068017239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a537ad25d62eb%3A0xee3b27c04410d6ee!2sGrays+Peak%2C+Colorado!3m2!1d39.6336054!2d-105.81716399999999!5e1!3m2!1sen!2sus!4v1543523584382",
                    trailHeadLocation: "39.60045,-105.83816",
                    mileage: 10.25,
                    gain: 3800,
                    difficulty: 3,
                    exposure: 3,
                },
            ],
        },//Insert next mtn obj after this
        {
            rank: 11, 
            peakName: "Torrey's Peak",
            elevation: 14267,
            weatherLink: ["https://api.weather.gov/gridpoints/PUB/40,106/forecast"],
            trails: [
                {
                    routeID: 111,
                    routeName: "Torrey's Peak - Kelso Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.250286895884!2d-105.8205323984709!3d39.64877532942564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a5373a0c13d2f%3A0x8b1a1aefcab5da3f!2sTorreys+Peak%2C+Colorado!3m2!1d39.6427647!2d-105.82139819999999!5e1!3m2!1sen!2sus!4v1543523745630",
                    trailHeadLocation: "39.660789,-105.784648",
                    mileage: 6.75,
                    gain: 3100,
                    difficulty: 3,
                    exposure: 4,
                },
                {
                    routeID: 112,
                    routeName: "Torrey's Peak - Emperor Couloir",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.250286895884!2d-105.8205323984709!3d39.64877532942564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a5373a0c13d2f%3A0x8b1a1aefcab5da3f!2sTorreys+Peak%2C+Colorado!3m2!1d39.6427647!2d-105.82139819999999!5e1!3m2!1sen!2sus!4v1543523745630",
                    trailHeadLocation: "39.660789,-105.784648",
                    mileage: 9.5,
                    gain: 4500,
                    difficulty: 4,
                    exposure: 3,
                },
            ]
        },
    ];
        
    var aK = "AIzaSyC7lOHjdHyf_NrgsyZfqzrgue8qiiTdu2s";
    var meters = 0;
    var distance;

    function getDistance(i, target){
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=Denver,CO&destination="+ peakInfo[i].peakLocation+"&key="+aK,
            method: "GET"
        }) .then(function(response){
            console.log(response);
            //For now if more than one route is listed we will simply go with the first. It will make the logic to write the loop more manageable. 
            //I also don't feel that all our our info is accurate.
            meters = 0;
            if(response.status === "ZERO_RESULTS"){
                distance = "Road Closed for Winter";
            } else {
            for(n = 0; n < response.routes[0].legs.length; n++);
            meters += parseFloat(response.routes[0].legs[0].distance.value);
            // console.log(meters);
            };
            if(meters !== 0){
                distance = Math.round((meters * 3.281) / 5280);
                console.log(distance + " miles");
                console.log(target);
                console.log(i);
                $("#mtn-"+(target)+"-conditions .distance").text(distance + "mi");
            } else {
                console.log(distance);
                console.log(target);
                console.log(i);
                $("#mtn-"+(target)+"-conditions .distance").text(distance);
            };
        
        });
    }

    var i = 0;
    function renderMtnTables() {
        $.each(peakInfo, function (key, value) {
            var $newMtnTable = $(".mtn-template").clone();
            
            $newMtnTable.removeClass("mtn-template").attr("id", "mtn-" + this.rank);
            
            //Main Mountain table
            
            var windConditions = $newMtnTable.find("#conditions").attr("id", "mtn-" + this.rank + "-conditions");
            
            $newMtnTable.find(".rank").text(this.rank);
            $newMtnTable.find(".name").text(this.peakName);
            $newMtnTable.find(".elevation").text(this.elevation);
            // $newMtnTable.find(".windspeed").text(varWind);
            // $newMtnTable.find(".temp").text(varTemp);
            target = this.rank;
            getDistance(i, target);
            i++;
            
            // Create unique IDs for weather TDs
            $newMtnTable.find(".windspeed").attr("id", "mtn-" + this.rank + "-wind");
            $newMtnTable.find(".temperature").attr("id", "mtn-" + this.rank + "-temperature");
            $newMtnTable.find(".wind-direction").attr("id", "mtn-" + this.rank + "-wind-direction");
            $newMtnTable.find(".short-forecast").attr("id", "mtn-" + this.rank + "-short-forecast");

            target = this.rank;
            getWeatherConditions(i, target);
            i++;
            
            
            // $newMtnTable.find(".distance").text(getDistance(i));
            


            
            // $newMtnTable.find(".directions").text(varDirectionsLink);
            $newMtnTable.insertAfter($("#mtn-render"));

            //Render Routes Sub-Tables--------
            $newMtnTable.find("#routes").attr("id", "mtn-" + this.rank + "-routes");
            
            $.each(this.trails, function (key,value) {
                var $newRouteTable = $(".route-template").clone();
                
                $newRouteTable.removeClass("route-template").attr("id", "route-" + this.routeID);

                $newRouteTable.find(".route-name").text(this.routeName);
                $newRouteTable.find(".route-mileage").text(this.mileage);
                $newRouteTable.find(".route-gain").text(this.gain);
                
                //ROUTE DIFFICULTY 
                var selectRouteDifficulty = $newRouteTable.find(".route-difficulty");
                var difficulty = this.difficulty;
                var easy = '<i class="fas fa-circle fa-2x"></i>';
                var moderate = '<i class="fas fa-square fa-2x"></i>';
                var hard = '<i class="fas fa-mountain fa-2x"></i>';
                var extreme = '<i class="fas fa-mountain fa-2x"></i><i class="fas fa-mountain fa-2x"></i>';

                if (difficulty === 4) {
                    selectRouteDifficulty.append(extreme);
                } else if (difficulty === 3) {
                    selectRouteDifficulty.append(hard);
                } else if (difficulty === 2) {
                    selectRouteDifficulty.append(moderate);
                } else {
                    selectRouteDifficulty.append(easy);
                }
                
                
                //ROUTE EXPOSURE: 
                var selectRouteExposure = $newRouteTable.find(".progress-bar");
                var exposure = this.exposure;
                
                if (exposure === 4) {
                    selectRouteExposure.removeClass("bg-success").addClass("bg-danger").attr("style", "width: 100%").text("EXTREME");
                } else if (exposure === 3) {
                    selectRouteExposure.removeClass("bg-success").addClass("bg-warning").attr("style", "width: 75%").text("HIGH");
                } else if (exposure === 2) {
                    selectRouteExposure.removeClass("bg-success").attr("style", "width: 50%").text("MODERATE");
                } else {
                    // selectRouteExposure.css("background-color", "green");
                }

                // $newRouteTable.find(".route-exposure").text(this.exposure);

                //assigns route ID to route desciption beta dropdown
                $newRouteTable.find("#route-x-beta").attr("id", "route-" + this.routeID + "-beta");

                //appends routeMapEmbed
                var routeMap = $("<iframe>").attr("width", 600).attr("height", 450).attr("frameborder",0).attr("style","border:0").attr("src", this.routeMapEmbed);
                $newRouteTable.find(".routeMapEmbed").append(routeMap);

                //appends trailHead map
                // var aK = "AIzaSyC7lOHjdHyf_NrgsyZfqzrgue8qiiTdu2s";
                // var meters = 0;
                // var distance;
                var trailHeadMap = $("<iframe>").attr("width", 600).attr("height", 450).attr("frameborder", 0).attr("style", "border:0").attr("src", "https://www.google.com/maps/embed/v1/place?key=" + aK + "&q=" + this.trailHeadLocation);
                $newRouteTable.find(".routeMapEmbed").append(trailHeadMap);

                //Create route description in object and code here

                

                $newRouteTable.insertAfter($("#route-render"));
            });
                        
           
        });
            

    };
    
    //Get Wind and Temperature
    function getWeatherConditions(i, target) {
        var times = [];
        $.ajax({
        url: peakInfo[i].weatherLink,
        method: "GET"
    
        }).then(function(response){
        // console.log(response);
            for (var n = 0; n < 6; n++) {
                times.push({
                    number: response.properties.periods[n].number,
                    startTime: response.properties.periods[n].startTime,
                    temperature: response.properties.periods[n].temperature,
                    windSpeed: response.properties.periods[n].windSpeed,
                    windDirection: response.properties.periods[n].windDirection,
                    shortForecast: response.properties.periods[n].shortForecast,
                    detailedForecast: response.properties.periods[n].detailedForecast
                });
            
            };
            console.log(times[0]);

            //Render weather to tables
            $("#mtn-" + (target) + "-wind").text(times[0].windSpeed);
            $("#mtn-" + (target) + "-temperature").text(times[0].temperature + " F");
            $("#mtn-" + (target) + "-wind-direction").text(times[0].windDirection);
            // $("#mtn-" + (target) + "-short-forecast").text(times[0].shortForecast);
            
            //Conditional Formatting for Windspeed
            var windSpeedString = times[0].windSpeed;
            var windSpeedRange = windSpeedString.match(/\d+/g).map(Number);
            //This returns array of low and high wind speeds
            var windConditions = $("#mtn-" + (target) + "-wind") 

            if (windSpeedRange[1] > 75) {
                windConditions.css("background-color", "rgba(191, 78, 63, 0.4)")
            } else if ( (windSpeedRange[0] > 30) && (windSpeedRange[1] <= 75 ) ) {
                windConditions.css("background-color", "rgba(229, 238, 73, 0.4)")
            } else {
                windConditions.css("background-color", "rgba(63, 191, 63, 0.4)")
            }

            //Conditional Formatting for Temperature
            var temp = times[0].temperature;

            var tempConditions = $("#mtn-" + target + "-temperature");

            if (temp < 32) {
                tempConditions.css("background-color", "rgb(30, 201, 255, 0.4)");
            } else if ((temp > 32) && (temp < 60) ) {
                tempConditions.css("background-color", "rgba(63, 191, 63, 0.4)");
            } else {
                tempConditions.css("background-color", "rgba(191, 78, 63, 0.4)");
            }

            //Conditional Formatting for Short Forecast
            var shortForecast = times[0].shortForecast;

            var shortForecastConditions = $("#mtn-" + (target) + "-short-forecast");

            if (shortForecast === "Chance Snow Showers") {
                shortForecastConditions.css('background-image', 'url("http://icons.iconarchive.com/icons/icons8/christmas-flat-color/256/snowflake-icon.png")')
            } 
        });
        
        
    };
    
          
    

    //Toggle Routes View----------------------------------------
    $(".routes-table").hide();
    
    $("#table-list").on("click", "#plus-btn", function () {
        if ($(this).hasClass("fa-plus-square")) {
            $(this).removeClass("fa-plus-square")
        } else {
            $(this).addClass("fa-plus-square");
        }

        var mtnID = $(this).parent().parent().parent().parent().attr("id")
        console.log(mtnID);

        $("#" + mtnID + "-routes").slideToggle(500, "swing", function () { 
        });
    });

    //Toggle Route Beta View
    $(".route-beta").hide();

    $("#table-list").on("click", "#beta-btn", function () {
        if ($(this).hasClass("fa-map-marked-alt")) {
            $(this).removeClass("fa-map-marked-alt")
        } else {
            $(this).addClass("fa-map-marked-alt");
        }
        var routeID = $(this).parent().parent().parent().parent().attr("id");
        console.log(routeID)
        
        $("#"+routeID + "-beta").slideToggle(500, "swing", function () {  
        });
    });





    //Renders   
    renderMtnTables();
    // renderWindSpeed();





    























});