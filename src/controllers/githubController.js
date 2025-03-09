const githubService = require('../services/githubService');

exports.getUserData = async (req, res, next) => {
  try {
    const data = await githubService.fetchUserData();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.getRepoData = async (req, res, next) => {
  try {
    const data = await githubService.fetchRepoData(req.params.repo);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.createIssue = async (req, res, next) => {
  try {
    const data = await githubService.createIssue(req.params.repo, req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
};