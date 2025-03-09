const axios = require('axios');
require('dotenv').config(); // Ensure environment variables are loaded

const GITHUB_API = "https://api.github.com";
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Validate that environment variables are set
if (!GITHUB_USERNAME) {
    throw new Error("GITHUB_USERNAME is not set in environment variables.");
}
if (!GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN is not set in environment variables.");
}

// GitHub API request headers with authentication
const githubHeaders = {
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
    },
};

module.exports = { GITHUB_API, GITHUB_USERNAME, githubHeaders };
