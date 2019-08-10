chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.msg == "showPageAction") {
		//retrieves active tab on current window
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.pageAction.show(tabs[0].id);
		});		
	}
});
