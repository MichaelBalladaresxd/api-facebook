$(document).ready(function(){
  
  
})  

    var idApp = '611394026220556';  //ID DE APLICACION OBTENIDA DE DEVELOPER.FACEBOOK.COM
    var urlWeb = 'https://facebook.meichtec.com/';  //URL DONDE SE ALOJAN LAS IMAGENES A COMPARTIR
    var webPrincipal = 'https://www.premiosonline.pe/'; //WEB A COMPARTIR 
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
          method: 'share',
          href: webPrincipal,
          hashtag : '#Practica'
        }, function(response){
            if (response && !response.error_message) {
              console.log('response', response)
              
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
            method: 'share',
            href: urlWeb+imgName,
            hashtag : '#GRACIAS_POR_EL_PREMIO'
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
      

    //LIKE A FAN PAGE

    $(".fb-like").click(function(){

      

      
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v8.0";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));


    })
 
  