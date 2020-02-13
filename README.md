# T-Mobile Coding Challenge

### Important! Read this First !

### Task 1

Please provide a short code review of the base `master` branch:

#### Task 1-A

1. What is done well?

-  Used ngRx for state management because of this we are able to manage flow of data efficiently
-  Used lazy loading to load StocksFeatureShellModule it improve application loading performance
-  Used Angular material it provides responsive layout and it is easy to use.
-  Architecture of this project is good, we can reuse common code in front end and backend as well.

3. Are there any code smells or problematic implementations?

-  Api-key is not configured
-  Chart is not loading after getting success response from api
-  Test cases are failing for all component
-  Access specifiers are not used on variables and methods
-  Used any instead of specific data type
-  Unused imports are present in application

2. What would you change?

-  Used async pipe with quotes$ observable on coding-challenge-chart in stocks.component.html
-  Changed data property binding on google-chart to chartData
-  Removed unused imports from chart.component
-  Fixed all test case

