# KAIOS Test
In this demo we are creating a templating framework from scratch using only Vanilla code.

There are two solutions submitted.

## Custom Vanilla Javascript Templating Engine
For making this work I took a quick lesson from https://hackernoon.com/build-your-own-react-48edb8ed350d.
After studing here I adjusted the findings for this example to work.

### Solution One (Universal DOM updates)
`index.html`
In this example the DOM is recalculated each time. You will find CSS and JS under their folders.

### Solution Two (Speficic DOM updates)
`index.2.html`
This solution assigns an id to each element which corresponds to the class name of the element.
The `reRender()` function here simply refreshes that element only and leaves the rest of the DOM intact.
The CSS and JS is all under the `index.2.html` file in this example.

Please use the inspect element in your browser to compare the two version and see that in Solution Two the only element that gets update is the one that is called to be updated.

## User information Calculation and Data Storage Test
Please find the presenation `DataStorageAndCalculation.key` send seperatelly via email.