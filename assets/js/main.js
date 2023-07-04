let openedSection = null;
let actualButtonSelected = null;

initSections();

function initSections() {
	openedSection = document.getElementById('main-section');
	actualButtonSelected = document.getElementsByClassName('selected')[0];	
}
/*
function initSections() {
	openedSection = document.getElementById('knowledge-section');
	console.log(openedSection);
	actualButtonSelected = document.getElementsByClassName('selected')[0];	
}*/

function changeSection(sectionToChange, buttonElement) {
	openedSection.hidden = true;
	actualButtonSelected.classList = [];

	openedSection = document.getElementById(sectionToChange);
	actualButtonSelected = buttonElement;
	openedSection.hidden = false;
	actualButtonSelected.classList = ['selected'];
}
