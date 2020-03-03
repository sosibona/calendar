import { generateNumber } from './generateNumber.js';
import { renderWeek } from './renderWeek.js'
import { renderSidebar } from './renderSidebar.js';
import { getWeek } from './getWeek.js';
import { getMonday } from './getMonday.js';
import { events } from './storage.js';
import { openPopUp, addEvent } from './popUp.js';
import { showCurrentWeek } from './showCurrentWeek.js';
import { onEvent } from './deleteEvent.js';
import { renderDateForWeek } from './renderDate.js';
import { renderDayCell } from './renderDayCell.js'
import { getCurrentMonth } from './getCurrentMonth.js';
import { createEvent } from './createEvent.js';
import { addClassCurentDate } from './navigationButton.js';
import { startLine } from './countLineTime.js';
import { greenwichTime } from './greenwichTime.js'
import { setItem, getItem } from './storage.js';

renderWeek();
renderSidebar();
renderDateForWeek(new Date());
renderDayCell(new Date());
getCurrentMonth();
createEvent();
addClassCurentDate();
startLine()
greenwichTime(new Date());











