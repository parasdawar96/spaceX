# SpaceX
A web application which helps users browse all launches by SpaceX. Built using mobile first design approach.

## App Url
Visit https://space-x-details.herokuapp.com/

## Development Details
Used Infinite scroll pagination to load more spaceX details.\
Selected filters are upated to the app URL which in turn preserve the filters state on page reload.\
Created re-usable components for Ui elements too like button and loader component.

## Assumptions made
I have taken response limit as 30 since have incorporated Infinite scroll for more api calls.\
Successful Landing property was not clear in the json so have used rocket.first_stage.cores[0].landing_intent to map.\
Updated the filters state to the app url since it was not clear as in which url we have to update the filters api or app.

## Issues faced
Tablet view was starting from 700x hence didn't used bootstrap.\
To handle and keep a check for many client side features like document(query Selector), sessionStorage, window etc are not present in server side.

## Stack details
App is created using Angular Universal(server side rendering) which in turn uses express server.\
Used typescript,flexbox,css-grid and scss.

## Lighthouse Results
The code is optimised for SEO, Accessibility and Performance.
