class Hour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    onLoad() {
        let that = this;
        setInterval(function(){
            if (that.state.value == 23) {
                that.setState({value: 0})
            } else {
                that.setState({value: that.state.value + 1})  
            }
        }, speed * 60 * 60)
    }
    render () {
        return React.createElement("span",{id:'hour', class:'hour'},`${this.state.value.pad(2)}:`);
    }
}

class Minute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
     
    }
    onLoad() {
        let that = this;
        setInterval(function(){
            if (that.state.value == 59) {
                that.setState({value: 0})
            } else {
                that.setState({value: that.state.value + 1})  
            }
        }, speed * 60)
    }
    render () {
        return React.createElement("span",{id:'minute', class:'minute'},`${this.state.value.pad(2)}:`);
    }
}

class Second extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    onLoad() {
        let that = this;
        setInterval(function(){
            if (that.state.value == 59) {
                that.setState({value: 0})
            } else {
                that.setState({value: that.state.value + 1})  
            }
        }, speed)
    }
    render () {
        return React.createElement("span",{id:'second', class:'second'},`${this.state.value.pad(2)}`);
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    onLoad() {

    }

    render () {
        return React.createElement("div",null,
            React.createElement(Hour, null, null),
            React.createElement(Minute, null, null),
            React.createElement(Second, null, null)
        );
    }
}

ReactDOM.render(React.createElement(App,null,null),document.getElementById('root'));