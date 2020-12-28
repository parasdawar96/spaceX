# SpaceX
A web application which helps users browse all launches by SpaceX. Built using mobile first design approach.

## App Url
Visit https://space-x-details.herokuapp.com/

## Development Details
Used Infinite scroll pagination to load more spaceX details.\
Selected filters are upated to the app URL which in turn preserve the filters state on page reload.\
Image Lazy Loading.\
Created re-usable components for Ui elements too like button and loader component.

## Assumptions made
I have taken response limit as 30 since have incorporated Infinite scroll for more api calls.\
Updated the filters state to the app url too since it was not clear as in which url we have to update the filters, api or app url.

## Stack details
App is created using Angular Universal(server side rendering) which in turn uses express server.\
Used typescript,flexbox,css-grid and scss.

## Lighthouse Results
The code is optimised for Performance, Accessibility,Best Practices and SEO. Result as follows:

![lighthouse_result](https://user-images.githubusercontent.com/53849950/103172941-5dfe7080-487d-11eb-8d81-ab1c2f9a5a25.PNG)

## App ScreenShots
![mob_view](https://user-images.githubusercontent.com/53849950/103231199-44ccf100-495d-11eb-8610-84cd2b60e281.PNG)

![tablet_view](https://user-images.githubusercontent.com/53849950/103231204-472f4b00-495d-11eb-80f9-2583d6715343.PNG)

![desktop_view](https://user-images.githubusercontent.com/53849950/103231210-4991a500-495d-11eb-8ba1-98e0a326506d.PNG)
