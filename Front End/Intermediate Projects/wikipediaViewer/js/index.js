function search(){
  var input=document.getElementsByTagName("input")[0].value;
  $("input").attr("placeholder","Search");
  if (input==""){
    $("input").attr("placeholder","Should Not Be Empty");
    
  };
  $("body").attr("background","https://unsplash.it/1920/?random");
  $("ul").empty();
  var link="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search="+input;
  $.ajax({
    url:link,
    dataType:"jsonp",
    success:function(response){
      var article=response[2];
      var articleName=response[1];
      for (var i=1; i<article.length; i++){
        var link="http://en.wikipedia.com/wiki/"+articleName[i];
        $(".articleList").append('<li class="article well"><a href="'+ link + '"target="_blank">' + articleName[i] + '</a>' + '<p>' + article[i] + '</p>' + '</li>' );   
      };
    }
  });
  return false;
};
$(".search").submit(search);