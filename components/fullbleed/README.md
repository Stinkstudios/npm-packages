The `Fullbleed` component mimics the CSS functionality of the property/value pair `background-size: cover`. Instead of being limited to the use of a background image it is possible to pass an `HTMLElement` (either an `img` or a `video`) to the component, and that element will be resized accordingly.
The advantage is the ability to use semantically appropriate elements when required, or easily implement a fullscreen background video.

By default, the component binds a `resize` event listener to itself (the main element wrapping the asset) which calls a function that recalculates the component's ratio and toggles the class which handles the `fullbleed` behavior of the asset. If values are passed to `width` and `height` (they must be used together) the component will not bind the listener and two values passed will be used to calculate the container's ratio.

Example:

```
<div style={{ width: '100%', height: 500 }}>
	<Fullbleed assetRatio={'1:1'}>
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/1010px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg" alt="A photograph of the painting titled 'Composition II in Red, Blue, and Yellow' by the Dutch 'De Stijl' painter Piet Mondriaan" title="Piet Mondriaan, 1930 - Mondrian Composition II in Red, Blue, and Yellow" />
	</Fullbleed>
</div>
```
