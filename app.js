"use strict"


$(document).ready(function(){
    $.ajax({
        url:"www.devcodecampmusiclibrary.com/api/music",
        dataType:"json",
        type: "get",
        success: function(data, meta){
            for(let i = 0; i<data.result.length; i++)
            {
                $("music").append(`<div>${data.result[i]["title"]}</div`);
            }
        },
        error: function(meta, errorThrown){
            console.log(errorThrown);
        }




    })
})