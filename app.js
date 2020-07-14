"use strict"


$(document).ready(function(){
    $.ajax({
        crossDomain:true,
        contentType:"application/json",
        url:"http://www.devcodecampmusiclibrary.com/api/music",
        dataType:"json",
        type: "get",
        
        success: function(data, second, third){
            // let result = JSON.stringify(data)
            for (let i = 0; i < data.length; i++){
                    $("#musicTable").find('tbody').append(`<tr><td>${data[i]["title"]}</td><td>${data[i]["album"]}</td><td>${data[i]["artist"]}</td><td>${data[i]["genre"]}</td><td>${data[i]["releaseDate"]}</td></tr>`)
                    

                }
        },
        error: function(meta, errorThrown, third){
            console.log(errorThrown);
        }




    })
})

// <tr display="none">${id}</tr> 