This repository contains a simple recipe generator powered by AWS AI services. It is based on the official AWS tutorial:

https://docs.aws.amazon.com/hands-on/latest/build-serverless-web-app-lambda-amplify-bedrock-cognito-gen-ai/build-serverless-web-app-lambda-amplify-bedrock-cognito-gen-ai.html

Original tutorial uses model Calude 3 Sonnet, which no longer works (or I didn't make it work myself). This project uses model "Amazon Nova Lite".

## Setup

Follow the original tutorial for full setup. Below is simplified version:

- Create an AWS account
- Create static webiste and configure your AWS CLI/SSO
- Clone this repository
- Run "npm install" in root
- Run "npx ampx sandbox" in one terminal
- Run "npm run dev" in another terminal
- Open http://localhost:5173/ (seen in terminal) and create account
- Receipe generator should work

## Troubleshooting

If it doesn't work, check these files::
- ./amplify/auth/resource.ts
- ./amplify/data/resource.ts
- ./amplify/data/bedrock.js
- ./amplify/backend.ts
- ./src/app.css
- ./src/app.tsx
- ./src/index.css
- ./src/main.tsx

You can replace them with versions from this repository if needed.
Note: `npm install` or `npx ampx sandbox` may modify some of these files.
