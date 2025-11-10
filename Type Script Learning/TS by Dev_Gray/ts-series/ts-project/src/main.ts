// src/declarations.d.ts
declare module '*.css';
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
    const fullList = FullList.instance;
    const template = ListTemplate.instance;
    
    	// Add listener to new entry form submit
	const itemEntryForm = document.getElementById(
		"itemEntryForm"
	) as HTMLFormElement;

	itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
		event.preventDefault();
}