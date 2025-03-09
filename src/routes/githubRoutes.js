const express = require('express');
const githubController = require('../controllers/githubController');

const router = express.Router();

router.get('/github', githubController.getUserData);   
router.get('/github/:repo', githubController.getRepoData);  
router.post('/github/:repo/issues', githubController.createIssue);  

module.exports = router;
