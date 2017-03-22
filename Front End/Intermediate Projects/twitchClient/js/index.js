function clicked(button){
  $('.users').empty().append("<br />");
  var online=[];
  var users=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  users.forEach(function(element){
    url="https://wind-bow.glitch.me/twitch-api/channels/"+element;
    $.getJSON(url,function(data){
      $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+data._id, function(streaming){
        if (streaming.stream==null){
          online[i]=0;
          i++
          console.log("offline");
        }else{
          online[i]=1;
          i++;
          console.log('online');
       }
         
      }, 'jsonp');
    },'jsonp');
  });
  
    
  if (button=="all"){
    for (var i=0; i<users.length; i++){
      
      if (online[i]==1){
        
        var html="<a target='_blank' href='https://www.twitch.tv'"+users[i]+"><p class='"+i+"'><b>"+ users[i] +" <i     style='color:red'>online</i></b></p></a><hr />";
        $(".users").append(html);
      }
      else{
        var html="<a target='_blank' href='https://www.twitch.tv'"+users[i]+"><p class='"+i+"'><b>"+ users[i] +" <i style='color:red'>offline</i></b></p></a><hr />";
        $(".users").append(html);
      }
   
     }
  }
  else
    if(button=="online"){
    for (var i=0; i<users.length; i++){
      
      if (online[i]==1){
        
        var html="<a target='_blank' href='https://www.twitch.tv'"+users[i]+"><p class='"+i+"'><b>"+ users[i] +"</b></p></a><hr />";
        $(".users").append(html);
      }
     
  }
}
  else
    if(button=="offline"){
      for (var i=0; i<users.length; i++){
      
        if (online[i]!=1){
        
          var html="<a target='_blank' href='https://www.twitch.tv'"+users[i]+"><p class='"+i+"'><b>"+ users[i] +"</b></p></a><hr />";
          $(".users").append(html);
        }
      }
    }
}