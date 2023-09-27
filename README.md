# UI-Project
User Interface Group Project
----------------------------------
For our project if you don't have an IDE of preference use Visual Studio Code. <br/>
**Before starting make sure you have Nodejs installed on your computer** 

1. In your IDE go to the git/version control tab (it will not show you this if you have a folder currently opened, if you have a folder opened, click on file and close folder).
![image](https://github.com/Brandon-Price/SWE-Project/assets/90214909/dc9ea9c5-62ce-4f76-89c5-ef0d49bd88d0)

3. Click on 'Clone Repository'
4. In the search bar, insert as the link: https://github.com/Brandon-Price/SWE-Project
5. It will then prompt you to choose a folder to save our project, choose somewhere to save.
6. When opening a folder in Visual Studio Code, open the actual source folder. In this case the folder is called "Project". If you open a folder that contains multiple folders with the project folder inside it will want to push all of the files currently in the ide to the git. So you want to just open the "Project" folder.
7. Once saved and opened on Visual Studio code you will want to open a split terminal.
8. Click on View, Terminal to bring up the terminal on VS Code.
9. Once it is opened you will want to make a split terminal for this project.
![image](https://github.com/Brandon-Price/SWE-Project/assets/90214909/b174af75-8e41-4119-9779-1e3817d11ffe)

10. In the split panes you will want one terminal in the frontend directory and one in the backend directory. Type "cd frontend" on one and "cd backend" on the other.
11. In both panes run the command "npm install", this will download all of the dependencies in the package lock json file.
12. Next in both the frontend folder and the backend folder create a new file named **".env"** <br/>
![image](https://github.com/Brandon-Price/SWE-Project/assets/90214909/cbdb4626-508f-4e11-b5a1-a2cf2ec7bec1)
![image](https://github.com/Brandon-Price/SWE-Project/assets/90214909/424e429d-a2fc-4bb5-b084-2236a8dcd660)
<br/>
13. In the discord there is a "env-file" text channel in the discord with our api keys. Copy and paste into each of the designated files and save. <br/>
14. Last step is to run our program, to run the project in both the front and backend terminals type "npm start"
