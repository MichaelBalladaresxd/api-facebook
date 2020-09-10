$(document).ready(function(){
    var idApp = '318395946143348';  //ID DE APLICACION OBTENIDA DE DEVELOPER.FACEBOOK.COM
    var urlWeb = 'https://facebook.meichtec.com/';  //url pagina web a compartir


      //COMPARTIR PAGINA

      $("#btnFacebookShared").click(function(e){
    
        e.preventDefault();
        window.fbAsyncInit = function() {

          FB.init({
            appId            : idApp,
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v8.0'
          });


         
          FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object:'https://www.premiosonline.pe/',
            })
            }, function(response){
              if (response && !response.error_message) {
                
                Swal.fire({
                  icon: 'success',
                  title: '¡Gracias por Compartir!',
                  text: 'Felicitaciones, tu post fue publicado!',
                })
      
              } else {
                Swal.fire({
                  icon: 'error',
                  title: '¡Ups, no compartiste!',
                  text: 'Recomiendanos con tus amigos a traves de tus redes!',
                }).then((result)=>{
              
                  if(result.value){
            
                    window.location ="index.html";
                  }});
              }
            });

        
        };
        

        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/es_LA/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
      });


      // ME GUSTA A LA PAGINA

      $(".fb-like").click(function(){
       

        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v8.0&appId=318395946143348&autoLogAppEvents=1";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      })  
        


      // POSTEO DE IMG

      $("div#sharedPost .btn").click(function(){
        
          var imgName = $(this).attr("img-post"); //OBTENER URL DE LA IMAGEN A COMPARTIR

          window.fbAsyncInit = function() {
  
            FB.init({
              appId            : idApp,
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v8.0'
            });
  
  
           
            FB.ui({
              method: 'share_open_graph',
              action_type: 'og.likes',
              action_properties: JSON.stringify({
                  object:urlWeb+imgName, //RUTA DE LA IMAGEN A COMPARTIR
              })
              }, function(response){
                if (response && !response.error_message) {
                  
                  Swal.fire({
                    icon: 'success',
                    title: '¡Gracias por Compartir!',
                    text: 'Felicitaciones, tu post fue publicado!',
                  })
        
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: '¡Ups, no compartiste!',
                    text: 'Recomiendanos con tus amigos a traves de tus redes!',
                  }).then((result)=>{
                
                    if(result.value){
              
                      window.location ="index.html";
                    }});
                }
              });
  
          
          };
          
  
          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/es_LA/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk')); //URL DE LA API A UTILIZAR


      })

   
})  