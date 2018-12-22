Portals are perfect for modals
since it allows you to render a child component
anywhere in the DOM, i.e. not a direct DOM child


https://reactjs.org/docs/portals.html

From the react docs:

> A typical use case for portals is when a parent component has an 
> `overflow: hidden` or `z-index style`, but you need the child to visually “break out” of its container.
> For example, dialogs, hovercards, and tooltips. 
