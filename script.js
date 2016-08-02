// Start script
//Whatsapp web spammer by DevAryan (Hackers World)
//We will not be responsible for anything wrong done by you.


campo = document.getElementsByClassName("input")[1];
count = 1;
function dispatch(target, eventType, char) {
   var evt = document.createEvent("TextEvent");    
   evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.dispatchEvent(evt);
}
function spam(){
  if (count<100){ // Change the count here
    var new_emot = document.createElement("img");
    var new_src = document.createAttribute("src"); 
    var new_alt = document.createAttribute("alt");
    new_src.value = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    new_alt.value = "💩";
    new_emot.setAttributeNode(new_src);
    new_emot.setAttributeNode(new_alt);
    campo.appendChild(new_emot);
    dispatch(campo, "textInput", "You have been spammer "+count+" times by <your name>"); // Fill  in your name or change the message here
    var input = document.getElementsByClassName("icon btn-icon icon-send");
    input[0].click();
    contador1++;
    setTimeout(spam,1);
  }
  else { 
   alert('Sent 100 messages\n\nThanks for using our script\n\n-DevAryan'); // Alerts when 100 messages are sent
    var input = document.getElementsByClassName("icon btn-icon icon-send");
    input[0].click();
  }
}
spam();
