$(function(){
    
    
    
    
        $("#master-table").on("click", "#favorite", function () {
            
            var favorite = $("#favorite")

            if (favorite.val() === "false") {
                favorite.removeClass("far").addClass("fas").val("true");
            } else {
                favorite.removeClass("fas").addClass("far").val("false");
            }
        })
    



    
});