$(document).ready(function(){


var token = "EAACEdEose0cBAKRyUoNH8EL4MACRZBVgwODtKWUbTS0vencAmvOk8pEHijMlXgcyLFhNyC6qyQccTTZBnM1y0XmMnvezZBhZCvw9BIKp9GlWDBOtBsDyDUNzbWgNGlIvSZBs9eV0ZAwfQQAQYS5G2SZAb7otmmEqtxNnpifFXdkb0H0lW6JIYeRSV70Le2EUrlCotJuiBGCvgZDZD";
var URL = "https://graph.facebook.com/me?fields=id,relationship_status,name,birthday,work,about,address,email,hometown,gender,first_name,last_name,cover,picture.width(160).height(180),education,posts.limit(20){caption,name,message,link,type,source}&access_token="+token;



$.ajax(URL, {
  success: function(res){
    // console.log(res);
          $("#firstname").html("<p><strong>"+res.first_name+"</strong></p>");
          $("#home").html("<p><strong>|<a href='#'>Home</a></strong></p>");
          $(".jumbotron").css('background-image','url(' + res.cover.source + ')');
          $(".userfullname").html("<h3><strong>"+res.name+"</strong></h3>")
          $(".profileimage").html("<img class='imgmedia' src="+res.picture.data.url+">");
          $(".work").html("<p><i class='fa fa-briefcase' aria-hidden='true'></i> "+res.work[0].position.name+" at <span class='textcolor'>"+res.work[0].employer.name+"</span></p>");
          $(".school").html("<p><i class='fa fa-graduation-cap' aria-hidden='true'></i> Studied at <span class='textcolor'>"+res.education[0].school.name+"</span></p>");
          $(".status").html("<p><i class='fa fa-user' aria-hidden='true'></i> Relation Status <span class='textcolor'>"+res.relationship_status+"</span></p>");
          $(".birth").html("<p><i class='fa fa-birthday-cake' aria-hidden='true'></i>  Birthday on <span class='textcolor'>"+res.birthday+"</span></p>");
          $(".gender").html("<p><i class='fa fa-user' aria-hidden='true'></i> "+res.gender+"</p>");
          $(".about").html("<p><i class='fa fa-question-circle' aria-hidden='true'></i> About "+res.about+"</p>");
          $(".smallpic").html("<img class='smallpiccss' src="+res.picture.data.url+">");
// for posts
          var myposts = res.posts.data;
          $("feeds").append($.each(myposts, function(index,value){
              if(value.name && value.link !== undefined){
                // console.log(value.name , value.link);
                $(".feeds").append("<h6 class='text-center'><span class='textcolor'>"+res.name+"</span> shared <span class='textcolor'>"+value.name+"</span></h6 class='text-center'>");

                 if(value.type == "photo"){
                $(".feeds").append("<img  src="+value.link+" alt='image'><hr>");
              }
              else if(value.type == "link"){
                $(".feeds").append("<img  src="+value.link+" alt='image'><hr>");
              }
                else if(value.type == "video"){
                $(".feeds").append("<video  src="+value.source+" controls ></video><hr>")
              }
              }
          }));
         },

    error : function(request,errorType,errorMessage){

                      console.log(request);
                      console.log(errorType);
                      alert(errorMessage);
                  },


  });

});
