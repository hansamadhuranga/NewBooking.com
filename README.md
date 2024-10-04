Get started

Clone the project first (https://github.com/hansamadhuranga/NewBooking.com.git)
Open the project in an IDE like VS Code.
Open the terminal and execute (npx cypress open)
Then execute the file called "amazonAddToCart.cy.js" in the specs.


Challenges
It was a bit of a difficult task to locate some elements, and most of the time some elements don't get captured from the test and it fails. Ex: Selecting the Book title and clicking on it on the product list page

Framework
A framework has been created with proper folder structures, as with: fixtures to maintain test data helpers to maintain functions and commands page objects to storing web elements testbase to maintain Cypress commands

Custom added
Enabled multi browser testing
Enabled mochawesome reporter
Gave the retry count to two since most of the time applications fail with loads of API calls or application errors.
