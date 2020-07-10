"use strict"


$(document).ready(function(){
    $.ajax({
        crossDomain:true,
        contentType:"application/json",
        url:"http://www.devcodecampmusiclibrary.com/api/music",
        dataType:"json",
        type: "get",
        
        success: function(data, meta, third){
            // let result = JSON.stringify(data)
            for (let i = 0; i < data.length; i++){
                    $("#musicTable").find('tbody').append(`<tr><td>Title</td><td>Album</td><td>Artist</td></tr>`);
                }


            
            // console.log(result)





           //for(let i = 0; i<data.result.length; i++)
            // {
            //     //$("music").append(`<div>${data.result[i]["title"]}</div`);
            // }
        },
        error: function(meta, errorThrown, third){
            console.log(errorThrown);
        }




    })
})