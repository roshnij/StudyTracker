class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Visibility Toggle",
            buttonTitle: "Show details",
            flag: 1,
            ptext: "Hey. These are some details you can now see"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState) => {
            
             return ({
                    flag: !prevState.flag
                });
        }

        );

    }

    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleClick}>{this.state.flag? this.state.buttonTitle: "Hide details"}</button>
                <p hidden={this.state.flag}>{this.state.ptext}</p>
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

//  const showText = (e) =>
//  {
//     fields.flag =!fields.flag;
//     render();
   
//  };
//  const fields = {
//     title: "Visibility Toggle",
//     btext:["Show details","Hide details"],
//     ptext: "Hey. These are some details you can now see",
//     flag: true
//  };
 

//  const appRoot = document.getElementById('app');
 
//  const render = () => {
//     const template = (
//         <div>
//         <h1>{fields.title}</h1>
//         <button onClick={showText}>{fields.flag ? fields.btext[0] : fields.btext[1]} </button>
//         <p hidden={fields.flag}>{fields.ptext}</p>
//         </div>
//      );
//      ReactDOM.render(template,appRoot)
//  }
//  render();
