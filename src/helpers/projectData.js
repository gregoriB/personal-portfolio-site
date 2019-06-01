const projects = {
    name: "The Verge Top Stories API Site",
    date: "September 12th, 2018",
    image: "../public/images/theVerge-top-stories.jpg",
    linkSite: "https://theverge-top-stories.herokuapp.com/",
    linkRepo: "https://github.com/gregoriB/the-verge-top-stories-NodeJS",
    desc: `
        This site uses Node.js with Express.js and an API from newsapi.org.  My reasons for making this site were to gain experience 
        using APIs with Node.js, and to make something that was stylish, modern, and responsive for use on mobile devices.

        I learned a lot while making this.  It was actually my first good project after completing the "Web Developer Bootcamp" course on udemy.com.  
        I developed a better understanding of how APIs worked, how git worked, and how to keep my API key secret by using a dotenv file that does not  
        upload to the public repository on github.

        Some of the biggest issues I had to solve were with API itself.  I had an issue with images not displaying if their links contained spaces, due 
        to the way the browser handles spaces itself.  My solution was to replace all spaces in the link with "%20", which is apparently what the browser
        does itself.  I also had a problem authors not displaying correctly if there were multiple authors.  I ended up creating a simple conditional that
        looked for a "," in the author string, and if it found one it would just changed the author to "The Verge Staff."  There were other simple issues 
        like that.  Looking back, these problems seem incredibly easy to solve, but at the time I felt like an absolute legend after figuring them out on my own.

        This project took me around 2-3 days to complete.  Overall, I'm very happy with how the site turned out.  This is probably one of my few projects that 
        I am completely satisfied with, and the quality of my work still holds up well now.  It's not very flashy or advanced by any stretch, but for a first 
        real project, I couldn't be happier.
    `,
    name: "A Simple Game Made with React.js",
    date: "October 27th, 2018",
    image: "../public/images/react-game.png",
    linkSite: "https://gregorib-react-game.netlify.com/",
    linkRepo: "https://github.com/gregoriB/simple-game-React",
    desc: `
        I'm excited to have this project in my portfolio.  it's just a game I made in React.  It's not a complicated game.  The player tries to increase 
        their score by moving a square around the screen and picking up orange items before the timer runs out.  It's not beautiful game.  The main "character" is 
        just a black square.  The stage is a green rectangle.  The items you pick up are just orange circles.  Everything is made out of div elements. The music is 
        royalty-free music I got from youtube, and the sound effects were from a freesound.org.  There are no enemies or different levels.  It's about as simple 
        as something can get while still being called a game.

        So why be excited to show this one off?  Well it's a game I made from the ground up using just React.  No special game libraries were used.  I didn't follow 
        a tutorial. The movement, collision, timers, score counters, game states, music loop, etc., were all done on my own.  Before that, the only thing I'd done 
        with React on my own was a to-do list app.  Now I was making simple video games.  The whole experience was great.  I learned a lot about how React works, 
        especially when it comes to component lifecycles.  Optimization ended up being a big issue at first.  As the number of pickups on screen increased, my 
        performance decreased.  My solution for that was to maintain strict control over when everything re-rendered.  Outside of that, there were really no big 
        issues.  Instead there were lots of small issues to deal with.  I had the core gameplay loop working in 3 days, but I spent the next week polishing up the UI, 
        testing and eliminating bugs, and adding small improvements wherever I saw the need for it.

        I did take some of what I learned here to make a different game with shooting and enemies that attack the player, but nothing really came of it.  That is also on 
        my github. Ultimately I'm just interested in web development, but it was fun to make something a little different using my web dev toolkit.
    `,
    name: "HTML5 Canvas Drawing App",
    date: "December 29th, 2018",
    image: "../public/images/html5-drawing-app.png",
    linkSite: "https://codepen.io/gregorib/full/PXJryw",
    linkRepo: "https://github.com/gregoriB/drawing-app-HTML5-Canvas",
    desc: `
        After I followed a really basic guide for drawing to the screen in HTML5 canvas, I decided I wanted to go a bit further with that.  As far as drawing apps 
        go, this one is really basic.  I added different brush sizes, a color pallete, a custom color selector, and the ability to save the image to a png file.  
        While this isn't a responsive page, it's is touchscren compatible so it should still be usable on tablets and touch screen laptops.

        This was actaully my first venture into HTML5 canvas, so there was a lot of new stuff to learn.  The most difficult things with this one, were saving the
        image to a file on the computer, and getting the touchscreen controls to work properly on touch screen devices.  Everything else was just learning how HTML5 
        canvas works.

        This wasn't a deep, challenging project at all, but I think it came out really nice so I just wanted to share it.
    `,
    name: "HTML5 Video Player",
    date: "January 4th, 2019",
    image: "../public/images/video-player.png",
    linkSite: "https://codepen.io/gregorib/full/vvReVG",
    linkRepo: "https://github.com/gregoriB/custom-HTML5-video-player-Javascript",
    desc: `
        Once I finished my HTML5 canvas drawing app, I was ready to tackle something else.  Making a video player seemed to be a logical choice.  HTML5 video is the 
        standard for video playback on the web now, and many sites use some sort of custom video player because the one included in browsers leaves a lot to be 
        desired.

        The project seemed like it would be really simple at first, but I soon learned that there would be a lot of small issues and features standing between me and 
        a quality video player.  I also had some problems with getting the video centered in fullscreen mode and ended up solving that by using the height of the screen 
        and the aspect ratio of the video being played to dynamically create a margin that would center the video properly in fullscreen.  That was important because 
        I had added a button to load in video files, and I really wanted it to be able to nicely play anything someone could throw at it.

        I had the video player working in a few hours, but spent the next 4 days tackling bugs, adding features, and polishing everything.  I think it came out really nice, and
        I hope someday to find a use for it in a different project.
    `,
    name: "3rd Strike Frame Data in React",
    date: "February 24th, 2019",
    image: "../public/images/3rd-strike-app.png",
    linkSite: "https://3rd-strike-frame-data.netlify.com/",
    linkRepo: "https://github.com/gregoriB/3rd-strike-app",
    desc: `
        This is a frame data app for Street Fighter III, made for desktop using React.  Anyone who looks at this is probably thinking "what's the big deal? It's a 
        spreadsheet."  Believe me, I can see why this is probably the most underwhelming project in my portfolio at first glance.  It's not much to look at, and it's 
        really not doing much at any one time.  How I made it is the far more interesting part.

        The first thing I had to do was get the data I needed.  Unfortunately, no API or JSON files exist for that.  This is, after all, a 20 year old fighting game.  
        Luckily there is a website with all of the data laid out in tables for each character.  Getting that data from the website was tricky though.  I made my own
        webscraper browser extension that would put the data from each table into an object and download it in JSON format.  I did that for all 19 characters, which was 
        a total of 78 JSON files.

        Once I had all of the data, it was time to make a React app and display it.  That was actually pretty easy itself, but I wanted to sort through all of the data 
        so I could give everything a class.  For instance, if a number was negative, it was given classes of "number" and "negative", if it was a special move, a super 
        move, or a parry, it was given those classes, and so on.  I also ended up converting the directional notation into actual unicode characters, so "fwd" would be 
        and arrow pointing to the right, "360" would be an arrow in a circle, etc..

        This was a tedious process resulting in a lot of conditionals and switch statements, but the end result is a very clean and easy to read resource that I can 
        happily use whenever I want to learn about a game character's frame data.  I didn't necessarily need to use React, but there is the possibility that I will 
        someday add a lot of graphics and other features to in, and possibility even port it to mobile using React-native.  I did this for me, but releasing something 
        for the 3rd Strike community to use would be satisfying too.
    `,
    name: "3rd Strike Web Scraper Extension",
    date: "January 28th, 2019",
    image: "../public/images/3rd-strike-extension.png",
    linkSite: null,
    linkRepo: "https://github.com/gregoriB/3rd-strike-web-scraper-browser-extension",
    desc: `
        This is the browser extension I made and used to scrape the data I needed for my 3rd Strike frame data app.  It's not fun to use or look at, but it served me 
        well.  Basically I needed the data from a website, and the simplest way to get it was to make an extension for google chrome that would allow me to download JSON-formatted 
        files when I clicked a button on the page.  It was mostly about solving issues with the data formatting as they came up.  Having everything in the proper format 
        was going to be crucial for later use in my app.

        The data being pulled from their website was pretty messy, and not all of it was formatted the same so I had to make a few extra functions to sort through 
        that.  It really just came down to tackling one problem after the next until I had all of the data being properly formatted and added to an object.  Then I had to 
        figure out how to download it into a JSON file, which just came down to adding it to a javascript blob, creating a download capable anchor element, adding it to 
        the 'href' attribute, and using the click() method to click it.

        This was a project of utility, but I had a lot of fun with it.  I'd never made a browser extension prior to this, and it was the first time I realized I could use them to 
        just javascript to interface with the HTML on a website to suit my own needs.  Not too long after, I made an a dark theme extension for classic reddit, which is also in my 
        github profile.
    `
}