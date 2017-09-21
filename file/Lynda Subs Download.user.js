// ==UserScript==
// @id             z-jingjie
// @name           Lynda Subs Download
// @version        1.1
// @author         z-jingjie
// @namespace      https://www.github.com/z-jingjie
// @description    Download subtitles on Lynda.Com. (cookies needed)
// @include        https://www.lynda.com/learning-paths/*
// @include        https://www.lynda.com/*/*/*/*.html
// @include        https://www.lynda.com/*/*.html
// @include        https://www.lynda.com/*/*/*.html?srchtrk=*
// @grant          GM_xmlhttpRequest
// ==/UserScript==

document.querySelector('#course-feedback').innerHTML += `<div style="background-color:rgba(229,229,229,1); padding-top: 20px;">
<div id="allsubs" style="width:100%; height:495px; margin-bottom:20px; padding:5px; background-color:rgba(51,51,51,.8); 
overflow-y: auto; border-radius:5px;"></div></div>`;
var videoList = document.querySelectorAll('div.col-xs-11.col-md-10.video-name-cont');
var courseID = document.querySelector('#video-container').getAttribute('data-course-id');
var subDown = document.querySelector('#allsubs');

for (var i = 0; i < videoList.length; i++) {
	var videoData = videoList[i].querySelector('a');
	var videoID = videoData.getAttribute('data-ga-value');
	var videoSrt = 'https://www.lynda.com/ajax/player/transcript?courseID=' + courseID + '&videoID=' + videoID;
	rawTitle = trim(videoList[i].querySelector('a').innerHTML);
	var wholeTitle = 'E' + i + ' - ' + rawTitle;
	subDown.innerHTML += '<a href=' + videoSrt + ' download=\'' + wholeTitle + '.srt' + '\'>' + wholeTitle + '</a>';
}

function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, '');
}
