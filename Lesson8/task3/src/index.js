import { addContentSidebar } from './script/createTable.js';
import { showWeek, getCurWeekDates, getMonday } from './script/showWeek.js';
import { switchWeeks } from './script/switchingWeeks.js';
import { showPopupWindow } from './script/showPopupWindow.js';
import { eventHandler } from './script/createEvent.js';
import { deleteObjectEvent } from './script/deleteEvent.js';
import { startLine, renderRedLine } from './script/redLine.js';
import { renderEvent } from './script/renderEvent.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
addContentSidebar();
showWeek(getCurWeekDates(getMonday()));
switchWeeks();
showPopupWindow();
eventHandler();
deleteObjectEvent();
startLine();
renderRedLine();
renderEvent();
});

//window.addEventListener('storage', );
