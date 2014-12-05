#Grunt & HTML5 Draft

####This is a simple HTML5 Draft with Grunt JS TaskRunner configured.<br/><br/>
####Included: <br>
**Grunt Tasks**: htmlmin, less, concat, cssmin, uglify, imagemin, watch, newer; <br>
- **Google Fonts** CDN;
- **Font Awesome** (v4.2.0) CDN;
- **Normalize.css** (v3.0.1) CDN;
- **JQuery** (v1.11.1) CDN;
- **Twitter Bootstrap.css** (v3.2.0) CDN;
- **Twitter Bootstrap.js** (v3.2.0) CDN;
- Local CSS file;
- Local JS file;


## "npm install"
- This command will install all the dependencies inside the **package.json** file needed for Grunt, and Grunt Task's to run. 


## "grunt"
- This is the **Grunt default task** command wich is used to manually run the Grunt tasks. <br/>
- Executing this task will create a folder named '_dest/.._' where the .js .html and .css files will be minified and concatenated. <br/>
- There will also be created a folder named '_deletable/.._' that can be deleted. 
- The folder '_deletable/.._' will have all the .css and .js files concatenated, but after the minification of these files this folder will no longer be needed.


## "grunt watchme"
- This is the **Grunt watch task** that will watch for changes for the specified files inside the gruntfile.js, and when a file has changed it will process that file for you without any effort from your side. <br/>


