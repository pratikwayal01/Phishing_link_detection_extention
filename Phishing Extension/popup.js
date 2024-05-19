chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getLinks" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "displayLinks") {
    sendLinksToServer(request.links)
    
  }
});



function sendLinksToServer(links) {
  const apiUrl = 'http://127.0.0.1:5000/predict';
  const data = { links: links };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => {
      console.log('Server response:', result);
      count = 0
      for(re in result)
      {
        if(result[re] == '1')
        {
          count += 1
        }
      }
      
      document.querySelector("#detectedCount").innerHTML = count

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "highlight",result:result });
      });
    })
    .catch(error => {
      console.error('Error sending links to server:', error);
    });
}

function refreshButtonClick() {
  location.reload();
}