const classMap = {};
    let classCounter = 0;
    var rootReactElement;
    var rootDOMElement;
    var speed = 1000;
    var REACT_CLASS = "REACT_CLASS";

    class Component {
        constructor(props) {
            this.props = props;
            if (typeof "this.onLoad()" != "undefined") 
                this.onLoad();
        }

        setState(state) {
            this.state = Object.assign({}, this.state, state); 
            reRender();
        }
    }

    function reRender() {    
        while (rootDOMElement.hasChildNodes()) {
            rootDOMElement.removeChild(rootDOMElement.lastChild);
        }
        //Skip the root. It is only rendered once.
        classCounter = 1;
        ReactDOM.render(rootReactElement, rootDOMElement);
    }

    window.React = {
        createElement,
        Component
    }

    window.ReactDOM = {
        render: (el, domEl) => {
            rootReactElement = el;
            rootDOMElement = domEl;
            const currentDOM = rootReactElement.render();
            rootDOMElement.appendChild(currentDOM);
        }
    };

    function createElement(element,props,...children) {
        return anElement(element,props,children);
    }

    function anElement(element,props,children) {
        if (isClass(element)) {
            classCounter++;
            // Load the class only once
            if (classMap[classCounter]) return classMap[classCounter];
            let component = new element(props);
            component.type = REACT_CLASS;
            classMap[classCounter] = component;
            return component;   
        } else {  
            const anElement = document.createElement(element);
            children.forEach(child => appendChild(anElement, child));
            if (props!==null) {
                Object.keys(props).forEach(function(e){
                    anElement.setAttribute(e,props[e]);
                })
            }
            return anElement;
        }
    }

    function appendChild(element, child) {
        if (child.type === REACT_CLASS) {
            appendChild(element, child.render());
        } else if (typeof(child) === 'object') {
            element.appendChild(child);
        } else {
            element.innerHTML += child;
        }
        return element;
    }