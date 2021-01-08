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
- As a user, I'd like to have a quick introduction about Quiz, why I should try out the quiz. 
- As a user, I'd like to find travel recommendations depending on my score.
- As a user, I'd like to be recommended about multiple travel destiantions.
- As a user, I'd like to know what kind of traveller I am.
- As a user, I'd like to make a quiz to find out what kind of travel would suit me.
- As a user, I'd like to see a map with markes showing where I can travel depending on my score.
- As a user, I'd like to connect to site owner through social media. 

Content creator:
- As a content creator, I'd like to give an quick introduction, why users should try out the quiz.
- As a content creator, I'd like to attract users by having an enjoyable quiz, giving recommendations fast. 
- As a content creator, I'd like to promote my website as a fun and proffessional page.
- As a content creator, I'd like to promote my quiz so people can find out what kind of traveller they are. 
- As a content creator, I'd like to show a map with locations users can travel to depending on their scores.
- As a content creator, I'd like website visitors to have easy access to connect with me through social media.
- As a content creator, I want to show that users can trust my services with a logical quiz.

### Wireframes

To make my Wireframe I used moqups.com. [Click here to show my Wireframe.](https://app.moqups.com/fxJmWRzVm7/view/page/ad64222d5)

![Responsive image with different monitors](assets/images/responsive.PNG)

***

## Features
 
### Existing Features

### Website Features

- Webpage consisting of 3 html pages:
- Home Page - Introducing the Quiz, including a button redirecting to the Quiz Page. 
- Quiz Page - Simple and intuitive Quiz consisting of 7 questions. Radio button to be clicked to go to next question. A previous, a next button and a Finish button to load previous or next question. Finish button visible in last question, redirecting to Result Page. 
- Result Page - Displays score and map - Score: Depending on result a score and an image will be shown, displaying what type of traveller users are. Interactive Map: Displays a google map with 3 travel location recommendations each, depending on what kind of traveller users are.  
- Interactive Map - This map has been created using Google Maps API and tools showing location with markers. The map includes navigation, view around in streets with Pegman, change to satellite and zoom in and out functions.
- Social Media - Social media link icons showing in footer section in every html page.
- Responsive webpage - Working in multiple devices and screen sizes, responsive to different types of screen sizes.

[Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview?_ga=2.246367876.1606386993.1604865013-774398906.1604748970) & 
[Markers on the map](https://developers.google.com/maps/documentation/javascript/markers) with [Marker clustering feature](https://developers.google.com/maps/documentation/javascript/marker-clustering): 
API key is created. I have utilized the Google Maps API, added marker function and marker clustering function on the map. The marker is a type of overlay and 
identifies location on the map. Marker clustering combines number of locations in near area. Depending on score the Javascript function will
call map and markers, which is in the maps.js file. 

I have restricted the use of Google maps API in the Google Cloud Platform. Because I have three html pages I've restricted the API to my last html page
which is: https://ebuzeryalcin.github.io/Yumi-Travelling-Quiz-MS2/result.html. I have also restricted the api for the GitPod preview environment. 
By making restrictions this should limit which webpages the API
should accept requests from. I have given an exact path for my deployed site. I have also restricted the google API to Maps Javascript API.
This can be changed in future on the same platform if needed. 
![Screenshot of the restrictions page in Google Maps API](assets/images/restrictions_api.PNG)

Below is an example of the website. You can see:
1. The Start quiz button to redirect to the Quiz page.
2. The warning popup message the user receives when no radio button have been clicked.
3. The next button to generate next question.
4. The finish button when there is no next question to generate.
5. The result page which is displayed when the quiz is finished.
6. The result page which shows latest score and image depending on the result.
7. The google map which shows three locations depending on whether you are a nature lover or a city lover.

![Example of how to use website site](assets/images/webpage_example.gif)

### Features Left to Implement

Google API has a long list of data available and possibility to give more features to the project. Maps API can be customized and gives static
and dynamic maps, with street view imagery and 360 degree views. I used this API with markers and marker clustering. It would be great to add 
API for locating different places to visit in cities. Or I could add nature reserves with information about them. I could also generate more
locations on the map and group more detailed clusters and even group more interesting locations near to each other which could be more attractive
for users who wants to see more than one place in one vacation. 

Future implementations would be Google Places API which gives the opportunity to help users to discover places in more detail. This API has a
rich location data about phone numbers, addresses and more. Further more I can add shopping API to match score with even more content. For 
example if a users result matches loving nature the shopping API could give suggestions about useful things to buy before travelling. The
nature lover could be suggested a sleeping bag, a tent and other different camping products. 

In addition to the suggestions above I could add an flight API to show suggestions about flights that really take off to places depending on 
the result the user get. Maybe the API could also suggest a multi travel vacation, travelling to more than one location during the same vacation.

I would also like to add more code so it can get more data and provide suggestions in more detail. Say that a person's result is city lover, 
but the person likes more historicaly rich cities rather than modern cities that do not have a long history. I would like the quiz to retrieve 
more data so it can return for example that the user loves cities with a wide history.

***

## Technologies Used

These following languages, frameworks and libraries was used to build the website:
- [HTML5](https://en.wikipedia.org/wiki/HTML5) - Has been used to build the content of the website.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Has been used to style the content of the website.
- [Javascript](https://en.wikipedia.org/wiki/JavaScript) - Has been used to add interactivity to the site by utilising the data returned and by calling API depending on score.
- [Bootstrap](https://getbootstrap.com/) - Has been used to build sections in html pages, creating buttons and which also gives flexibility to modify style depending on desire. 
- [FontAwesome](https://fontawesome.com/) - Has been used to add icons. Mainly used to add social media icons. 
- [Google Fonts](https://fonts.google.com/) - Has been used to style texts on my website, great tool with many fonts to choose between. 
- [Favicon](https://www.favicon-generator.org/) - Has been used to make my own custom favicon which matches my page logo.
- [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview?_ga=2.246367876.1606386993.1604865013-774398906.1604748970) - Has been used to implement Google Maps to the website. 

## Workspace

- [VSCode](https://code.visualstudio.com/)
- [Gitpod](https://www.gitpod.io/)
- [GitHub](https://github.com/)

***

## Testing

Here are the tests I have made on my webpage:
1.  All of my code have been validated to make sure there are no errors. My HTML code have been validated through [W3 HTML Validator](https://validator.w3.org/).
The CSS code have been validated through [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) and the Javascript through [JSHint](https://jshint.com/).

## Html
-	Changed place of script to improve performance from head to bottom of body.
-	I was suggested by Lighthouse tools to change format of my images from .png to webp. so the page could load faster. I did manage to find an online converter. After converting my images to .webp I could add them to my project.  
-	Lighthouse suggested me to add aria-labels to button improve accessibility of my website so I added aria-labels to my buttons in my html pages. 
-	Html validator found that my logo in footer section did not have an alt attribute. Solved by adding alt attributes to every html page.

### Latest
-	All my html pages have been tested through [W3 HTML Validator](https://validator.w3.org/), no error was found. 
-   W3 HTML Validator - [index.html report](assets/images/index_w3v.PNG), [quiz.html report](assets/images/quiz_w3v.PNG), [result.html report](assets/images/result_w3v.PNG).
-	All my buttons is working corectly. I tested each button on every Html page and no error was shown.
-	Google maps API on result page works fine. I was able to see marked locations, navigate and view around in the map, change to satellite and zoom in and out.
-	Social Media links have been tested.  I clicked each link individually which opened a new browser. Every link was working. 
-   Favicon was showing error in every html page in console because of manifest.json undefined. I did go back to Favicon webpage and went through
the tutorial. Deleted old favicon folder and added a new one in assets folder. I then deleted old favicon links from head in my html pages and
added new links with right paths. I managed to fix error showing in console and the code is working right. 

## CSS
-	Lighthouse tools suggested me to remove unused css style. I opened inspect in google chrome so I could inspect unused css code. I started to record the page and there was temporary unused css style. But I noticed that when for example the index.html page was recorded coverage detected that styles for quiz.html and result.html page was not used at that point of recording. The same things occured when I recorded another html page. Since I am using all css styling rules I did not delete any style from style.css. 
-	I ran my CSS code through [Auto Prefixer CSS](https://autoprefixer.github.io)
and was suggested to add prefixes used by major browsers which were missing. Added neccessary style to my CSS code. 
-	Fixed the background image issue which wouldn’t show in my html pages. I used a relative link for my background image. Because I was inside my css file, the code was looking for the image file at the same place. To solve this issue I needed to go back, added two dots to its path to find my actual image folder and then find my background image. This is how it looked when finished: url(../images/uzay7.jpg), note that the image file is converted to .webp now. 
-	My webpage were overflowing because of style in background image in css. I was able to fix this issue by changing min-width style 100%. The overflowing issue was solved.

### Latest
-	I ran my css code through [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) and no error was found but warnings about prefixes used by major
browsers as commented above. Since prefixes are beneficial for my CSS code I did not remove them. 
-   W3 HTML Validator - [CSS report](assets/images/css_jigsaw.PNG), [CSS warning report](assets/images/css2_jigsaw.PNG).

## Javascript
-	Lighthouse tools suggested me to move all script from head of html pages to bottom of my body to Eliminate render-blocking resources. I soccessfully managed to move all of my scripts with no error occuring, after deploying I tested live. But when I tried to move bootstrapcdn link tag to the end of my body I found out that style did not implement to my html pages. Therefore I ended up by not moving my bootrsrapcdn links from head. This change eliminated render-blockings and performance raised.
-	I ran my javascript codes through [JSHint](https://jshint.com/) and the test told me to fix some issues. First I started by adding var instead of const in my code and then there were semicolons missing so I also added them. JSHint also told me to not use ”new” as side effects in maps.js, and warned me that google and MarkerClusterer were undefined in the code but since this is copied from Google maps API platform I didn’t need to make any changes there. 
-	I also recieved warnings for using ES6 & higher. I could ignore them which is fine. Works in all browsers except for Internet Explorer and these warnings are fine because they come from google and other libraries.
-	While testing, I found out that the quiz score would not generate to my result.html page. While coding I used to test my project with
[Visual Studio IDE](https://visualstudio.microsoft.com/). Because of this the script was coded so it could generate score to result.html via localhost url when showing the webpage 
with live server in Visual Studio IDE. So I needed too make changes in my code. The solution were to change my code on several places. I started by deleting 
return window.location and added localStorage.setItem instead to store data in script.js. localStorage.setItem was choosen because the stored data has no 
expiration time, which suited my project. Then I added window.location.assign to my code and added return.html in paranthesis so the data could
be generated to the result page. Then I deleted all code in getLocation(), recommendation() and getImage() functions in maps.js to replace them with
localStorage.getItem() instead so it could generate data to the result page. I resolved the issue and when the quiz were finished the score, image and locations on google maps were working as it should. The issue was solved. 
-   The console displayed an error in script.js telling that there was an uncaught typeError which meant that it could not set property 
of ’innerHTML’ of null in my home page, index.html. I thought about adding an if statement so the code could generate questions when the 
'Start Quiz' button in home page had been clicked. Then I realized that I had an script with path to script.js in my index.html page. Since I did not need this 
script in my index.html code I decided to remove it from the home page and then tested my page. This solved the error and it was removed 
from console. So by removing script from index.html I was also able to reduce script used. 	
-   While testing result.html I found out that the score container was showing Undefined, because quiz had not been made. This is not a great 
user experience. Also the image which is displayed depending on result was broken, no image were to be 
shown which by the way means that the code works well. But this is also not a good user experience. I did not want the page to show anything under score 
table when the quiz were not made. I could show nothing under score table or show an image or for example write a text to tell that the user must go back 
and make the quiz. At last I decided to implement an popup which tells that the user forgot to make the quiz. I also wanted the button in the popup alert to 
redirect the user to the quiz page. I added a timeout so after clicking the button the user would be redirected to the quiz page after 5 seconds. 
I then added a text under score telling that there is no enough data to give recommendations. Five seconds of timeout time is enough to 
read the text under score table. In getLocation() function in maps.js I added an if statement to alert a popup message and to return the user back 
to the quiz page when button is clicked. I used document.getElementById() to hide the recommendation image and to hide the Undefined message 
I used the same method. Finally I added an setTimeout() function redirecting to the quiz page after 5 seconds, which is enough time to read the message text under score. 
Tested this solution and it worked, the issue was solved. 
![Screenshot of Undefined issue in result.html](assets/images/result_undefined.PNG)

### Latest

-   These are latest JSHint reports - [Script.js report](assets/images/jshint_script.PNG), [Maps.js report](assets/images/jshint_maps.PNG). Fixes have been made as written above, some warnings still remains.
-   While I was making final tests of my project there was something disturbing in quiz page. When I started the quiz and the script was 
generating first question both Previous button and Next button were showing. It was the first question in quiz, I thought that the 
Previous button was not neccessary and logically it would not suit well. So since it is the first question and there is no previous question 
I decided to hide the Previous button to only show after the second question generated. I searched on the [internet](https://stackoverflow.com/questions/9075440/javascript-button-show-hide-on-text-changed) and found feed which showed how 
to hide and unhide the Previous button. In the generateQuestions(questionNumber) function I added an if statement with questionNumber === 0 
in paranthesis so when the first question is shown ,previousButton.style.visibility = 'hidden', will hide the Previous button. Then I added 
an else statement to ,previousButton.style.visibility = 'visible', to make the Previous button visible after the first question have been 
answered. This solution to hide Previous button in first question and make it visible thereafter worked and from an user experience angle 
the quiz buttons is more logic now. This disturbing issue was then solved. 
![Example of previous button issue](assets/images/previous_button.gif)
- New fix result.html: Previous fix in result.html where score was showing undefined. Redirections and general code were showing error in
console. Previous fix seemed to work but in reality things got complicated and confusing. I decided to make a new fix to clean things up. 
I deleted previous code in getLocation() function and added new code in initMap() function, in maps.js. I then moved localStorage.getItem("scoreStorage")
in initMap() function to then add an if statement, and added an website logo image which will show when there is no score coming from quiz. 
Finally I added a text which will show when there is no score. Both image and text will return when no score is generated to result page. 
Google map is also hidden in result page when no score has been generated. This will limit API requests even more. Errors showing in console
dissapeared and issue were solved. 
![Screenshot of Undefined issue in result.html](assets/images/result_noscore.PNG)

### Further tests and scores

Lighthouse:
-   Before, [Lighthouse before summary document](assets/images/Lighthouse-Report-summary-before.pdf)
![Lighthouse before score](assets/images/lighthouse_before.PNG)
-   After, [Lighthouse after summary document](assets/images/Lighthouse-Report-summary-after.pdf)
![Lighthouse before score](assets/images/lighthouse_after.PNG)

GTMetrix:
![GTMetrix score](assets/images/gtmetrix.PNG)

Google Page Speed Insights:
-   Computer

![Computer](assets/images/googlepagespeedcomputer.PNG)

-   Mobile

![Mobile](assets/images/googlepagespeedmobile.PNG)


### Supported Browsers

| Opera | Chrome | Firefox | Edge | Internet Explorer | Safari |
| ----- | ------ | ------- | ---- | ----------------- | ------ |
| Y     | Y      | Y       | Y    | N                 | Y      |

** NOTE: Safari Browser was tested using an iPhone 7 plus

** Chrome were also tested with Oneplus device

All browsers were tested by:

- Overall webpage use, tried out the quiz. Results were shown.
- Clicking all buttons and check if they were functional.
- Testing social media links, new tab were opened. 
- Google maps were functioning and all functions were working. 
- All EmailJS forms were tested by filling out and submitting.
- Internet Explorer was the only browser that failed  - **This Browser is not supported**

Full list of tested resolutions with & without [Responsivley App](https://responsively.app/):

1. iPhone 5/5se 320px
2. iPhone X 375px
3. Oneplus 7 402px
4. iPhone 7 Plus 414px
5. Ipad 768px
6. Generic Laptop 1280px
7. MacBook Air 1440px
7. Desktop 1920px

---

## External Resources

- [Google Fonts](https://fonts.google.com/) - Used to import fonts for the website.
- [JSHint](https://jshint.com/) - Used to test/validate JavaScript Code.
- [W3C HTML Validator](https://validator.w3.org/) - Used to test/validate HTML code on the website.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - Used to test/validate the CSS code on the website.
- [WebP Converter](https://cloudconvert.com/webp-converter) - Used for my website to compress my images and allow faster loading speed.
- [GIF Maker](https://gifmaker.me/) - Used to create gifs.
- [Font Awesome](https://fontawesome.com/) - Used to provide small icons for the website. eg. Testimonial quotes section.
- [Stack Overflow](https://fonts.google.com/) - Useful resources and giving inspirations. 
- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) - Used to test the loading speed of the website.
- [GTMetrix](https://gtmetrix.com/) - Used to test speed of the website.
- [Responsivley App](https://responsively.app/) - Used to test responsiveness.
- [Favicon](https://favicon.io/) - Used to create my favicon image.
- [W3 Schools](https://www.w3schools.com/) - Used for general resource.
- [Moqups](https://moqups.com/) - Used to create my wireframe.
- [Youtube](https://www.youtube.com/) - Used as a general resource for help with code, how to use Google maps API.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Used to check accessabilty and SEO scores for the website.
- [Code Institute](https://codeinstitute.net/) - Main source of coding knowledge.
- Code institute Slack Community - Used to look at some milestone projects for inspiration.
- [khaledkzy converter](https://khaledkzy.github.io/pixel-vh-vw-converter/) - Used to convert.
- [Bootstrap](https://getbootstrap.com/) - Used general build of the Webpage.
- [Logomakr](https://logomakr.com/) - Used to create my logo.
- [Google Maps API](https://cloud.google.com/maps-platform/maps?utm_source=google&utm_medium=cpc&utm_campaign=FY20-Q3-global-demandgen-displayonnetworkhouseads-cs-GMP_maps_contactsal_saf_v2&utm_content=text-ad-none-none-DEV_c-CRE_434785623332-ADGP_Hybrid%20%7C%20AW%20SEM%20%7C%20BKWS%20~%20Brand%20%7C%20EXA%20%7C%20Google%20Maps%20API-KWID_43700053663474825-aud-903284319780%3Akwd-335425467-userloc_1012229&utm_term=KW_google%20maps%20api-ST_google%20maps%20api&gclid=CjwKCAiAouD_BRBIEiwALhJH6E15Y-Nn2O68tmYGp2HS293d2-lXCrWVknLbzQ6AjkQ0e36FPnaOFxoCxqEQAvD_BwE) - Used to implement the Google map.

---

