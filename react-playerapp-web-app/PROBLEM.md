## This Project Objective

This is a simple web application, where, you can add the details of a CricketPlayer and display the details of all the added Players in a Table Format. Complete this PlayerApp application by adding the missing code wherever required and submit it within the alloted time.

## Things i have do 

1. In this app composed of 4 Components.

			- Components (App Component,AddPlayer Component,ShowPlayer and HeaderComponent)
	
2. AppComponent is the RootComponent and should contain HeaderComponent and Router Component for Routing AddPlayer and ShowPlayer components.

3. Header Component should be a functional component and contain the 'Navbar' and should display the App Title, which is, "PlayerApp" with Links to Route AddPlayer and ShowPlayer components.

4. AddPlayer Component should be a class component and Display a Form, for getting the details of the Player to be added from the user, and ShowPlayer component shows the details of the Player that are already added in tabular format.

5. The form should contain the below input fileds:

			- Input of type text for getting the Player Name.

			- Input of type text for getting the Player Country.

			- Input of type text for getting the Total Matches Played.

-  Apply the appropriate validator to each of the Input fields, so that, the form should be valid only when all the field is containing the value.

6. ShowPlayer component should display the details as follows.    

		-  Should display id, name, country and totalmatchesplayed  for each Player.
		- Each row should be dynamically created using approriate structural directive depending upon the number of Players, the component, received from the server.  
		- Use String Interpolation to bind the values of Player object to table data cell content.

7. The below functions of AddPlayer Component:  			
			- submitHandler() - Called when the form is submitted. Adds the Player to the state by calling setState() method.
			- use appropriate properties in the  State object to store the player details. 

8. I have use Json-server api to store Player details in a Player.json file using "axios" library.

9. I have use "Context" to share player data between components
