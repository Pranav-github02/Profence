var arr=[
    "chin.jpg",   
    "spanish.jpg",  
    "indian.jpg", 
    "italian.jpg",

]
var i=0;
function slides(){
    document.getElementById("d80").src=arr[i];
    document.getElementById("d90").innerHTML=desc[i];
    if(i<(arr.length-1)){
	 i++;
	}else{
	  i=0;
	}	
}


var desc=[
    "CHINESE DISHES",
	"SPANSISH DISHES",
	"INDIAN DISHES",
	"ITALIAN DISHES"
 
]
var u,x,u1,u1,u3;
$("#a3").click(function(){
   $("#d103").show();
    
	$("#bbb1").click(function(){
	
	u=document.getElementById("pass4").value;
    x=document.getElementById("mail4").value;
	u1=document.getElementById("in4").value;
	u2=document.getElementById("x1").value;
	u3=document.getElementById("x2").value;
	
	if(u == "" || x=="" || u1=="" || u2=="" || u3=="" ){
   $("#bbb1").on("click",function(e){
    e.preventDefault();
	
   })
}
  else{
	
	
	$("#boo3").show();
	$("#d335").html(function(){
	  var a=document.getElementById("in4").value;
	  document.getElementById("d335").innerHTML="till "+a;
	});
	$("#im3").fadeTo('fast',0.4);
	$("#d103").css('display','none');
	$("#a3").click(function(){
	  $("#d103").hide();
	})
}	
  });
  
	
   });

var g,h,h1,h2,h3;   
$("#a2").click(function(){
    
    $("#d102").show();
    
	$("#bb1").click(function(){
	
	g=document.getElementById("pass3").value;
    h=document.getElementById("mail3").value;
	h1=document.getElementById("in3").value;
	h2=document.getElementById("f1").value;
	h3=document.getElementById("f2").value;
	
	 if(g == "" || h=="" || h1=="" || h2=="" || h3=="" ){
   $("#bb1").on("click",function(e){
    e.preventDefault();
	
   })
}

    else{	
	$("#boo2").show();
	$("#d334").html(function(){
	  var a=document.getElementById("in3").value;
	  document.getElementById("d334").innerHTML="till "+a;
	});
	$("#im2").fadeTo('fast',0.4);
	$("#d102").css('display','none');
	$("#a2").click(function(){
	  $("#d102").hide();
	})
	}	
 })
	
   });
  



var z,z11,z12,z13;
var y;

$("#a1").click(function(){
   
   $("#d101").show();
  
   
   $("#b1").click(function(){
	

    z=document.getElementById("pass1").value;
    y=document.getElementById("mail1").value;
	z11=document.getElementById("z1").value;
	z12=document.getElementById("z2").value;
	z13=document.getElementById("in2").value;
   
   if(z == "" || y=="" || z11=="" || z12=="" || z13=="" ){
   $("#b1").on("click",function(e){
    e.preventDefault();
	
   })
}

	else{
   
	$("#boo1").show();
	$("#d333").html(function(){
	  var a=document.getElementById("in2").value;
	  document.getElementById("d333").innerHTML="till "+a; 
	});
	$("#im1").fadeTo('fast',0.4);
	$("#d101").css('display','none');
	$("#a1").click(function(){
	  $("#d101").hide();
	})
	}
 })
 
 
})




$("#d107").click(function(){
   $("#108").fadeIn();
   $("#108").hover(function(){
      $("#108").css("background-color","cyan") 
   },function(){
     /* $("#108").css("display","none")*/
	 $("#108").fadeOut();
   });
}
)
  
$("#b2").click(function(){
    $("#d101").hide();

}) 

$("#b3").click(function(){
    $("#d102").hide();

})

$("#b4").click(function(){
    $("#d103").hide();

})   

 

 

