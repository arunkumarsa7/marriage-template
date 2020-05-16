$(document).ready(function() {	
	// ["Label" , "website link" , "bar color" , "bar image"]
	var social = [	 
	 	["facebook", "http://fb.com",  "#3B5998", "images/facebook.png"],	
		["google+", "http://google.com", "#dd4b39", "images/google_plus.png"],	
	 	["twitter", "https://twitter.com/", "#55acee", "images/twitter.png"]	 
	 ];

	$("#socialside").append('<ul class="mainul"></ul>');
	
	/// generating bars
	for(var i=0;i<social.length;i++){
	$(".mainul").append("<li>" + '<ul class="scli" style="background-color:' + social[i][2] + '">' +
						'<li>' + social[i][0] + '<img src="' + social[i][3] + '"/></li></ul></li>');
	 				}
	
	/// bar click event
	$(".scli").click(function(){
		var link = $(this).text();
		var href = "www.vishnukanthvishnupriya.live";
		var facebook_url = "http://www.facebook.com/sharer/sharer.php?s=100&p[url]="+href+"&p[images][0]=&p[title]=Title%20Goes%20Here&p[summary]=Description%20goes%20here!";
		var google_plus_url = "https://plus.google.com/share?url="+href;
		var twitter_url = "https://twitter.com/share?url="+href+'&text='+encodeURIComponent('Vishnukanth & Vishnupriya are getting married on April 2nd, 2017.');
		for(var i=0;i<social.length;i++){
			if(social[i][0] == link){
				if(link == 'facebook'){					
					window.open(facebook_url,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); 
					return false;
				}else if(link == 'google+') {
					window.open(google_plus_url,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); 
					return false;
				}else if(link == 'twitter') {
					window.open(twitter_url,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); 
					return false;
				}else{
					window.open(social[i][1]);
				}
			}
		}		
	});
	
	/// mouse hover event
	$(".scli").mouseenter(function() {	
		$(this).stop(true);	
		$(this).clearQueue();
			$(this).animate({
				left : "100px"
			}, 300);
				
	});

	/// mouse out event
	$(".scli").mouseleave(function(){
		$(this).animate({
			left:"0px"
		},700,'easeOutBounce');
	});
	
	if(localStorage.pagecount){
		localStorage.pagecount = Number(localStorage.pagecount) + 1;
	}else{
		localStorage.pagecount = 1;
	}
	
	setTimeout(function(){
    	$('.odometer').html(localStorage.pagecount);
  	}, 1000);

});
