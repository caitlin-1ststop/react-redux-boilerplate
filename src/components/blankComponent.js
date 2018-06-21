// Components can be stateless or stateful

// You can create a mapStateToProps function, which takes the current state as an argument and returns an object with the prop name as key and the relevant part of the state as the value

// You can create a mapDispatchToProps function, which takes dispatch as an argument and returns an object where the prop name is the key, and the value is a function which calls dispatch with the relevant action (imported at top)

// Then component is created as usual

// Then an additional component is created with connect
// Connect takes mapStateToProps as first argument (if this function is required) and mapDispatchToProps as the second (if this function is required), these are then both passed to the component defined above, i.e.:
// const componentConnectedToStore = connect([mapStateToProps], [mapDispatchToProps])(ignorantComponent)