console.log("hello");

//JSX - JavaScript XML
function getLocation(location){
    if(location){
        return <p> Location: {location}  </p>;
    }
    return undefined;
}

const header = {
    title: 'Study Tracker App',
    subtitle: 'Track your exam prep!',
    topics:["Core Java"]
}

const onFormSubmit = (e) => {
    e.preventDefault(); //removes the default function i.e., whole form refresh
    //target -> form and elements are all different tags within form
    const topic = e.target.elements.topic.value;
     if(topic){
         header.topics.push(topic); 
         e.target.elements.topic.value = ''; 
          renderForm();
     }
    
};
const appRoot = document.getElementById('app');
const onMakeDecision = () =>{
    console.log("abc");
    const randNum = Math.floor(Math.random() * header.topics.length);
    alert(header.topics[randNum]);
};
const renderForm = () => {
    const template = (
        <div>
            <h1>{header.title}</h1> 
            {header.subtitle && <p>{header.subtitle}</p>}
            <form onSubmit={onFormSubmit}>
                 <ol>
                    {
                        header.topics.map((t) =>{
                        return <li key={t}>{t}</li>
                        } )
                    } 
                </ol>
               
                <input type="text" name="topic" />
                <button>Add Topic</button>
                {<button disabled = {header.topics.length == 0} onClick={onMakeDecision}>What should I do?</button>}
                
            </form> 
        </div>
    );
    ReactDOM.render(template, appRoot); // 1st arg - kya show krna h, 2nd arg - > kaha show krna h
};
renderForm();

