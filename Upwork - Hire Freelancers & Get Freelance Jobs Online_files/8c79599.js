!function(name,definition){if(typeof module!="undefined"&&module.exports)module.exports=definition();else if(typeof define=="function"&&define.amd)define(definition);else this[name]=definition()}("bowser",function(){var t=true;function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[1]||""}function getSecondMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[2]||""}var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),chromeBook=/CrOS/.test(ua),edgeVersion=getFirstMatch(/edge\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),result;if(/opera|opr/i.test(ua)){result={name:"Opera",opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}}else if(/yabrowser/i.test(ua)){result={name:"Yandex Browser",yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}}else if(/windows phone/i.test(ua)){result={name:"Windows Phone",windowsphone:t};if(edgeVersion){result.msedge=t;result.version=edgeVersion}else{result.msie=t;result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)}}else if(/msie|trident/i.test(ua)){result={name:"Internet Explorer",msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)}}else if(chromeBook){result={name:"Chrome",chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}else if(/chrome.+? edge/i.test(ua)){result={name:"Microsoft Edge",msedge:t,version:edgeVersion}}else if(/chrome|crios|crmo/i.test(ua)){result={name:"Chrome",chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}else if(iosdevice){result={name:iosdevice=="iphone"?"iPhone":iosdevice=="ipad"?"iPad":"iPod"};if(versionIdentifier){result.version=versionIdentifier}}else if(/sailfish/i.test(ua)){result={name:"Sailfish",sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}}else if(/seamonkey\//i.test(ua)){result={name:"SeaMonkey",seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)}}else if(/firefox|iceweasel/i.test(ua)){result={name:"Firefox",firefox:t,version:getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)};if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t}}else if(/silk/i.test(ua)){result={name:"Amazon Silk",silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)}}else if(android){result={name:"Android",version:versionIdentifier}}else if(/phantom/i.test(ua)){result={name:"PhantomJS",phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)}}else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:"BlackBerry",blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}}else if(/(web|hpw)os/i.test(ua)){result={name:"WebOS",webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};/touchpad\//i.test(ua)&&(result.touchpad=t)}else if(/bada/i.test(ua)){result={name:"Bada",bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)}}else if(/tizen/i.test(ua)){result={name:"Tizen",tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier}}else if(/safari/i.test(ua)){result={name:"Safari",safari:t,version:versionIdentifier}}else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)}}if(!result.msedge&&/(apple)?webkit/i.test(ua)){result.name=result.name||"Webkit";result.webkit=t;if(!result.version&&versionIdentifier){result.version=versionIdentifier}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko";result.gecko=t;result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)}if(!result.msedge&&(android||result.silk)){result.android=t}else if(iosdevice){result[iosdevice]=t;result.ios=t}var osVersion="";if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i)}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,".")}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i)}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i)}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i)}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i)}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i)}if(osVersion){result.osversion=osVersion}var osMajorVersion=osVersion.split(".")[0];if(tablet||iosdevice=="ipad"||android&&(osMajorVersion==3||osMajorVersion==4&&!mobile)||result.silk){result.tablet=t}else if(mobile||iosdevice=="iphone"||iosdevice=="ipod"||android||result.blackberry||result.webos||result.bada){result.mobile=t}if(result.msedge||result.msie&&result.version>=10||result.yandexbrowser&&result.version>=15||result.chrome&&result.version>=20||result.firefox&&result.version>=20||result.safari&&result.version>=6||result.opera&&result.version>=10||result.ios&&result.osversion&&result.osversion.split(".")[0]>=6||result.blackberry&&result.version>=10.1){result.a=t}else if(result.msie&&result.version<10||result.chrome&&result.version<20||result.firefox&&result.version<20||result.safari&&result.version<6||result.opera&&result.version<10||result.ios&&result.osversion&&result.osversion.split(".")[0]<6){result.c=t}else result.x=t;return result}var bowser=detect(typeof navigator!=="undefined"?navigator.userAgent:"");bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==="string"){if(browserItem in bowser){return true}}}return false};bowser._detect=detect;return bowser});
var outdatedBrowser=function(){"use strict";var outdated=document.getElementById("outdated-browser-popup"),cssProp="transform",support={Chrome:44,Firefox:41,Safari:8,Opera:32,"Internet Explorer":11,"Microsoft Edge":13},links={Chrome:"https://www.google.com/chrome/browser/desktop/",Firefox:"https://www.mozilla.org/en-US/firefox/new/",Safari:"https://support.apple.com/downloads/safari","Internet Explorer":"http://windows.microsoft.com/en-us/internet-explorer/download-ie"},headerClasses=[".header-navbar",".header-bar",".nav-sticky-header",".affix",".affix-top"];function showPopup(){var headers=[],banners=[],i,cloned,offset,paddingBottom,style,btnClose,btnUpdate;function fadeIn(opacity_value){var k;for(k=0;k<banners.length;k++){banners[k].style.opacity=opacity_value/100;banners[k].style.filter="alpha(opacity="+opacity_value+")";if(opacity_value===1){banners[k].style.display="block"}}}function addHeader(selector){var element=document.querySelector(selector),j;if(element){for(j=0;j<headers.length;++j){if(headers[j]===element){return}}headers.push(element)}}for(i=0;i<headerClasses.length;i++){addHeader(headerClasses[i])}for(i=0;i<headers.length;i++){if(i===0){cloned=outdated}else{cloned=outdated.cloneNode(true)}banners.push(cloned);offset=headers[i].offsetHeight||headers[i].clientHeight||"0";if(parseInt(offset,10)!==0){cloned.style.position="absolute";cloned.style.top=offset+"px"}else{style=headers[i].currentStyle||window.getComputedStyle(headers[i]);paddingBottom=style.paddingBottom;cloned.style.position="static";if(paddingBottom){cloned.style.marginTop=paddingBottom;cloned.style.marginBottom="-"+paddingBottom}}cloned.id="outdated-browser-popup-"+i;headers[i].appendChild(cloned)}if(headers.length===0){outdated.style.position="fixed";banners.push(outdated)}function fadeInWrap(x){return function(){fadeIn(x)}}for(i=1;i<=100;i++){setTimeout(fadeInWrap(i),i*5)}function hideBanner(){var k;for(k=0;k<banners.length;k++){banners[k].style.display="none"}return false}btnClose=document.querySelectorAll(".btn-close-update-browser");for(i=0;i<btnClose.length;i++){btnClose[i].onmousedown=hideBanner}btnUpdate=document.querySelectorAll(".btn-update-browser");if(btnUpdate&&links.hasOwnProperty(bowser.name)){for(i=0;i<btnUpdate.length;i++){btnUpdate[i].href=links[bowser.name]}}}function supports(prop){var div=document.createElement("div"),vendors=["Khtml","Ms","O","Moz","Webkit"],len=vendors.length;if(prop in div.style){return true}prop=prop.replace(/^[a-z]/,function(val){return val.toUpperCase()});while(len--){if(vendors[len]+prop in div.style){return true}}return false}if(bowser&&bowser.name&&bowser.version&&support.hasOwnProperty(bowser.name)&&bowser.version<support[bowser.name]||!supports(cssProp)){showPopup()}};(function(){"use strict";document.addEventListener("DOMContentLoaded",outdatedBrowser);if("function"===typeof document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);outdatedBrowser()}})}})();