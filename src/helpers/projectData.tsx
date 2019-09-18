const projectData = [
    {
        name: "Super Meter Arcade Ecommerce Shop",
        date: "September 18, 2019",
        image: "super-meter-arcade.jpg",
        alt:
            "The front page of the store-front.  It shows a large banner with a statement about their competitive prices, and a carousel of featured items.",
        caption:
            "A full-stack ecommerce site.  Features product searching/filtering, and CRUD functionality for user registration and authentication.",
        site: "https://super-meter-arcade.herokuapp.com",
        repo: "https://github.com/gregoriB/super-meter-arcade-ecommerce-site",
        id: "super-meter-arcade",
        desc: `
            <h2>Technologies used:</h2>
            <p>Typescript, React, Redux, Node, Express, SQL, Bootstrap</p>

            <h2>The goal:</h2>
            <p>I made this to improve at full-stack development, and to gain more experience with Redux, Typescript, and SQL databases.</p>

            <h2>Obstacles overcome:</h2>
            <p>The largest hurdles faced with this project were on the SQL side of things.  I had only done MySQL courses up to this point, so I was diving deeper into things and solving problems as they arose.  The entire application is tied pretty heavily to the database.  For instance, doing a search returns database query results dynamically as the user is typing into the search bar.  Another issue was with product categorization.  My first instinct is to add an array of categories to each product in the table, but that's not the relational DB way.  So instead I made a "categories" table and a table to connect it with the "products" table.  Then I had to make a view that would query that table to return all of the product info along with the category array I needed for proper filtering.</p>
            <p>User authentication was another hurdle because I had to learn how data encryption and hashing works.  For security reasons, I didn't want passwords being stored as raw text on my server.  There also ended up being a lot of time spent getting more comfortable with both Redux, and Typescript.  I also decided to use <em>styled-components</em> this time around to help keep the styling more organized, and <em>Bootstrap</em> to save time with things like modals and the home page carousel.  Lastly, I made the backend using MySQL, but ended up switching that over to Postgres before hosting.  I did this because Heroku natively supports Postgres DBs, and because I wanted to learn Postgres.</p>
            
            <h2>Final thoughts:</h2>
            <p>With this project I wanted to create something that could conceivably be a real-world application.  While I didn't get to implement every feature I had in mind, such as persistent user shopping carts and automated discounts during sales events, I think the finished product is very polished, functional, and user-friendly.</p>
            <span>- Brandon Gregori</span>
        `
    },
    {
        name: "A Simple Video Game",
        date: "October 27th, 2018",
        image: "react-game.jpg",
        alt:
            "Screen shot of the game.  They are on stage eight with a score of 53,750 and 12 seconds left on the timer.  There are 15 pieces left for the player to pick up before starting the next level.",
        caption:
            "A simple video game made with React.js.  Pick up the objects to increase your score as much as possible before the timer reaches zero.",
        site: "https://gregorib-react-game.netlify.com/",
        repo: "https://github.com/gregoriB/simple-game-React",
        id: "react-game",
        desc: `
            <h2>Technologies used:</h2>
            <p>Javascript, React, CSS</p>

            <h2>The goal:</h2>
            <p>After learning the basics of React, I wanted to see if I could use it to make a video game.  As it turns out, I can.</p>

            <h2>Obstacles overcome:</h2>
            <p>Moving something on the screen was the first obstacle, which quickly turned into moving something without invoking the operating system automatic
            key-repeat.  I used <em>setInterval</em> and some simple flags to accomplish that.  When I decided to add more objects to the screen, I ended up running into
            frame rate issues as the number of objects increased.  I had to learn more about how React lifecyles and updates worked to optimize the game performance.
            Then I had to figure out the code for object collisions so the player could pick up objects to increase their score.</p>
            <p>When I got sick of passing props through multiple child components, I decided to learn to use the React context api works. Lastly, there was a lot of testing the game for bugs and polishing to user experience.
            Later on I revisited this project and added in a cheat mode that allows the player to shoot objects and drag the player square just to learn how to do it.
            <em> Press 'm' to enable the cheat mode.</em></p>
            
            <h2>Final thoughts:</h2>
            <p>Even though it's a really simplistic game, I learned a lot about how React works while making it.  Coming from building a to-do list, this was a much more engaging way to 
            use the library.  I also improved at solving more complicated problems than I usually encountered with regular web development.</p>
            <span>- Brandon Gregori</span>
        `
    },
    {
        name: "The Verge Top Articles API Site",
        date: "September 12th, 2018",
        image: "theVerge-top-stories.jpg",
        alt:
            "The verge dot com top stories site.  Shows a banner with the verge logo, and only the to two news stories.",
        caption:
            "A site that fetches the top 10 trending articles from TheVerge.com using an API from newsapi.org.",
        site: "https://theverge-top-stories.herokuapp.com/",
        repo: "https://github.com/gregoriB/the-verge-top-stories-NodeJS",
        id: "the-verge",
        desc: `
            <h2>Technologies used:</h2>
            <p>CSS, Node, Express, EJS</p>

            <h2>The goal:</h2>
            <p>I wanted to improve my CSS styling abilities, advance my skills with git, gain experience with fetching data from an external API using asynchronous 
            requests, and to improve at mobile responsive design skills.</p>

            <h2>Obstacles overcome:</h2>
            <p>Since the API data is from a 3rd party source that is likely scraped from the theVerge.com website, some of it needed to be altered to make it
            work nicely with my site.  For example, the image urls had spaces in them, which did not work in the browser.  I had to dynamically replace
            the spaces with "%20" when necessary for the images to render correctly. I also had to learn how to use .ENV files to export my API key so I could
            safely upload it to my public github repo without also making my key public.</p>
            
            <h2>Final thoughts:</h2>
            <p>Even through it's one of my earliest projects, the quality of this site still holds up today. For my first solo website build, I couldn't be happier with how
            it turned out.</p>
            <span>- Brandon Gregori</span>
        `
    },
    {
        name: "Personal Portfolio Site",
        date: "June 17th, 2019",
        image: "portfolio-site.jpg",
        alt: 'the "about me" page for this website.',
        caption: "My personal portfolio site, made with React.js and Node.js.",
        site: null,
        repo: "https://github.com/gregoriB/personal-portfolio-site",
        id: "portfolio-site",
        desc: `
            <h2>Technologies used:</h2>
            <p>Typescript, React, React-router, Node, Express, CSS</p>

            <h2>The goal:</h2>
            <p>I wanted to create a personal portfolio site that was unique, visually pleasing, fast, efficient, and would show off my skills with 
            React and CSS.</p>

            <h2>Obstacles overcome:</h2>
            <p>There were a number of firsts while making this site.  First time: Using Typscript, making component transitions, making a modal from scratch, integrating form validation and 
            email forwarding, and using various CSS properties, like keyframes, scroll-snap, clip-path, and mix-blend-mode to great effect.  By the time I reached the end of the project, my
            design and CSS skills had improved so much that I went back and re-styled everything.  This was actually my most ambitious and professional project to date at the time
            of completing it.  I refused to use any prefab components, styles, or animations.  Everything, including the modal, responsive navbar, transitions, and animated background on the 
            "About Me" page, were made be me.</p>
            <p>Node and Express were initially used for the backend, but I ended up changing to the serverless route and using AWS lambda functions instead.  I had to learn how to do that, but 
            it was worth it since there is no pointing in paying to host a full server when I only need it for the occasional contact form email.</p>
            
            <h2>Final thoughts:</h2>
            <p>This was as great experience and I'm very happy with how it turned out.  I had my doubts while developing it, mostly because I was spending more time 
            working on my portfolio site than any of the projects in my porfolio, but the end result is so worth it.  Given that this was my most advanced project to date, I
            decided to also include it in my portfolio.</p>
            <span>- Brandon Gregori</span>
        `
    },
    {
        name: "3rd Strike Frame Data App",
        date: "February 24th, 2019",
        image: "3rd-strike-app.jpg",
        alt: "A table displaying the special move frame data for Chun Li",
        caption:
            "Street Fighter III: Third Strike frame data.  Made using React.js and data scraped from a different website.",
        site: "https://3rd-strike-frame-data.netlify.com/",
        repo: "https://github.com/gregoriB/3rd-strike-app",
        id: "third-strike",
        desc: `
            <h2>Technologies used:</h2>
            <p>Javascript, React, React-router, JSON, CSS</p>

            <h2>The goal:</h2>
            <p>This is the first site I made purely for personal reasons.  It's an ongoing
            passion project that I'm making for a small community of old-school fighting game enthusiasts.</p>

            <h2>Obstacles overcome:</h2>
            <p>This was my first introduction to React-router.  While I didn't technically have to use routes, it makes for a more predictable and familiar user experience
            to have them.  I had to figure out how that worked, how to deal with bad routes, and how to get routes to stay when refreshing the page.  This was also my first
            project made using React hooks.  Hooks had just been officially integrated into React when I started this, so I decided to give that a shot.</p>  
            <p>The biggest obstacle
            encountered was dynamically mapping the data from JSON files to a table while also parsing the data and assigning it style classes based on the data content.  For instance
            if the data was a number, it was assigned a class of "number," and also assigned a class of "negative," "zero," or "positive."  This was done with every piece of data in table for many different classes, resulting in 
            dozens of unique classes used in thousands of table entries.   It was a tedious process that uses a lot of conditional logic.</p>
            
            <h2>Final thoughts:</h2>
            <p>The project is ongoing and far from complete, but the core of it, which is the organized tabular data and the nav bar, are there to build upon.  I hope to some day have something 
            the 3rd Strike community will be happy to use, and expand the project into either a PWA or a native mobile app using React-native.</p>
            <span>- Brandon Gregori</span>
        `
    },
    {
        name: "3rd Strike Web Scraper Extension",
        date: "January 28th, 2019",
        image: "3rd-strike-extension.jpg",
        alt:
            "A screenshot of the browser extension page showing that the extension is installed and displaying the drop down info for the extension.",
        caption:
            "A browser extension for scraping data from http://ensabahnur.free.fr/BastonNew.  The data is JSON-formatted and used in my 3rd Strike app.",
        site: null,
        repo: "https://github.com/gregoriB/3rd-strike-web-scraper-browser-extension",
        id: "browser-extension",
        desc: `
            <h2>Technologies used:</h2>
            <p>HTML, CSS, Javacript</p>

            <h2>The goal:</h2>
            <p>The data I needed for my 3rd Strike app was only available in tables on one website, and was stored on a private database.  I decided to make a 
            web scraping extension using Javascript that I could use to format and download the data into a JSON file.  There were almost 80 JSON files worth of data, so scraping 
            the site seemed like the most time efficient option.</p>

            <h2>Obstacles overcome:</h2>
            <p>I had to learn how to make a browser extension first.  Once I did that, it was really just a matter of looping through the table HTML, getting the 
            relevant data, putting it into an object, and then downloading it into a JSON file.  Most of the difficulty came form navigating through a table HTML that was clearly not meant for that, and then 
            creating the conditional logic to organize the data.  There were a lot of nested loops, but luckily the dataset is small enough that the process still runs 
            extremely fast.  Then I just had to learn how to download the object into a JSON file.</p>
            
            <h2>Final thoughts:</h2>
            <p>This was the first time I had to write a tool for a project.  Even though I will probably never use it again, and it's unlikely that anyone else would
            need it, I'm glad I made it myself instead of trying to use an existing web scraper application.  It only took me a day to make, and I had an good  
            time doing it.</p>
            <span>- Brandon Gregori</span>
        `
    },
    {
        name: "HTML5 Video Player",
        date: "January 4th, 2019",
        image: "video-player.jpg",
        alt:
            'A video player with "Big Buck Bunny" playing on it.  The video is not in fullscreen and there is a button below it for choosing a different video file',
        caption:
            "A video player made with HTML5 and Javascript.  Features fullscreen functionality and responsive controls.",
        site: "https://codepen.io/gregorib/full/vvReVG",
        repo: "https://github.com/gregoriB/custom-HTML5-video-player-Javascript",
        id: "video-player",
        desc: `
            <h2>Technologies used:</h2>
            <p>HTML5, CSS, Javascript</p>

            <h2>The goal:</h2>
            <p>Considering how lacking the built-in browser video player is, I thought it would be a good idea to make my own in case I need one in the future.</p>

            <h2>Obstacles overcome:</h2>
            <p>By far the biggest hurdles for this project were with cross-browser compatibility. It took a while, but eventually I ended up with something that had responsive controls and worked consistently across  
            the major browsers.  This struggle was mostly because I added in a lot of little features and quality of life improvements that I feel all video player should have.
            Little things like having the controls fade in and out when appropriate, the video pausing and showing the current scene while skipping 
            ahead and then upausing when the user stops skipping, keyboard controls, and centering the image in fullscreen mode used most of my time and energy.</p>  
            <p>When I had everything
            working correctly and the video player felt polished enough, I added in a feature to load in compatible videos.  This presented new issues with different video 
            aspect ratios and how they looked in fullscreen mode that had to be dealt with.</p>
            
            <h2>Final thoughts:</h2>
            <p>With this project, I realized how important polish and quality of life features can be for a video player.  Platforms like youtube have set the standard 
            for that, and anything less just feels unsatisfying and limiting.  If I do use this video player for my own sites, I will be spending more time styling it because
            right now it's not quite where I would like it to be.</p>
            <span>- Brandon Gregori</span>
        `
    },
    {
        name: "HTML5 Canvas Drawing App",
        date: "December 29th, 2018",
        image: "html5-drawing-app.jpg",
        alt: "A very bad drawing of a tree and a small house on a sunny day.",
        caption: "An HTML5 Canvas drawing app with jpeg download functionality.",
        site: "https://codepen.io/gregorib/full/PXJryw",
        repo: "https://github.com/gregoriB/drawing-app-HTML5-Canvas",
        id: "drawing-app",
        desc: `
            <h2>Technologies used:</h2>
            <p>HTML5, CSS, Javascript</p>

            <h2>The goal:</h2>
            <p>I wanted to make something interactive with HTML5 canvas.</p>

            <h2>Obstacles overcome:</h2>
            <p>This was my introduction to HTML5 canvas, so everything was very new.  I had to learn how canvas worked, but I didn't want to make another video game so I made this.
            Learing canvas ended up being the easier part.  I spent more time figuring out how to download the image using <em>toDataUrl()</em>, and getting touch input
            to work on a touch screen laptop and tablet.  I'd hoped mouse emulation would have been enough to make it work on a touch device, but that ended up 
            not being the case.  The end result was adding extra event listeners and a bit of extra logic for touch inputs.  I didn't have to do this because the odds of anyone
            but me using this with a touch device are pretty low, but it was my first experience with touch controls not working and I wanted to learn how to fix that.</p>
            
            <h2>Final thoughts:</h2>
            <p>This was a fun way to learn HTML5 canvas and touch events.  While it's too lacking on features to use as my go-to drawing app, 
            it was a good learning project, and was enjoyable and quick to make.</p>
            <span>- Brandon Gregori</span>
        `
    }
];

export default projectData;
