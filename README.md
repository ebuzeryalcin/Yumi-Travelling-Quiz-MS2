![Yumi Travel Quiz Logo](assets/images/yumi_readme.PNG)

***

# Yumi Travelling Quiz

My project is a quiz for people who love to travel. Travelling to different destinations can be at point but sometimes you can also be disappointed maybe because you did not
think about if the travel destination have things that matches your personality. 

Therefore, at the beginning of the Quiz the page is asking you "WHAT TYPE OF TRAVELLER ARE YOU?" which really asks logical questions to decide whether you are a nature lover
or a city lover. I think that the most important thing to figure out before you even start planning a trip is what kind of traveler person you are, what do you enjoy. 
If you plan a trip that doesn’t fit your personality the trip can mostly be bad. You need to know who you are. 

By asking some questions that maybe do not come in mind in this quiz maybe you can consider few things before booking your next vacation. By starting the quiz I aim to get 
peoples attention to start thinking how their every day life is. Maybe to make users think about their daily environment, what they like and unlike about it. So they can start 
to reflect what travel destination would make them happy and maybe suit their feelings about travel at the same time they are trying the quiz. Some people stick to nature 
destionations, some prefer to discover cities, and some people like to discover a different type of vacation than what they are used to do.

So by going through the quiz and choosing answers, users will get a score which shows whether they are a nature lover or a city lover. And depending on the score the result
page will also show travel recommendations viewed on google maps. 

The website have three pages with simple and intuitive layout. By clicking on Start Quiz button on the first page you are redirected the quiz page to use the actual quiz.
When you have finished the quiz the page redirects you to the result page where depending on your score the website returns what type of traveller you are. 

The website also utilise an google maps API to recommend travel locations on the map which changes depending on score. 

If the quiz have not been finished the result page will not show any score and will not show locations on the map.

This website is built using HTML, CSS, Bootstrap and JavaScript. This is the website, [Yumi Travelling Quiz](https://ebuzeryalcin.github.io/Yumi-Travelling-Quiz-MS2/).

 ***

 ## UX

For page colors I used custom colors and changed for example button colors of my own favour. I think dark gray goes great with white and I
wanted to have popping background image which went looking great with all other colors I used on the pages.  
 
For the logo I used [logomakr.com](https://logomakr.com/) which is a simple and free website. 

The purpose of this website is to help users to get recommendations about travel destiantions depending on what type of traveller they are. 
The introduction and the start quiz button on the first page is centered and ease to access for users. The quiz page is intuitive and logical
so users don't gets interuppted of unneccessary content. Result page gives clear information about the score and treavel recommendations.
I wanted to give an easy and understandable experience for users. 

### User Stories

Users:
- As a user, I'd like to quick quiz introduction, why I should try out the quiz. 
- As a user, I'd like to find travel recommendations depending on my score.
- As a user, I'd like to find multiple travel destiantions.
- As a user, I'd like to know what kind of traveller I am.
- As a user, I'd like to make a quiz to find out what kind of travel would suit me.
- As a user, I'd like to see a map where I can travel depending on my score.
- As a user, I'd like to know information about the site owner.
- As a user, I'd like to connect to site owner by social media. 

Content creator:
- As a content creator, I'd like to give introduction, why users should try out the quiz.
- As a content creator, I'd like to attract people to my site so they can enjoy using my site and quickly get travel recommendations. 
- As a content creator, I'd like to promote my site as a fun and proffessional page.
- As a content creator, I'd like to promote my quiz so people can find out what kind of traveler they are. 
- As a content creator, I'd like to show a map where users can travel depending on their scores.
- As a content creator, I'd like that site visitors have easy access to connect with me through social media.
- As a content creator, I want to show that users can trust my services with a logical quiz.

### Wireframes

To make my Wireframe I used moqups.com. [Click here to show my Wireframe.](https://app.moqups.com/fxJmWRzVm7/view/page/ad64222d5)

![Responsive image with different monitors](assets/images/responsive.PNG)

***

## Features
 
### Existing Features

[Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview?_ga=2.246367876.1606386993.1604865013-774398906.1604748970) & 
[Markers on the map](https://developers.google.com/maps/documentation/javascript/markers) with [Marker clustering feature](https://developers.google.com/maps/documentation/javascript/marker-clustering): 
I have utilized the Google Maps API, added marker function and marker clustering function on the map. The marker is a type of overlay and 
identifies location on the map. Marker clustering combines number of locations in near area. Depending on score the Javascript function will
call map and markers, which is in the maps.js file. 

I have not restricted the use of Google maps API in the Google Cloud Platform. This can be changed in future on the same platform. 
![Screenshot of the restrictions page in Google Maps API](assets/images/restrictions_api.PNG)