function func6(){
 var r=document.getElementById("pass2").value;
  var s=document.getElementById("mail2").value;
 

 if(y==s && r==z)
 
 
 {
    $("#boo1").hide();
	$("#im1").fadeTo("fast",1)
	$("#a1").one('click',function(){
	
	$("#d101").show();
	
	
	$("#b1").one('click',function(){
	
	$("#boo1").show();
	$("#d333").html(function(){
	  var a=document.getElementById("in2").value;

	  document.getElementById("d333").innerHTML="till "+a;
	});
	$("#im1").fadeTo('fast',0.4);
	$("#d101").css('display','none');
	$("#a1").click(function(){
	  $("#d101").hide();
	})
		
 })
	
	})
  $("#s3").hide();
  alert("Refund / Cancellation SUCCESSFUL")
 }
 
  else{
  alert("Mail ID / Password is incorrect.")
  }
  
}



function func7(){
 var r1=document.getElementById("pass7").value;
  var s1=document.getElementById("mail7").value;
 

 if(h==s1 && r1==g)
 
 
 {
    $("#boo2").hide();
	$("#im2").fadeTo("fast",1)
	$("#a2").one('click',function(){
	
	$("#d102").show();
	
	
	$("#bb1").one('click',function(){
	
	$("#boo2").show();
	$("#d334").html(function(){
	  var a=document.getElementById("in3").value;

	  document.getElementById("d334").innerHTML="till "+a;
	});
	$("#im2").fadeTo('fast',0.4);
	$("#d102").css('display','none');
	$("#a2").click(function(){
	  $("#d102").hide();
	})
		
 })
	
	})
  $("#s3").hide();
  alert("Refund / Cancellation SUCCESSFUL")
 }
 
  else{
  alert("Mail ID / Password is incorrect.")
  }
  
}



function func8(){
 var r2=document.getElementById("pass8").value;
  var s2=document.getElementById("mail8").value;
 

 if(x==s2 && r2==u)
 
 
 {
    $("#boo3").hide();
	$("#im3").fadeTo("fast",1)
	$("#a3").one('click',function(){
	
	$("#d103").show();
	
	
	$("#bbb1").one('click',function(){
	
	$("#boo3").show();
	$("#d335").html(function(){
	  var a=document.getElementById("in4").value;

	  document.getElementById("d335").innerHTML="till "+a;
	});
	$("#im3").fadeTo('fast',0.4);
	$("#d103").css('display','none');
	$("#a3").click(function(){
	  $("#d103").hide();
	})
		
 })
	
	})
  $("#s3").hide();
  alert("Refund / Cancellation SUCCESSFUL")
 }
 
  else{
  alert("Mail ID / Password is incorrect.")
  }
  
}





$("#id10").click(function(){
    $("#ss1").show()
})


var gb=new Date();
var v=gb.getDate(); 
document.getElementById("c1").innerHTML=v+2 +" / May / 2021";
document.getElementById("c2").innerHTML=v+2 +" / May / 2021";
document.getElementById("c3").innerHTML=v+2 +" / May / 2021";

function func(){
    var l = document.getElementById("select").value;
	if(l=="resort"){
	$("#s4").show();}
	
	else if(l=="suite"){
	$("#s5").show();}
	
	else if(l=="villa"){
	$("#s6").show();
	}
	else if(l=="Property"){
	$("#s4,#s5,#s6").hide()
	}
}

/*$("#d3").hover(function(){
   $(this).css("color","yellow");
})*/

$(".kkk").hover(function(){
   $(this).css("color","cyan");
},function(){
   $(this).css("color","lightgrey");
})

$("#a1,#a2,#a3").hover(function(){
   $(this).css("color","cyan");
},function(){
   $(this).css("color","black");
})

$("#d107,#id10").hover(function(){
   $(this).css("color","blue");
},function(){
   $(this).css("color","black");
})

$("#cont").hover(function(){
   $(this).css("color","green");
},function(){
   $(this).css("color","black");
})

$("#id10").dblclick(function(){
  $("#ss1").hide();
})

$("#hre").click(function(){
    $("#div7").fadeIn(1000);
    $("#div8").fadeIn(2000);
    $("#div9").fadeIn(3000);
})

$("#hre").hover(function(){
    $(this).css("color","cyan");
},function(){
    $(this).css("color","lightgrey");
})

$("#tar1,#tar2,#tar3").hover(function(){
    $(this).css("text-decoration","line-through");
},function(){
    $(this).css("text-decoration","none");
})

$("#hre").dblclick(function(){
    $("#div6").fadeOut();
})
