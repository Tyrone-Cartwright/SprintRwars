# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web. 'React is a UI Library used to build large web app. If a page has data that changes over time at a high rate, like commenting on a post then the DOM has to update very fast and reflect those changes in other parts of the UI if they use the same data. react solves this problem without having the page reload by way of virtual DOM. When the page is rendered using REACt the state of the DOM structure is stored and when there are any updates to be made to the UI, REACT looks at the old DOM and changes only what differs which improves perfomance.'

1. What does it mean to think in react? 'To think in components and component hierarchies, recognizing that when you look at a website you can think of the navigation as a component as well as the search field, main content, links, footers and so on.'

1. Describe state. 'State is an object that stores information for the component. It cannot be accessed and modified outside the component and can only be used inside the compnent.'

1. Describe props. 'Props stores information that is passed to other components. Props make REACT components reusable so you can use the same component with different data every time.'

1. What are side effects, and how do you sync effects in a React component to state or prop changes? 'A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM. We can syncour side effects by passing in a dependency array as the second argument to the effect hook.'
