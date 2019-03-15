chrome.contextMenus.create({
	"title" : "Markdown形式でリンクをコピー",
	"type"  : "normal",
	"contexts" : ["all"],
"onclick": function(info) {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(tab.id,{});
	});
}
});
