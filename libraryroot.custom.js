/* if(document.title == "Steam") {
	console.log('hello from patcher');
} */

import { waitForElement } from './Utilities/waitForElement.js';
import './Utilities/restartButton.js';

function marginfix() {
	var objref1 = document.querySelector("div.titlebarcontrols_TitleBarControls_3cykd.steamdesktop_TitleBarControls_1-9si");
	var objref2 = document.querySelector("div.steamdesktop_WindowControls_qP17e");
	var objref01 = document.querySelector("div.bottombar_FriendsButton_1TdaA");
	console.log('objects selected');
	
	var width1 = objref1.getBoundingClientRect().width;
	var width2 = objref2.getBoundingClientRect().width;
	var width01 = objref01.getBoundingClientRect().width;
	console.log('widths acquired');

	var objrefwidthr = Math.round(width1 + width2 + 15) + 'px';
	var objrefwidthl = Math.round(width1 + width2 + 15 + width01) + 'px';
	console.log('margins calculated');

	var objmod = document.querySelector("div.bottombar_BottomBar_3vCzS");
	console.log('target selected');

	objmod.style.marginRight = objrefwidthr;
	objmod.style.marginLeft = objrefwidthl;
	console.log('margins applied');
}

async function waitele() {
  try {
    const { querySelector, matchedElements } = await waitForElement("div.titlebarcontrols_TitleBarControls_3cykd.steamdesktop_TitleBarControls_1-9si", 3000);
    console.log('awaited code', querySelector, matchedElements);
		
	var element = document.querySelector("div.titlebarcontrols_AccountMenu_3yD46.offline > div:nth-child(2)")
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var observer = new MutationObserver(marginfix);
	observer.observe(element, { childList: true }); 
	console.log('dynamic function applied');
	
  } catch(error) {
    console.error(error, 'took to long to find element');
  }
}

async function waitele2() {
  try {
	const { querySelector, matchedElements } = await waitForElement("div.ReactVirtualized__Grid__innerScrollContainer > div.Panel.Focusable", 3000);

	const onMouseMove = (e) =>{
		let gameref1 = document.querySelector("body.gamepadui_SteamUIPopupWindowBody_QsvsR.DesktopUI > div:nth-child(2) > div.hoverposition_HoverPosition_3XUAN.hoverposition_Ready_qEo88")
		if (!(gameref1 == null)) {
			gameref1.style.top = e.pageY - 20 + 'px';
			console.log('gamelist overlay fixed');
		}
	};
	
	let gameref0 = document.querySelector("div.ReactVirtualized__Grid__innerScrollContainer:nth-child(n)");
	gameref0.addEventListener('mousemove', onMouseMove);
	  
  } catch(error) {
	  console.error(error, 'took to long to find element');
  }
}

waitele();
waitele2();