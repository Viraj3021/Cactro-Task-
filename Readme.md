GitHub Activity API

This is a Node.js API that connects to the GitHub API to fetch user data, repository details, and create issues. The API is deployed and can be accessed online.

🌍 Live URL 
```https://cactro-task.onrender.com/api/github/```

🔗 GitHub Activity API

💂 Project Structure

```/src
  ├── controllers
  │   ├── githubController.js
  ├── middleware
  │   ├── errorHandler.js
  ├── routes
  │   ├── githubRoutes.js
  ├── services
  │   ├── githubService.js
.env
server.js
package.json
README.md
```
🚀 How to Run Locally

1️⃣ Clone the Repository

git clone ```https://github.com/Viraj3021/Cactro-Task-.git```
```cd Cactro-Task-```

2️⃣ Install Dependencies

```npm install```

3️⃣ Create a `` File

Create a ```.env``` file in the root folder and add:

```
GITHUB_API=https://api.github.com
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-github-personal-access-token
PORT=3000
```

4️⃣ Run the Server

``npm start``

The server will start at:📌 http://localhost:3000

📌 API Endpoints

Method

Route

Description

Example

GET

```[/api/github/user](https://cactro-task.onrender.com/)```

Fetch GitHub user details

/api/github/user

GET

```[/api/github/repos/:repo](https://cactro-task.onrender.com/api/github/)```

Fetch repository details

```[/api/github/repos/cactro-task](https://cactro-task.onrender.com/api/github/job-board-backend/)```

POST

```[/api/github/repos/cactro-task](https://cactro-task.onrender.com/api/github/job-board-backend/issues)```
Create an issue in a repo

/api/github/repos/cactro-task/issues

📩 Usage Examples

1️⃣ Get User Data

curl https://cactro-task.onrender.com/api/github/user

2️⃣ Get Repository Details

curl https://cactro-task.onrender.com/api/github/repos/cactro-task

3️⃣ Create a GitHub Issue

curl -X POST https://cactro-task.onrender.com/api/github/repos/cactro-task/issues \
     -H "Content-Type: application/json" \
     -d '{
          "title": "Bug: API Error",
          "body": "Getting a 404 error on repo details"
        }'

🛠 Built With

Node.js

Express.js

Axios

Render (for deployment)

🎯 Future Improvements

Add authentication for API calls

Implement more GitHub features (PRs, commits, etc.)

Improve error handling

💎 Need Help?

If you have any issues, feel free to open an issue or contact me at bhosaleviraj23@gmail.com.

🚀 Happy Coding! 😊
