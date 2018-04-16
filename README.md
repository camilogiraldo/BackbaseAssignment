## Instructions: How to run

1.  `npm install`
2.  `ng serve`
3.  Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Decisions made

The code speaks for itself xD, just kiddin'.

* I created a material-ui module, to reuse ui elements through all the application.

* Created a dashboard folder containing the main/home/dashboard component, that shows the current weather for the cities previously needed. It also contains the detail component

* The detail component, shows the forecasts in the next 12 hours for a selected city in the dashboard.

* One service at /app/shared/ provides all the application api interface for getting all the information needed. For larger apps is a better practice to modularize features/with their related services and load 'em as requested using lazy loading helping with bundle optimization.
  Configurations as urls, api keys are leaved here for sake of simplicity. But best practice is to put 'em on the environment configuration or deployment specific env variables.

* In the shared folder I created a pipe for capitalize words.

* Created a UI folder with components related just to de UI as Spinning elements, animations navigation and temperature toggler for easy reuse.

* app-routing module provides all the routes needed for the application.
