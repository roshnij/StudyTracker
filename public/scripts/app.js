'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudyTracker = function (_React$Component) {
    _inherits(StudyTracker, _React$Component);

    function StudyTracker(props) {
        _classCallCheck(this, StudyTracker);

        var _this = _possibleConstructorReturn(this, (StudyTracker.__proto__ || Object.getPrototypeOf(StudyTracker)).call(this, props));

        _this.state = {
            topics: props.topics
        };
        _this.handleDeleteTopics = _this.handleDeleteTopics.bind(_this);
        _this.handleRandomSelect = _this.handleRandomSelect.bind(_this);
        _this.handleAddTopics = _this.handleAddTopics.bind(_this);
        return _this;
    }

    _createClass(StudyTracker, [{
        key: 'handleDeleteTopics',
        value: function handleDeleteTopics() {
            this.setState(function () {
                return {
                    topics: []
                };
            });
        }
    }, {
        key: 'handleRandomSelect',
        value: function handleRandomSelect() {
            var randNum = Math.floor(Math.random() * this.state.topics.length);
            alert(this.state.topics[randNum]);
        }
    }, {
        key: 'handleAddTopics',
        value: function handleAddTopics(topic) {
            if (!topic) {
                return 'Enter valid topic to study';
            } else if (this.state.topics.indexOf(topic) > -1) {
                return 'This topic already exists';
            }

            this.setState(function (prevState) {

                return {
                    topics: prevState.topics.concat([topic]) // we use concat to get new array instead of updating the prevState array
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Study Tracker";
            var subtitle = "Track your exam prep";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Topics, {
                    topics: this.state.topics,
                    handleDeleteTopics: this.handleDeleteTopics
                }),
                React.createElement(Action, {
                    hasTopics: this.state.topics.length > 0,
                    handleRandomSelect: this.handleRandomSelect
                }),
                React.createElement(AddTopics, {
                    handleAddTopics: this.handleAddTopics
                })
            );
        }
    }]);

    return StudyTracker;
}(React.Component);

StudyTracker.defaultProps = {
    topics: []
};
var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            props.title,
            ' '
        ),
        React.createElement(
            'h2',
            null,
            ' ',
            props.subtitle
        )
    );
};

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

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasTopics, onClick: props.handleRandomSelect },
            ' What Should I do? '
        )
    );
};

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
var Topics = function Topics(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteTopics },
            'Remove All'
        ),
        props.topics.map(function (t) {
            return React.createElement(Option, { key: t, option: t });
        })
    );
};
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

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            null,
            ' Remove '
        )
    );
};

//AddOption component -- v.v imp

var AddTopics = function (_React$Component2) {
    _inherits(AddTopics, _React$Component2);

    function AddTopics(props) {
        _classCallCheck(this, AddTopics);

        var _this2 = _possibleConstructorReturn(this, (AddTopics.__proto__ || Object.getPrototypeOf(AddTopics)).call(this, props));

        _this2.handleOnSubmit = _this2.handleOnSubmit.bind(_this2);
        _this2.state = {
            err: undefined
        };
        return _this2;
    }

    _createClass(AddTopics, [{
        key: 'handleOnSubmit',
        value: function handleOnSubmit(e) {
            e.preventDefault();
            var top = e.target.elements.topic.value.trim();
            var error = this.props.handleAddTopics(top);

            this.setState(function () {
                return { err: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.err && React.createElement(
                    'p',
                    null,
                    this.state.err
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleOnSubmit },
                    React.createElement('input', { type: 'text', name: 'topic' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Topics '
                    )
                )
            );
        }
    }]);

    return AddTopics;
}(React.Component);

var User = function User(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            ' Name: ',
            props.name,
            ' '
        ),
        React.createElement(
            'p',
            null,
            ' Age: '
        ),
        React.createElement(
            'p',
            null,
            ' PH: '
        )
    );
};

//why we put classname with uppercase letter because we want to differentiate the html tags and also render would work with lowercase. However, there would be no error if we use lowercase


ReactDOM.render(React.createElement(StudyTracker, null), document.getElementById('app'));
