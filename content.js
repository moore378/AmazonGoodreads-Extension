console.log("content.js")


chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse){
	console.log(message)
	
	alert("Message received")
}

function getBookInformation()
{
	console.log("Collecting Book Information");
	
	var elt = document.getElementById("title0");
	var auth = document.getElementById("author0");
	var acquiredElt = document.getElementById("date0");
	
	book.title = elt.title.value;
	book.id = elt.id.value;
	book.author = auth.title.value;
	book.acquiredDate = acquiredElt.title.value;
}