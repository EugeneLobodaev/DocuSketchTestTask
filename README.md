# Project Documentation: "IconRandomizer"

## Description

The "IconRandomizer" project is a React component that displays a random icon from the FontAwesome icon set and allows the user to generate new random icons by clicking a button.

## Libraries and Dependencies Used

- [React](https://reactjs.org/) - a library for building user interfaces.
- [FontAwesome](https://fontawesome.com/) - an icon library.
- [react-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) - enables the use of FontAwesome icons in React applications.

## Component Imports and Settings

- `Buttons`: button component used to display the "Show random icon" button.
- `importedIcons`: import of all FontAwesome icons as an object.
- `useState`: React hook used for managing component state.

## Component Structure

1. `IconRandomizer`: the main component that displays a random icon and a button to generate a new random icon.
2. `getRandomIndex`: function to get a random index from the array of FontAwesome icon keys.
3. `getRandomIcon`: function called when the button is clicked, which generates a new random icon.

## Component States

- `randomIndex`: the current index of the random icon.
- `loading`: a flag indicating the loading state of the new icon.

## Visualization

- The random icon is displayed using the `FontAwesomeIcon` component from the `react-fontawesome` library.
- The "Show random icon" button is displayed using the `Buttons` component.

## Design and Styles

- Component styles are defined in a separate file `IconRandomizer.module.css`.
- Button styles from the file `Buttons.module.css` are used.

## Usage

1. Upon component loading, a random icon is displayed.
2. Clicking the "Show random icon" button generates a new random icon with a 3-second delay, indicating the loading state.

## Example Usage

```jsx
import { IconRandomizer } from "./components/IconRandomizer";

function App() {
  return (
    <div className="App">
      <IconRandomizer />
    </div>
  );
}

export default App;


## Conclusion
The "IconRandomizer" project is a simple React component that allows for displaying and generating random icons.

