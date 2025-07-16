---
title: "Firebase project to deploying your Next.js application"
seoTitle: "Deploy Next.js App with Firebase Guide"
datePublished: Wed Oct 09 2024 07:47:35 GMT+0000 (Coordinated Universal Time)
cuid: cm21khmae000809jqc5ehcyip
slug: firebase-project-to-deploying-your-nextjs-application
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1728459935503/81f3e248-55e4-4b58-ba0f-9348e87baf03.webp
tags: firebase, nodejs, nextjs

---

Creating a Next.js site with Firebase Hosting involves several steps, from setting up your Firebase project to deploying your Next.js application. Here's a comprehensive guide to help you through the process:

1\. \*\*Set Up Firebase:\*\*

\- Visit the \[Firebase website\](https://firebase.google.com/) and sign in with your Google account.

\- In the Firebase Console, click on "Add project" to create a new Firebase project. Provide a unique project name and follow the prompts to set it up.

2\. \*\*Install Firebase CLI:\*\*

\- Open your terminal and install the Firebase CLI globally using the command:

\`\`\`bash

npm install -g firebase-tools

\`\`\`

\- Log in to your Firebase account via the CLI:

\`\`\`bash

firebase login

\`\`\`

3\. \*\*Initialize Firebase in Your Next.js Project:\*\*

\- Navigate to your Next.js project directory in the terminal.

\- Run the following command to initialize Firebase:

\`\`\`bash

firebase init

\`\`\`

\- Select "Hosting" and choose your Firebase project from the list. Set the public directory to \`out\` (assuming you are using Next.js default build library). Configure single-page app (SPA) routing as needed.

4\. \*\*Configure Next.js for Export:\*\*

\- Add an export script in your \`package.json\`:

\`\`\`json

{

"scripts": {

"export": "next export"

}

}

\`\`\`

\- Update your \`next.config.js\` to include:

\`\`\`javascript

/\*\* @type {import('next').NextConfig} \*/

const nextConfig = {

output: 'export'

}

module.exports = nextConfig;

\`\`\`

5\. \*\*Build and Export Your Next.js App:\*\*

\- Run the following commands to build and export your Next.js app:

\`\`\`bash

npm run build && npm run export

\`\`\`

6\. \*\*Deploy to Firebase Hosting:\*\*

\- Deploy your app using the Firebase CLI:

\`\`\`bash

firebase deploy

\`\`\`

\- Confirm the deployment when prompted. Once completed, Firebase will provide a hosting URL where your app is live.

7\. \*\*Optional: Automate Deployment with GitHub Actions:\*\*

\- You can set up GitHub Actions to automate the deployment process whenever you push changes to your repository.

By following these steps, you can successfully create and deploy a Next.js site using Firebase Hosting. This setup allows you to leverage Firebase's powerful hosting capabilities for both static and dynamic content, making your application accessible to users worldwide. For more detailed information, you can refer to the \[Firebase Hosting documentation\](https://firebase.google.com/docs/hosting) and \[Next.js deployment guide\](https://nextjs.org/docs/pages/building-your-application/deploying).