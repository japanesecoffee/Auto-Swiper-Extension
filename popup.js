//js for the popup window
$(function() {
	var searchWord = $('#keyWord').val();
	$('#submitBtn').click(function() {
		//popup button sends message to content script
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {msg: "searchForWord:", submitted: searchWord})
		});
	});
});