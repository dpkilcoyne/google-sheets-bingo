# Google Sheets Bingo Card
This simple project uses Google Sheets and Google Apps Script to generate randomized, interactive bingo cards from a user-defined list.

I decided to make it after difficulty finding a website to create bingo cards with others at the same time.  Sheets solves that but the only other bingo templates I could find had complex cell formulas that didn't work properly.

## Instructions

### Setup
1.  Copy the Bingo Card Template [here](https://docs.google.com/spreadsheets/d/1agTmdZfuCwjggIKfva9ySNcHcah-fB81yt4baIuYIRk/copy).
2.  Look for the **Bingo Card** option in the toolbar. If it's not there refresh the page.
3.  Enter your options in the **Bingo Options** sheet. If you supply less than 25, there will be duplicates, more than 25 and random words will be chosen without duplicates.
4.  From the toolbar, select **Bingo Card -> Reset Card** to generate a new card in the **Bingo Card** sheet.
5.  Enter the number of occurrences in the lower table.

### Use
* Do not rename sheets or move grid ranges without first modifying the code appropriately.
* The built-in script editor can be accessed from the toolbar, **Tools -> Script Editor**.

### Contributing and Requests
I made this project rather quickly, so there's a lot of room for development.  If it gets any interest, I can add features like automatically generating and printing multiple cards. Please feel free to submit questions, feature requests, or issues [here](https://github.com/dpkilcoyne/google-sheets-bingo/issues/new).

## Contact
Daniel Kilcoyne kilcoyne.daniel@gmail.com


## License
The source code is licensed under GPL v3. License is available [here](https://github.com/dpkilcoyne/google-sheets-bingo/blob/master/LICENSE).
