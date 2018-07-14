const user = {
    name: 'Roshni',
    age: 29,
    place: 'Canada'
};
//3 techniques of conditional operators . and operator is very imp to see 
const template2 = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p> Age: {user.age} </p>} 
        {getLocation(user.place)}
    </div>
);

ReactDOM.render(template2, appRoot);