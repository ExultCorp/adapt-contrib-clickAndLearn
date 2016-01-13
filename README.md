#adapt-contrib-clickAndLearn

Click And Learn Component/Plug-in developed by Exult Corporation for Adapt Framework v2.x.x.

A basic click and learn Component/Plug-in that generates clickable cards with an images at top and text at bottom.

##Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/adaptlearning/adapt-cli), then from the command line run

		adapt install adapt-contrib-clickAndLearn

##Usage

For example JSON format, see [example.json](https://github.com/ExultCorp/adapt-contrib-clickAndLearn/blob/master/example.json).

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
	    "displayTitle": "ClickAndLearn",
	    "instruction": "",
	    "_items": [
	        {
	            "title": "What is a component?",
	            "body": "In Adapt we have a concept of components. These components are the main interactive elements found on a page. (Multiple Choice Question, Media, Text and Narrative are all types of components). These components can be split into two categories.",
	            "_graphic": {
	                "src": "course/en/images/click_1.png",
	                "alt": "info about first card."
	            }
	        },
	        {
	            "title": "Presentational components",
	            "body": "A presentational component should be used to display content with little interactivity. A few components that full under this category are: Graphic, Media, Hot Graphic and Narrative.",
	            "_graphic": {
	                "src": "course/en/images/click_2.png",
	                "alt": "info about second card."
	            }
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
	    "displayTitle": "ClickAndLearn",
	    "instruction": "",
	    "_items": [
	        {
	            "title": "What is a component?",
	            "body": "In Adapt we have a concept of components. These components are the main interactive elements found on a page. (Multiple Choice Question, Media, Text and Narrative are all types of components). These components can be split into two categories.",
	            "_graphic": {
	                "src": "course/en/images/click_1.png",
	                "alt": "info about first card."
	            }
	        },
	        {
	            "title": "Presentational components",
	            "body": "A presentational component should be used to display content with little interactivity. A few components that full under this category are: Graphic, Media, Hot Graphic and Narrative.",
	            "_graphic": {
	                "src": "course/en/images/click_2.png",
	                "alt": "info about second card."
	            }
	        }
	    ],
	    "_flag": "vertical"
	}

##Browser spec

This component has been tested to the standard Adapt browser specification.

##Important

Please feel free to add issues and updates needed in the component.
