adapt-contrib-clickAndLearn
======================

Click And Learn Component/Plug-in developed by CrediPoint Solutions for Adapt Framework v1.0.0.

A basic click and learn Component/Plug-in that generates cards with an image on the front face and text on the back face.

Installation
------------

First, be sure to install the [Adapt Command Line Interface](https://github.com/cajones/adapt-cli), then from the command line run:

		adapt install adapt-contrib-clickAndLearn

Usage
------

For example JSON format, see [example.json](https://github.com/CrediPointSolutions/adapt-contrib-clickAndLearn/blob/master/example.json).

Two variations are in-built in this template. Horizontal and Vertical. I have provided examples for both below.

Horizontal Example: All Click And Learn tabs items display horizontally.

	{
	    "_id": "c-10",
	    "_parentId": "b-10",
	    "_type": "component",
	    "_component": "clickAndLearn",
	    "_classes": "",
	    "_layout": "full",
	    "title": "Click And Learn",
	    "body": "This is optional body text. Click the image below to reveal the text.",
	    "items": [
	        {
	            "title": "What is a component?",
	            "content": "In Adapt we have a concept of components. These components are the main interactive elements found on a page. (Multiple Choice Question, Media, Text and Narrative are all types of components). These components can be split into two categories.",
	            "imageSrc": "course/en/images/click_1.png"
	        },
	        {
	            "title": "Presentational components",
	            "content": "A presentational component should be used to display content with little interactivity. A few components that full under this category are: Graphic, Media, Hot Graphic and Narrative.",
	            "imageSrc": "course/en/images/click_2.png"
	        }
	    ],
	    "_flag": "horizontal"
	}

Vertical Example: All Click And Learn tabs items display vertically.

	{
	    "_id": "c-20",
	    "_parentId": "b-20",
	    "_type": "component",
	    "_component": "clickAndLearn",
	    "_classes": "",
	    "_layout": "full",
	    "title": "Click And Learn",
	    "body": "This is optional body text. Click the image below to reveal the text.",
	    "items": [
	        {
	            "title": "What is a component?",
	            "content": "In Adapt we have a concept of components. These components are the main interactive elements found on a page. (Multiple Choice Question, Media, Text and Narrative are all types of components). These components can be split into two categories.",
	            "imageSrc": "course/en/images/click_1.png"
	        },
	        {
	            "title": "Presentational components",
	            "content": "A presentational component should be used to display content with little interactivity. A few components that full under this category are: Graphic, Media, Hot Graphic and Narrative.",
	            "imageSrc": "course/en/images/click_2.png"
	        }
	    ],
	    "_flag": "vertical"
	}

Important
---------

Please feel free to add issues and updates needed in the component.
