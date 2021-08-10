$(document).ready(function(){
   $("#search").on("keyup",function(e){
    var username = e.target.value;
    
    if(username == "")
    {
        $("#user").html("");
    }
    else{$.ajax({
        type: 'GET',
        url: "https://api.github.com/users/"+username,
        dataType: 'json',
        contentType: 'json',
        data:{
            client_id: '68d7fe111b48ca850e15',
            client_secret: "a48bd10009fdff92b060c3c6c14f4b1430f89686"
        }
    }).done(function(user){
            console.log(user);
            var name = user.name;
            $("#user").html(`
            <div>
                <table>
                <tr>
                <td><img style = "height : 150px; width : 150px;" src = ${user.avatar_url} alt = "didn't work"></td>
                <td>
                <td style = "padding-left : 10px;font-size : 20px">repository : ${user.public_repos}</td>
                <td style = "padding-left : 10px; font-size : 20px">followers : ${user.followers}</td>
                </tr>
                <tr>
                <td style = "font-size : 25px"><p><strong>${user.name}</strong></p></td>
                </tr>
                </table>
            </div>
            <a target = "_blank" href =  "${user.html_url}"<p style = "margin-left: 200px; font-size: 30px">click here to view whole profile </p></a>
            `)
    });   
    }
    
    
    
   });

  


});