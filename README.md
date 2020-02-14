Capstone Course project at Missouri State University. Worked in a team of 6 using Agile Scrum methodology. 


The "NLC (Normalized Local Change)" algorithm has been removed from this version of the software. The NLC was previously developed by a student at Missouri State and is patented, not allowing it to be showcased here publicly. 


This application is designed to be used as a tool to help identify unknown compounds. The common identification algorithm to determine similartiy is the Pearson Correlation. This application utilizes NLC and a similarity algorithm to better determine similarities between two or more spectra (A chemical compounds wavelength data after being scanned by an infrared scanner). 

The intent is to upload known chemical compounds, or spectra, alongside an unkown spectra. The user then selects the unkown spectra to be the query, which the system then will compare that spectra against all other uploaded spectra. A hitlist, or results, will then be displayed, ranking the known spectra's similarities to the unknown spectra chosen as the query. A graphical representation can be chosen to see how the wavelengths are matched up, or to better visualize how the system came to determine its rank. However, in this version, the graphical representation does not reflect any changes made by the NLC since it has been removed. The two graphs that the user can view: First graph represents two spectra in their original form, where the second graph would normally be the form after applying NLC, however, the second graph in this version also displays the two spectra in their original form. 


* Framework: React
* Modules: JavaScript
* Graphing Library: plotly.js
* Navigation: React-Router
* Bootstrap: Navigation | Buttons
