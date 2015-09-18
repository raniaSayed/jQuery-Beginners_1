var username="";

		function send_message(message){
			var prevMessage = $("#content").html();
 				//space length is 3
 				if(prevMessage.length > 3){
 					prevMessage= prevMessage + "<br>";
 				}

 		    $("#content").html(prevMessage +"<span class='current_message'>"+"<span class='bot' > ChatBot: </span>" +message+"</span>");
			$('.current_message').hide();
			$(".current_message").delay(500).fadeIn();
			$('.current_message').removeClass("current_message");
		}
	    function get_userName(){
	    	send_message("Hello What's Your Name?");

	    }

	    function ai(message){
	    	//if username is null get new username
	    	if(username.length<3){
	    		username=message;
	    		send_message("Nice To meet you "+username);
	    	}
	    	

	    }

		$(function  () {
			
			get_userName();

			$("#textbox").keypress(function(event){
				//13 is enter key
				if(event.which ==13){
					if($("#enter").prop("checked")){
						$("#send").click();
						//console.log("enter pressed");

						//prevent newline to creat when press enter
						event.preventDefault();

					}
				}

			});
			$("#send").click(function(){
				var userName = "<span class='username'> You: </span> ";
				var newMessage = $("#textbox").val();
				// i think  $("#content").html(userMessage); == $("#content").val(userMessage);
				$("#textbox").val("");
				var prevMessage = $("#content").html();
 				//space length is 3
 				if(prevMessage.length > 3){
 					prevMessage= prevMessage + "<br>";
 				}

 		    $("#content").html(prevMessage +userName +newMessage);
 				$("#content").scrollTop($("#content").prop("scrollHeight"));

 				ai(newMessage);
							});

		});