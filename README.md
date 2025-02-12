# benevolent-contribution-kaz-software

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/AunikIslam/benevolent-contribution-kaz-software)

Project Description: 

There are 4 components in project representing the task. They are team, member, contribution reason, and benevolent contribution. The project contains a navbar to navigate in different views. Description are given below:

Team:
1. Team related task can be found in the Teams menu in the navbar. Upon click the menu, it will take to the Team List view. Teams are displayed in a table. In that view, from the 'Add Team' button, a new team can be created.
2. In team create view, team name is mandatory. Upon team creation, newly created team can be seen in the list. Team is mandatory for creating new members. So, a team should be created before we go any further.

Members:
1. 1. Member related task can be found in the Members menu in the navbar. Upon click the menu, it will take to the Member List view. The member list represents users in different teams. Members are displayed in a table. In that view, from the 'Add Member' button, a new member can be created.  
2. In member add view, both member name and team is mandatory. So, a user cannot be created without creating and selection team. Upon member creation, newly created member can be seen in the list.

Contribution Reasons:
1. Contribution reasons represent the penalty the members are going to pay for rule violation. Contribution reason list and manage follows the same creation process as the previous ones. Contribution reason is tagged with two properties, name and the penalty that the member is going to pay for rule violation. It can be found in the Contribution Reason menu in the navigation bar.

Benovolent Contributions: 
Benovolent contributions has two sections, one is the contribution list and another is the monthly contribution receipt.
1. From the benovolent contribution list, contribution can be created. Here, all the fields are required. After creation, name, date, contribution reason, and amount can be seen on the list. On the footer of the list, total contribution amount can be seen.
2.In the month wise receipt section, a user has to select month and year to see the contribution info. It will show the total contribution and top five contributors of that specific month. If contributions are availabe, a pdf download button will come into view to download the receipt in pdf format.



Service Class:
The base service class performs all sorts of list and update related operation. For the implementation of the simplicity, all the values are stored and retrieved from the local storage of the browser.

Global SCSS:
There is a global SCSS file to support reuseable design code throughout the project.

Shared Module:
Shared module imports the frequently used modules to remove the headache of importing same modules multiple times.

Utilities:
The utility file is used to provide utilities all over the project.

How to run the project:
The project is run on https://stackblitz.com/~/github.com/AunikIslam/benevolent-contribution-kaz-software . It can be found running from here. 