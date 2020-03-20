/*====================================================================================================================================*
  Google Sheets Bingo by Daniel Kilcoyne
  ====================================================================================================================================
  Version:      1.0.0
  Project Page: https://github.com/dpkilcoyne/google-sheets-bingo
  Copyright:    (c) 2020 by Daniel Kilcoyne
  License:      GNU General Public License, version 3 (GPL-3.0)
                http://www.opensource.org/licenses/gpl-3.0.html
 *====================================================================================================================================*/

// Global Spreadsheet properties and constants. Do not edit unless you would like to change sheet names and positions.
const CARD_SHEET = "Bingo Card";
const DATA_SHEET = "Bingo Options";
const START_ROW = 2;
const START_COL = 2;

/**
 * Create menu items on Spreadsheet open
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('Bingo Card')
  .addItem('Reset Card', 'resetBingoCard')
  .addSeparator()
      .addItem('About', 'about')
  .addToUi();
  return menu;
}

/**
 * onEdit of occurence grid, set background color of bingo board
 */
function onEdit(e) {
  const ss = e.source;
  const value = e.value;
  const sheet = ss.getActiveSheet();
  const sheetName = ss.getSheetName();
  const range = e.range;
  const row = range.getRow();
  const col = range.getColumn();

  if (sheetName == CARD_SHEET) {
    if (row >= 8 & row <= 12 & col >= 8 & col <= 12) {
      if (value >=1) {
        sheet.getRange(row - 6, col - 6).setBackground('red').setFontColor('white');
      }
      else {
        sheet.getRange(row - 6, col - 6).setBackground('white').setFontColor('black');
      }
    }
  }
}

/**
 * Resets the active bingo card with new data and cleared formatting
 */
function resetBingoCard() {
  // Spreadsheet properties
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const bingoSheet = ss.getSheetByName(CARD_SHEET);
  const dataSheet = ss.getSheetByName(DATA_SHEET);
  const numRow = dataSheet.getLastRow() - 1;
  let answerArr = dataSheet.getRange(2, 1, numRow, 1).getValues().flat();
  const gridDim = 5;
  const gridSize = gridDim**2;

  // Select random element from answer array, push to rand array, pop from answer list
  const randArr = [];
  let iterRow = numRow;
  for (let i = 0; i < gridSize; i++) {
    let randNumber = Math.floor(Math.random() * iterRow);
    randArr.push(answerArr[randNumber]);
    answerArr.splice(randNumber, 1);
    iterRow--;

    // Reset array to choose from if there are no more elements
    if (iterRow == 0) {
      iterRow = numRow;
      answerArr = [...randArr];
    }
  }

  // Reshape array and set to grid
  const bingoArr = [];
  while(randArr.length) bingoArr.push(randArr.splice(0, gridDim));

  bingoSheet.getRange(START_ROW, START_COL, gridDim, gridDim)
  .setValues(bingoArr)
  .setBackground('white')
  .setBackground('white')
  .setFontColor('black');

  bingoSheet.getRange(8, 8, gridDim, gridDim).setValues(Array(gridDim).fill(Array(gridDim).fill(0)))
}

function about() {
  SpreadsheetApp.getUi()
     .alert('Visit https://github.com/dpkilcoyne/google-sheets-bingo to get the latest build, report issues, or request new features!');
}
