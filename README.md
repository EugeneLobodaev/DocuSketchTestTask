# IconRandomizer Component

The "IconRandomizer" project is a React component that displays a random icon from the FontAwesome icon set and allows the user to generate new random icons by clicking a button.

## Description

The "IconRandomizer" component is designed to provide a simple way to display random icons and generate new random icons on user interaction.

## Libraries and Dependencies Used

- [React](https://reactjs.org/): a library for building user interfaces.
- [FontAwesome](https://fontawesome.com/): an icon library.
- [react-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react): enables the use of FontAwesome icons in React applications.

## Component Structure

1. `IconRandomizer`: the main component that displays a random icon and a button to generate a new random icon.
2. `getRandomIcon`: function to get a random index from the array of FontAwesome icon keys and update the view with a new random icon.
3. `useState`: React hook used for managing component state.
4. `useEffect`: React hook used for managing side effects, such as setting the loading state and updating the icon key after a delay.

## Component States

- `randomIndex`: the current index of the random icon.
- `loading`: a flag indicating the loading state of the new icon.

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
