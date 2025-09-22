# personal_webpage

[Link to webpage](https://salmeida1993.github.io/personal_webpage/)

[Demo overview](https://youtu.be/soM3cvVdoXw)

An initial take on my personal webpage

<img width="2513" height="1078" alt="webpage_screenshot" src="https://github.com/user-attachments/assets/2f4a1ade-c7b6-4e9d-88b6-f1b31154b12b" />


Author: Stewart Almeida

Class: https://johnguerra.co/classes/webDevelopment_spring_2019/

## Build
1) Clone repository
   ```
   git clone https://github.com/salmeida1993/personal_webpage.git
   cd personal_webpage
   ```
2) Install any dependencies
    ```
    npm install
    ```
3) Set up local server (better development experience)
   * For Python
    ```
    python3 -m http.server
    ```
    * Python on Windows
     ```
     python -m http.server or py -3 -m http.server
     ```
    * Node.js
     ```
      npx http-server
     ```
4) Navigate to your browser
   * Go to http://localhost:8000 for a local server
  
Additionlly, you can also just click on the `.html` files as well to see each page individually (not recommended).
   

## Project Objective
The project objective consists of a few elements:
Create a functional personal webpage that consists of my own interests, skills, background, related projects, etc. in a responsive manner using HTML5, CSS3, and JS.
Add 2 additional pages - 1 of my own choosing regarding content and 1 made entirely from an AI prompt (Claude)
Include some aspect of functionality through JS that is unique - consists of more than 5 lines

The website consists of 3 pages total, developed using standard HTML5, CSS3 in conjunction with Bootstrap for additional framework tools, and JS ES6 modules. A navigation bar at the top links to other sections of the main page and to the additional pages as needed. Links to additional sites, such as a personal GitHub, LinkedIn, and uploaded Resume, are also provided.

Main unique feature included through JS is a button that will automatically return the user to the very top of the page, visible only after the user has scrolled down some distance value.

## AI Test Page
AI page was generated using the following prompts via Claude:

> *Picture yourself as a novice web developer tasked with creating a webpage. The main webpage, including the CSS and JS files, are already created and can be used as a reference/baseline to work off of. The main webpage consists of an about me section, some skills and interests, a projects section, and a contact me section. Create a separate HTML page I can append to this existing project that conveys my skills in a robust manner. Skills include: Leadership, teamwork, personnel management, project management, time management, Python, C programming language, HTML5, CSS3, and JavaScript. Create a visually appealing page. Use the attached HTML, CSS , and JS files as a template and baseline for your design. Use Bootstrap as you see fit for additional CSS implementation. Provide me a completed HTML file and note any additions that must be made to the CSS and JS file.*

Second prompt to note a minor spelling adjustment:

>*Please keep the title of this HTML as "ai.html" and update the code as needed*

Final prompt to attempt to address an undue change to the dropdown menu:

>*The tab under "Extra" will remain as "Ai", not "Skills".*
