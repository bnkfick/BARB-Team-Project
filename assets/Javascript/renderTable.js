$(function () {
  
    var peakInfo = [
        {
            rank: 1,
            peakName: "Mount Elbert",
            elevation: 14433,
            weatherLink: ["https://api.weather.gov/gridpoints/PUB/39,106/forecast"],
            // wind: varWind,
            // temp: varTemp,
            // dist: varDistance,
            // driveDirections: varDriveDirections,
            trails: [
                {
                    routeID: 1,
                    routeName: "Mount Elbert - NE Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21808.789909414772!2d-106.44900905419223!3d39.13561769450933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a9896bb697417%3A0x7db7846336fd41c1!2sMt+Elbert+Trailhead+parking+lot%2C+Twin+Lakes%2C+CO+81251!3m2!1d39.1518473!2d-106.41218219999999!4m5!1s0x876aa1f6a3ec0407%3A0xb137245172b73c6!2sMount+Elbert%2C+Colorado!3m2!1d39.1178157!2d-106.4452306!5e1!3m2!1sen!2sus!4v1543515830920",
                    trailHeadLocation: "39.1518473,-106.4121822",
                    mileage: 9.5,
                    gain: 4700,
                    difficulty: 1,
                    exposure: 1,
                },
                {
                    routeID: 2,
                    routeName: "Mount Elbert - Box Creek Couloirs",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21808.789909414772!2d-106.44900905419223!3d39.13561769450933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a9896bb697417%3A0x7db7846336fd41c1!2sMt+Elbert+Trailhead+parking+lot%2C+Twin+Lakes%2C+CO+81251!3m2!1d39.1518473!2d-106.41218219999999!4m5!1s0x876aa1f6a3ec0407%3A0xb137245172b73c6!2sMount+Elbert%2C+Colorado!3m2!1d39.1178157!2d-106.4452306!5e1!3m2!1sen!2sus!4v1543515830920",
                    trailHeadLocation: "39.1518473,-106.4121822",
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
            elevation: 14270,
            weatherLink: ["https://api.weather.gov/gridpoints/PUB/40,106/forecast"],
            // wind: varWind,
            // temp: varTemp,
            // dist: varDistance,
            // driveDirections: varDriveDirections,
            trails: [
                {
                    routeID: 1,
                    routeName: "Gray's Peak - North Slopes",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.660124769507!2d-105.81869269847468!3d39.64724068017239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a537ad25d62eb%3A0xee3b27c04410d6ee!2sGrays+Peak%2C+Colorado!3m2!1d39.6336054!2d-105.81716399999999!5e1!3m2!1sen!2sus!4v1543523584382",
                    trailHeadLocation: "39.660789,-105.784648",
                    mileage: 8.00,
                    gain: 3000,
                    difficulty: 1,
                    exposure: 1,
                },
                {
                    routeID: 2,
                    routeName: "Gray's Peak - SW Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.660124769507!2d-105.81869269847468!3d39.64724068017239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a537ad25d62eb%3A0xee3b27c04410d6ee!2sGrays+Peak%2C+Colorado!3m2!1d39.6336054!2d-105.81716399999999!5e1!3m2!1sen!2sus!4v1543523584382",
                    trailHeadLocation: "39.660789,-105.784648",
                    mileage: 6.50,
                    gain: 3000,
                    difficulty: 3,
                    exposure: 3,
                },
            ],
        }
    ];
        
    
    
    // console.log(peakInfo);

    function renderMtnTables() {
        $.each(peakInfo, function (key, value) {
            var $newMtnTable = $(".mtn-template").clone();
            
            $newMtnTable.removeClass("mtn-template").attr("id", "mtn-" + this.rank);
            
            //Main Mountain table
            $newMtnTable.find("#conditions").attr("id", "mtn-" + this.rank + "-conditions");
            //Write weather condition if statement here to change BG Color
            $newMtnTable.find(".rank").text(this.rank);
            $newMtnTable.find(".name").text(this.peakName);
            $newMtnTable.find(".elevation").text(this.elevation);
            // $newMtnTable.find(".windspeed").text(varWind);
            // $newMtnTable.find(".temp").text(varTemp);
            // $newMtnTable.find(".distance").text(varDist);
            // $newMtnTable.find(".directions").text(varDirectionsLink);
            $newMtnTable.insertAfter($("#mtn-render"));

            //Render Routes Sub-Tables--------
            $newMtnTable.find("#routes").attr("id", "mtn-" + this.rank + "-routes");
            
            $.each(this.trails, function (key,value) {
                var $newRouteTable = $(".route-template").clone();
                
                $newRouteTable.removeClass("route-template").attr("id", "route-" + this.routeID);

                $newRouteTable.find(".route-name").text(this.routeName);

                $newRouteTable.insertAfter($("#route-render"));
            });
                        
           
        });
            

    };

    function renderRouteTable() {
        var $newRouteTable = $(".route-template").clone();
        // console.log("XXXXXXXXXXX");
        // console.log(peakInfo.trails[0].routeName)

        // $newRouteTable.removeClass("route-template").attr("id", "route-" + this.routeID);

        // $newRouteTable.find(".route-name").text(this.routes[0].routeName + "hello");

        $newRouteTable.insertAfter($("#route-render"));
    };

        
    renderMtnTables();
    console.log("trails trails trails");
    console.log(peakInfo[0].trails[0].routeName);





































});