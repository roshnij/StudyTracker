class StudyTracker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            topics: props.topics
        }
        this.handleDeleteTopics = this.handleDeleteTopics.bind(this);
        this.handleRandomSelect = this.handleRandomSelect.bind(this);
        this.handleAddTopics = this.handleAddTopics.bind(this);
    }
    handleDeleteTopics(){
        this.setState(() => {
            return {
                topics: []
            };
        });
    }
    handleRandomSelect(){
        const randNum = Math.floor(Math.random()* this.state.topics.length);
        alert(this.state.topics[randNum]);
    }

    handleAddTopics(topic) {
        if(!topic){
            return 'Enter valid topic to study';
        }
        else if(this.state.topics.indexOf(topic)>-1){
            return 'This topic already exists';
        }

        this.setState((prevState) => {

             return {
                topics: prevState.topics.concat([topic]) // we use concat to get new array instead of updating the prevState array
             };
        }
        );
    }
    render(){
        const title = "Study Tracker";
        const subtitle = "Track your exam prep";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Topics 
                    topics={this.state.topics}
                    handleDeleteTopics = {this.handleDeleteTopics}
                />
                <Action  
                    hasTopics={this.state.topics.length>0}
                    handleRandomSelect = {this.handleRandomSelect}
                />
                <AddTopics 
                    handleAddTopics = {this.handleAddTopics}
                />
            </div>
        );
    }
}

StudyTracker.defaultProps = {
    topics :  []
};
const Header = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.subtitle}</h2>
        </div>
    ); 
}

Header.defaultProps = {
    title: 'Study Tracker',
    subtitle: 'some default val for subtitle'
};

// class Header extends React.Component{

//     render(){
//         return (
//             <div>
//                 <h1> {this.props.title} </h1>
//                 <h2> {this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button  disabled ={!props.hasTopics} onClick = {props.handleRandomSelect}> What Should I do? </button>
        </div>

   );
}

// class Action extends React.Component{
    
//     render(){
//         return (
//             <div>
//                 <button  disabled ={!this.props.hasTopics} onClick = {this.props.handleRandomSelect}> What Should I do? </button>
//             </div>

//        );
//     } 
// }
//options component here
const Topics = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteTopics}>Remove All</button>
            {props.topics.map((t) =>{
               return <Option key = {t} option = {t} />
            }

            )}
            
        </div>
    );
}
// class Topics extends React.Component{
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteTopics}>Remove All</button>
//                 {this.props.topics.map((t) =>{
//                    return <Option key = {t} option = {t} />
//                 }

//                 )}
                
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return(
        <div>
           {props.option}
           <button> Remove </button>
        </div>
    );
}

//AddOption component -- v.v imp
class AddTopics extends React.Component{

        constructor(props){
            super(props);
            this.handleOnSubmit = this.handleOnSubmit.bind(this);
            this.state = {
                err: undefined
            };
        }
        handleOnSubmit(e){
            e.preventDefault();
           const top = e.target.elements.topic.value.trim();
           const error = this.props.handleAddTopics(top); 
           
            this.setState(() => {
                return {err: error};
            }

            );
        }

        render(){
            return (
                <div>
                    {this.state.err && <p>{this.state.err}</p>}
                    <form onSubmit= {this.handleOnSubmit}>
                        <input type="text" name="topic"/>
                        <button >Add Topics </button>
                    </form>
                </div>
    
           );
        } 
    }

    const User = (props) => {

        return (
            <div>
            <p> Name: {props.name} </p>
            <p> Age: </p>
            <p> PH: </p>
            </div>
        )

    };

//why we put classname with uppercase letter because we want to differentiate the html tags and also render would work with lowercase. However, there would be no error if we use lowercase


ReactDOM.render(<StudyTracker /> , document.getElementById('app'));