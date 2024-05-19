chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getLinks") {
    const links = Array.from(document.querySelectorAll("a")).map((a) => a.href);
    chrome.runtime.sendMessage({ action: "displayLinks", links: links });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "highlight") {
    
    tags = document.querySelectorAll("a")
    result = request.result
    for(var i=0; i<tags.length; i++){
      
      if(result[document.querySelectorAll("a")[i].href] == '1' )
      {
        document.querySelectorAll("a")[i].style = 'color:red' 
        document.querySelectorAll("a")[i].style.fontWeight = 'bold'
      }
    }
    
  }
});
