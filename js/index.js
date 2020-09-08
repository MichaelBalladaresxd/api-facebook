$(document).ready(function(){
    var idApp = '318395946143348';  //ID DE APLICACION OBTENIDA DE DEVELOPER.FACEBOOK.COM
    var urlWeb = 'www.meichtec.com';  //url pagina web a compartir


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
            // method: 'share',
            // hashtag:'#PremiosOnline',
            // href: 'https://www.facebook.com/dialog/share?app_id='+idApp+'&display=popup&href=https%3A%2F%2F'+urlWeb+'%2F&redirect_uri=https%3A%2F%2F+'+urlWeb+'',
            method: 'feed',
            link: 'https://meichtec.com',
            caption: 'Descripcion de prueba',
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
           js.src = "https://connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
    })

})  