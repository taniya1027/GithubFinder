$(document).ready(function(){
   $("#search").on("keyup",function(e){
    var username = e.target.value;

    $.ajax({
        url: "https://api.github.com/users/"+username,
        data:{
            client_id: 'c1de6864a4c607f077ad',
            client_secret: "2d7187472400852cd85a1fcc6f22b0cd21d49897"
        }
    }).done(function(user){
            var name = user.name;
            $("#user").html(`<div>${name}</div>`)
    });
        
        
    
   });
});