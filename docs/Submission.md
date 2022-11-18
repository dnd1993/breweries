# Submission Notes
The Breweries app allows users to view the detailed information of all the breweries listed  by [Open Brewery DB](https://www.openbrewerydb.org/).
## Approach to the problem
[Open Brewery DB API](https://api.openbrewerydb.org/breweries) returns 20 breweries per page by default, and using simple and intuitive ‘Back’ and ‘Next’ buttons to jump between pages allows the user to traverse the entire list. After further reviewing the abilities of the given API, the decision to add the search field and the list of all types of breweries was made to construct a filtering functionality for the app. Finally, the view of a single brewery was designed after choosing several details coming from the API.
## Technical decisions
- The React Router is used to create an SPA for more efficient performance and a better user experience.
- Functional Components with various Hooks are used over Class Components as they are concise and result in more straightforward code.
- The useGlobalContext custom hook, which is based on the useContext hook, was created to facilitate easy access to global states, to avoid prop drilling and to make the code cleaner.
- The data on a single brewery view comes from a separate API call (rather than passing data from the home page) to provide the user with a unique and functional shareable link.
- Components follow the single responsibility principle.
## Possible changes
- With the help of backend returning the total number of pages with breweries (after applying a search or filter), the Next button would be deactivated if there is only one page.
- Set a timer (e.g. 3 seconds) on the search field input fetch for better performance and to send less requests to the server.
- Implement a responsive design and style the app more.
- Add more filters
- Add a Loading Component that would be shown when the API call is made and while the response has not yet been received.
- Hide the details on a single brewery view that don't have any value coming from the API (null).
- Move the exception handler method from the Single Brewery page to a separate component to make it reusable.
- Rewrite CSS styles using the BEM methodology.
## Learning resources
1. https://reactjs.org/docs
2. https://www.youtube.com/freecodecamp
3. https://developer.mozilla.org/en-US/
## Incomplete steps
The second filter (e.g. by state) can be easily added to the buildURL method following the logic used for the search by name and filtering by type.

