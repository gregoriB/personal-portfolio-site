<div style="text-align: center; width: 100%;">
<h1 style='margin: 2rem auto;'>Personal Portfolio Site<h1>

<div style='margin: 0 auto; width: 700px'  >
    <img src="https://raw.githubusercontent.com/gregoriB/personal-portfolio-site/experimental/src/images/portfolio-site.jpg" alt="portfolio site"/>
</div>

#### [Check it out here!](https://www.brandon-gregori.com)

<div style='width: 900px; margin: 0 auto;'>

Made with React, Typescript, CSS, and AWS Lambda functions for using NodeMailer. Check out the `node-express-server` branch for a Node and Express server version.

</div>

#
## Install

<div style='width: 900px; margin: 0 auto;'>

To run locally, run `npm install` or your package manager equivalent.  Then install `netlify-cli` with your package manager and run `netlify dev`.  After it loads, go to `https://localhost:3000`.

To use NodeMailer, configure the `fetch` url in '/src/components/ContactPage.tsx' for `https://localhost:34567/sendEmail`.  Then in '/functions/sendEmail.js' either configure your own smtp email, or follow the example on the [NodeMailer](https://nodemailer.com/about/) website to use an ethereal dummy email.

</div>

#

<p style="text-align: center; margin: 5rem auto;">
    <a href='https://app.netlify.com/sites/brandon-gregori/deploys'>
        <img src='https://api.netlify.com/api/v1/badges/adbf5a4d-2089-4e6a-9de4-802a3a1b25f8/deploy-status' alt='Netlify Status'>
    </a>
</p>
</div>