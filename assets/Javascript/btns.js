{/* <button class="btn btn-primary float-left" id="favorites-filter-btn">Favorites</button>
<button class="btn btn-warning float-left" id="wind-speed-filter-btn">Wind</button>
<button class="btn btn-success float-left" id="distance-filter-btn">Distance</button>
<button class="btn btn-danger float-left" id="rank-filter-btn">Rank</button>
<button class="btn btn-primary float-right" id="user-preferences-btn">Save</button> */}
//========================================================//
    //BUTTON CLICKS FOR TABLE FILTER/SORT
    //========================================================//

    //========================================================//
    //The USER is LOGGED IN and CLICKS to view favorites only
    //========================================================//
    $("#preferences").on("click", "#favorites-filter-btn", function () {

        event.preventDefault();

        var mtnFaves = $('.favorite');

        for (i = 0; i < mtnFaves.length; i++) {
            var mtnId = $(mtnFaves[i]).closest('table').attr("id");

            if ($(mtnFaves[i]).attr("value") === "false") {

                if ($(this).attr("data-hide") === "false" || $(this).attr("data-hide") === undefined) {
                    $("#" + mtnId).hide();
                } else if ($(this).attr("data-hide") === "true") {
                    $("#" + mtnId).show();
                }

            }
        }

        if ($(this).attr("data-hide") === "false" || $(this).attr("data-hide") === undefined) {
            $(this).attr("data-hide", "true");
        } else if ($(this).attr("data-hide") === "true") {
            $(this).attr("data-hide", "false");
        }

    });

    //========================================================//
    //The USER is LOGGED IN and CLICKS to view favorites only
    //========================================================//
    $("#preferences").on("click", "#rank-filter-btn", function () {
        event.preventDefault();
        console.log("RANK FILTER");


        var mtns = $('.distance');
        console.log(mtns);
        // var mtnByRank = peakInfo.filter(function (question) {
        //     return question.asked === false;
        // })

        // function compare(a, b) {
        //     let comparison = 0;
        //     if (a.rank > b.rank) {
        //       comparison = -1;
        //     } else if (a.rank < b.rank) {
        //       comparison = 1;
        //     }
        //     return comparison;
        //   }
        //   var sortedPeakInfo = peakInfo;
        //   sortedPeakInfo.sort(compare);
        //   //console.log("sortedPeakInfo", sortedPeakInfo);
        var mtnRanks = $('rank');
    });


    $("#preferences").on("click", "#wind-speed-filter-btn", function () {
        event.preventDefault();
        console.log("WIND FILTER");

        var mtnTables = $('#table-list.table');
        console.log(mtnTables);

    });

    $("#preferences").on("click", "#distance-filter-btn", function () {
        event.preventDefault();
        console.log("DISTANCE FILTER");

        var mtns = $('.distance');
    });