# Project Template Version 2

![Screenshot](/public/Screenshot.png)


The herein website application provides a front-end template, usable by a WEB SERVICES providing company.
The layout design is kind of an imitation from a sample website, which was constructed on another platform, different from REACT.



DISCLAIMER:
Images showing people faces, used in this application template, are just placeholders.
Whoever may use this template for commercial purposes shall include authorized images.

DUMMY LOGO: A randomly selected logo is included in the navigation bar, and also in the html link rel="icon". This should be replaced by the user's own.

---

TECHNOLOGIES USED FOR THIS APPLICATION CONSTRUCTION  
REACT JS version 18.2.0, created with Vite version 5.0.8. These and the application dependencies were the latest versions available at the time of this development.

---

REACT DEPENDENCIES INSTALLED
- React-router-dom version 6.21.3
    This enables to define routes to access the application pages
- React-icons version 5.0.1
    This provides the icons used in the pages layout
- React-intersection-observer version 9.8.0
    For triggering the components' animations on scroll. Otherwise, the animations run only on page load.
    The option "triggerOnce: true" is set in most components with animations.

---

THIS APPLICATION CODE STRUCTURE

- The front end is organized in two major folders: "pages and components".
- The pages elements are all those accesible through the navigation bar. These contain practically no JSX code, just call a list of components.
- The components contain all the JSX, all the styling, and functioinality.
- Each component is contained in its own subfolder. There are two or more files in each component subfolder.

---

STYLING


- Plain CSS is used, in module blocks.
- Every component has attached its on module.css
- Some general styling is set in the index.css
- Only excepction is the Navigation component, whose stylesheet is conventional type. This is because of some functionality issues.
- RESPONSIVE DESIGN is tested for 360px smallest screen size.

---

COMPONENTS WITH SOME FUNCTIONALITY
- Stopwatch, which is called seveal times by other components. The stopwatch stops at the provided maximum value. The speed is adjusted depending on the maximum value, so the running period to be about 3 to 5 seconds.
- ProgressBar. It's an animated progress bar. It is called several times by other component.


NOTE: The Stopwatch and the ProgressBar requires some input parameters. These parameters are stored in a Single Source of Truth, in a Data.js file. At the moment, these values are to be updated by hand, by a webmaster. In a future application these might be provided automatically from somewhere else.

---

APPLICATION OF REACT DYNAMIC FEATURES


The "map" method is used for generating the grid elements dynamically, in the components: latest-blogs, some-of-our-works, and the-faces.


The data source was organized in a hard-coded Data.js type file. In a real application, the data uses to come from a backend.

---

SOME PENDING DEVELOPMENT
As long as we decided a pause in this development current version, a few components are, by now, pending to imitate from the sample website. In example: populating the Testimonial page, and adding a Pricing page. 

---

ACKNOWLEDGEMENTS

This small project is becoming an addition to my web development portfolio, so thanks to my contact friend who requested this job.


