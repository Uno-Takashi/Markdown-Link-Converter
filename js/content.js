﻿

function str2mark(url , title){
  return "["+title+"]"+"("+url+")"
}

function execCopy(string){

  // 空div 生成
  var tmp = document.createElement("div");
  // 選択用のタグ生成
  var pre = document.createElement('pre');

  // 親要素のCSSで user-select: none だとコピーできないので書き換える
  pre.style.webkitUserSelect = 'auto';
  pre.style.userSelect = 'auto';

  tmp.appendChild(pre).textContent = string;

  // 要素を画面外へ
  var s = tmp.style;
  s.position = 'fixed';
  s.right = '200%';

  // body に追加
  document.body.appendChild(tmp);
  // 要素を選択
  document.getSelection().selectAllChildren(tmp);

  // クリップボードにコピー
  var result = document.execCommand("copy");

  // 要素削除
  document.body.removeChild(tmp);

  return result;
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    execCopy(mk)
  }
);

var url = location.href ;
var title = document.title;
var mk= str2mark(url,title)

console.log(mk)