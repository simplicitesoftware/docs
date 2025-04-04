# Dashboard 

## What is a Dashboard ?

Since version 6.2, Simplicité has enabled end users to create and share their own dashboards.
A dashboard is a visual interface that provides an overview of key data, metrics, and insights in a structured and interactive way.  

- Filters and Selections : Users can filter data by period, category or other criteria.

- Drill-Down (Data Exploration) : Click on an element (bar, point on a graph) to see more details.

- Dynamic updates : Data is often connected to databases in real time.

- Customisation : Simplicité allows users to change the display, rearrange widgets and create their own reports.

- Sharing : Simplicité allows users to share their dashboards.   


## How to create a Dashboard ?

To create a dashboard, follow the steps below:  
1. If you have DASHBOARD_MAKER rights and not have ADMIN rights (like designer), a dashboard icon will appear in the page header.  
It allows you to create your dashboard. Click on create.  
<img src="dashboard1.png" alt="create dashboard" width="50%"/>
2. Give a label. The dashboard editor is open.  
<img src="dashboard2.png" alt="dashboard editor" width="50%"/>  
You have differents choices :  
   - Pivot : this will give you access to all the crosstables available to you  
    <img src="dashboard3.png" alt="dashboard pivot" width="50%"/>
   - Chart : this will give you access to all the crosstables available to you with chart display.  
     Choose your chart and click on Apply.   
   <img src="dashboard4.png" alt="dashboard chart" width="50%"/>
   - Widget : this will give you access to all the widgets (specific external objects) available to you.    
     Choose one and place it.   
   <img src="dashboard5.png" alt="dashboard widget" width="50%"/>
   - Filter : allows to add a search bar (new view item) with optional time period and fields.
      - The item triggers a new event with user's filters `{ fromDate, toDate, fields..}`.  
      - The filters are applied to lists, charts, and pivot tables (having a date/period or matching filtered fields).  
        You can add filters on object attributes to this period filter bar by clicking on Add Filter.       
    <img src="dashboard8.png" alt="dashboard widget" width="50%"/>  
  - Rights to drag a list from the menu : If the object has been set to allow dashboard listing.       
    <img src="dashboard9.png" alt="dashboard widget" width="50%"/>  
   - Preview : to preview your dashboard  
   - Up arrow icon : automatically arrange your dashboard  
   - Save : to save your dashboard  
   - Close : to close your dashboard   
1. Once you have chosen the type of element (pivot, chart or widget), click on the element and drag it to the position of your choice.  
2. Save your dashboard
3. If it exists Dashboard sharing GROUPS with DASHBOARD right, you can share your dashboard with these groups who will be able to read it.     
 <img src="dashboard7.png" alt="dashboard widget" width="50%"/>   
A Share button in the Dashboard editor allows you to select the dashboard sharing groups of your choice.   
Click on Apply.  

### Special case of ADMIN rights  
Several additional options are available for this right:  
<img src="dashboard6.png" alt="dashboard widget" width="50%"/> 
- Rights to drag a list from the menu
- Empty item : ability to add a field area containing a list of options (text, login, date, predefined search, etc.)  
- List : Preset search
- Filter : allows to add a search bar (new view item) with optional time period and fields.
    - The item triggers a new event with user's filters (fromDate, toDate, fields...)  
    - The filters are applied to lists, charts, and pivot tables (having a date/period or matching filtered fields).  
    - External objects must implement a new handler when they are concerned by filters.  
    - A new front-end helper is available to apply view's filters to a business object: `obj.applyFilters(filters)`.    
For example:
```javascript 
$("#myWidget").addClass("js-view-filters").on("ui.view.filters", (e,filters) => {
	e.stopPropagation();
	// Apply the filters to widget components
	myobj.applyFilters(filters);
	// Redraw the widget
	myWidget.render();
});
```

