const axios = require('axios');
const { GITHUB_API, GITHUB_USERNAME, githubHeaders } = require('../config/githubConfig');

exports.fetchUserData = async () => {
  const { data: user } = await axios.get(`${GITHUB_API}/users/${GITHUB_USERNAME}`, githubHeaders);
  const { data: repos } = await axios.get(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos`, githubHeaders);

  return {
    username: user.login,
    followers: user.followers,
    following: user.following,
    public_repos: user.public_repos,
    repositories: repos.map(repo => ({
      name: repo.name,
      url: repo.html_url,
      stars: repo.stargazers_count,
    })),
  };
};

exports.fetchRepoData = async (repoName) => {
  try {
    const apiUrl = `${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}`;
    console.log(`Fetching repo data from: ${apiUrl}`);  // Log the API URL
    console.log(`Headers: ${JSON.stringify(githubHeaders)}`);  // Log headers

    const response = await axios.get(apiUrl, githubHeaders);
    console.log(`GitHub API Response: ${JSON.stringify(response.data)}`);  // Log response

    return {
      name: response.data.name,
      description: response.data.description,
      stars: response.data.stargazers_count,
      forks: response.data.forks_count,
      open_issues: response.data.open_issues_count,
      url: response.data.html_url,
      avatar_url: response.data.owner.avatar_url,
    };
  } catch (error) {
    console.error(`Error fetching repo data: ${error.response?.status} - ${error.response?.data?.message}`);
    throw new Error(error.response?.data?.message || "Unknown error occurred");
  }
};


exports.createIssue = async (repoName, { title, body }) => {
  if (!title || !body) throw new Error("Title and body are required");
  
  const { data } = await axios.post(
    `${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}/issues`,
    { title, body },
    githubHeaders
  );

  return { message: "Issue created successfully", issue_url: data.html_url };
};