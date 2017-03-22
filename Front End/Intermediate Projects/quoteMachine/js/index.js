var url="http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote=function(data){
        $(".message").html(data.quoteText);
        if (data.quoteAuthor==""){
        	author="- Unknown";
        }
        else{
        var author="- " + data.quoteAuthor;
    	}
        $(".author").html(author);
        tweet='https://twitter.com/intent/tweet?text=' + data.quoteText + 'Author: ' + data.quoteAuthor + " @alex_carrese";
};

var gotoUrl=function(link){
	window.open(link, '_blank')
}

$(document).ready(function(){
        $.getJSON(url, getQuote, 'jsonp');
});

var newQuote=function(){
	$.getJSON(url, getQuote, 'jsonp');
  $(".container").attr("color", red);
}