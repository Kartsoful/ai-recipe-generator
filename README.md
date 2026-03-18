This repository contains a simple recipe generator powered by AWS AI services. It is based on the official AWS tutorial:

https://docs.aws.amazon.com/hands-on/latest/build-serverless-web-app-lambda-amplify-bedrock-cognito-gen-ai/build-serverless-web-app-lambda-amplify-bedrock-cognito-gen-ai.html

Original tutorial uses model Calude 3 Sonnet and it doesn't work (or I didn't make it work myself). This project uses model "Amazon Nova Lite".

Follow the original tutorial for full setup. Below is simplified version using this repository.

- Create AWS account
- Create static webiste and configure your AWS CLI/SSO
- Clone this repo
- Run "npm install" in root
- Run "npx ampx sandbox" in one terminal and "npm run dev" in another terminal
- Go to http://localhost:5173/ and create account and login (Port might be different if port 5173 is used. Check from terminal)
- Receipe generator should work

If doesn't, there might be changes in following files:
- ./amplify/auth/resource.ts
- ./amplify/data/resource.ts
- ./amplify/data/bedrock.js
- ./amplify/backend.ts
- ./src/app.css
- ./src/app.tsx
- ./src/index.css
- ./src/main.tsx

Take them from this repo and replace fully. Npm install or npx ampx sandbox might edit these.
