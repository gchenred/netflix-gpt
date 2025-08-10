# netflix-gpt

# SetUp

    - Created a repo and cloned into Local Workspace
    - Installed Parcel
    - Installed React and React DOM
    - Added scripts in package.json
    - Ignited the App by npm run build and npm run start

    Build
        - Install tailwind CSS
        - header component with image
        - Body component
        - Login component with Email, Password, First name and sign in button
        - Routing
        - Create a function in utilities to validate Email and Password
        - Add error message for validate email and password
        - Authentication with Firebase (setup)
            - create a project (netflixGPT)
            - add firebase to Project onclicking web console and follow steps (create a firebase.js and    add config)
            - Deployment
                - install firebase CLI - "npm install -g firebase-tools"
                - 'firebase login'
                - 'firebase init', then select hosting
                - 'firebase deploy'

    Episode-2
        - BugFix - If the user not logged in redirect to login page
                    if the user logged in, redirect to browse page.
        - Unsubscribed to the OnAuthStateChanged Callback
        - Move URLs to Constants file (in Utils).
        - Go to TMDB and Login- Edit Profile and Click on API then register the App to get API Token.
        - then go to Documentation -> API reference then use APIs. (APIs are called twice because of StrictMode)
        - create getNowPlayingMovies function in Browse Page (Extract code to Custom Hook) to fetch movie list and add in Store after creating MoviesSlice
        - Creation of Browse page
            - Main Container
                - VideoBackGround container (takes movie ID and fetch trailer from TMDB API/Vidoes API and extract it to customHook and update the store)
                    - Embed the video with autoplay and mute
                - VidoeTitle
                    - added react icons for Play and Info btns
            - Secondary Container
                - lists of movies * n
                    - cards * n
