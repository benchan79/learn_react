import React, { Component } from 'react'
import { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

// A component class written in the usual way:
export class MyComponentClass1 extends React.Component {
  render() {
    return <h1>Class Component: Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass2 = () => {
  return <h1>Function Component: Hello world</h1>;
}

export const Friend =() => {
  return (
    <div>
      <h2>Friend</h2>
      <img 
        alt="" 
        src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg"
        width={250} 
      />
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////////////
export function YesNoQuestion (props) {
  return (
    <div>
      <h2> YesNoQuestion</h2>
      <p>{props.prompt}</p>
      <input value="Yes" />
      <input value="No" />
    </div>
  );
}
 
export function NewFriend (props) {
  return (
    <div>
      <h2>NewFriend</h2>
      <img alt="" src={props.src} width={250} />
    </div>
  )
}
//////////////////////////////////////////////////////////////////////////////////
//2. Update Function Component State


//   const handleOn = () => {
//     setToggle("On")
//   }
//    const handleOff = () => {
//     setToggle("Off")
//   }
  

export function Toggle() {
  const [toggle, setToggle] = useState();
 
  return (
    <div>
      <h2>Toggle</h2>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}

export function ColorPicker() {
  const [color, setColor] = useState();

  const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>
        Aquamarine
      </button>
      <button onClick={() => setColor("BlueViolet")}>
        BlueViolet
      </button>
      <button onClick={() => setColor("Chartreuse")}>
        Chartreuse
      </button>
      <button onClick={() => setColor("CornflowerBlue")}>
        CornflowerBlue
      </button>
    </div>
  );
}
//////////////////////////////////////////////////////////////////////////////////
// 3. Initialize State

export function ToggleLoading() {
  const [isLoading, setIsLoading] = useState(); // first render will log undefined
  // console.log(isLoading)
  return (
    <div>
      <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
      <button onClick={() => setIsLoading(true)}>
        Turn Loading On
      </button>
      <button onClick={() => setIsLoading(false)}>
        Turn Loading Off
      </button>
    </div>
  );
}

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export function ColorPickerMore() {
  const [color, setColor] = useState("Tomato");

  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName) => (
        <button onClick={() => setColor(colorName)} key={colorName}>
          {colorName}
        </button>
      ))}
    </div>
  );
}

//////////////////////////////////////////////////////////////////////////////////
// 4. Use State Setter Outside of JSX

export function EmailTextInput() {
  const [email, setEmail] = useState('');

  // Method 1
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }

  //Method 2
  //const handleChange = (event) => 
  // setEmail(event.target.value);

  // Method 3
  // const handleChange = ({target}) => 
  // setEmail(target.value);
  console.log("Email is now: " + email)

  return (
    <div>
      <span>Email: </span>
      <input value={email} onChange={handleChange} />
    </div>
  );
}

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{0,10}$/;

export function PhoneNumber() {
  const [phone, setPhone] = useState(""); 

  const handleChange = ({ target })=> {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
        setPhone(newPhone);
    }
    // just ignore the event, when new value is invalid
  };

  console.log("Phone is now: " + phone)

  return (
    <div className='phone'>
      <label htmlFor='phone-input'>Phone: </label>
      <input value={phone} onChange={handleChange} id='phone-input' />
    </div>
  );
}
//////////////////////////////////////////////////////////////////////////////////
// 5. Set From Previous State
export function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(prevCount => prevCount + 1);
 
  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}

export function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  const goBack = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
    setReveal(false);
  };

  const goToNext = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    setReveal(false);
  };

  const showAnswer = () => setReveal(true);

  const onFirstQuestion = questionIndex === 0;

  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
        <p />
        {questions[questionIndex]["prompt"]}
        <p />
        <button onClick={showAnswer}>Answer</button>
        <p />
        {reveal && questions[questionIndex]["answer"]}
      </div>
    </nav>
  );
}
//////////////////////////////////////////////////////////////////////////////////
// 6. Arrays in State
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
 
export function PersonalPizza() {
  const [selected, setSelected] = useState([]);
 
  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };
 
  // console.log(selected);
  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}

export function GroceryCart() {
  const [cart, setCart] = useState([]); 

  const addItem = (item) => {
    setCart((prevCart) => {
      return [...prevCart, item];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prevCart) => {
      return prevCart.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

//////////////////////////////////////////////////////////////////////////////////
// 7. Objects in State
export function Login() {
  const [formState, setFormState] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev, 
      [name]: value
    }));
  };

  console.log(formState)

  return (
    <form>
      <input
        value={formState.firstName || ''}
        onChange={handleChange}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <input
        value={formState.password || ''}
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Password"
      />
    </form>
  );
}

export function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const {name, value} = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <input
        onChange={handleChange}
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        onChange={handleChange}
        value={profile.bday || ''}
        type="date"
        name="bday"
      />
      <input
        onChange={handleChange}
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
//////////////////////////////////////////////////////////////////////////////////
// 8. Separate Hooks for Separate States

// export function Subject() {
//   const [state, setState] = useState({
//     currentGrade: 'B',
//     classmates: ['Hasan', 'Sam', 'Emma'],
//     classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201},
//     exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]
//   });

//   const handleUpdate = () => {
//     setState((prev) => ({
//       ...prev,
//       exams: prev.exams.map((exam) => {
//         if( exam.unit === updatedExam.unit ){
//           return { 
//             ...exam,
//             score: updatedExam.score
//           };
//         } else {
//           return exam;
//         }
//       }),
//     }));
//   };
// };

export function SubjectRefactored() {
  // const [currentGrade, setGrade] = useState('B');
  // const [classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
  // const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
  const [exams, setExams] = useState([{unit: 1, score: 91}, {unit: 2, score: 88}]);
  const [test, setTest] = useState({})


  const handleTest = ({target}) => {    
    const {name, value} = target;
    setTest((prevTest) => ({
      ...prevTest, 
      [name]: +value
    }));
  }

  const handleUpdateScore = (event) => {
    setExams((prevExams) => {
      return (
        prevExams.map((exam) => {
          if( exam.unit === test.unit) {
            return {...exam, score: test.score}
          } else {
            return exam;
          }
        })
      )
    })
  }
  
  return (
    <div>
      <h3>Unit: {exams[0].unit}, Score: {exams[0].score}</h3>
      <h3>Unit: {exams[1].unit}, Score: {exams[1].score}</h3>
      <span>Unit:  </span>
      <input
        onChange={handleTest}
        value={test.unit || ''}
        type="number"
        name="unit"
        placeholder="Unit"
      />
      <span>Score:  </span>
      <input
        onChange={handleTest}
        value={test.score || ''}
        type="number"
        name="score"
        placeholder="Score"
      />
      <p/>
      <button onClick={handleUpdateScore}>
        update
      </button>
    </div>
  );
};


// function Musical() {
//   const [state, setState] = useState({
//    title: "Best Musical Ever",
//    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
//    locations: {
//      Chicago: {
//        dates: ["1/1", "2/2"], 
//        address: "chicago theater"}, 
//      SanFrancisco: {
//        dates: ["5/2"], 
//        address: "sf theater"
//      }
//    }
//  })
// }

// function MusicalRefactored() {
//   const [title, setTitle] = useState("Best Musical Ever")
//   const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"])
//   const [locations, setLocations] = useState({
//       Chicago: {
//         dates: ["1/1", "2/2"], 
//         address: "chicago theater"}, 
//       SanFrancisco: {
//         dates: ["5/2"], 
//         address: "sf theater"
//       }
//   })
// }; 
//////////////////////////////////////////////////////////////////////////////////
// 9. Lesson Review

export class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: {},
      allTasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange({ target }){
    const { name, value } = target;
    this.setState((prevState) => ({
      ...prevState,
      newTask: {
        ...prevState.newTask,
        [name]: value,
        id: Date.now()
      }
    }));
  }

  handleSubmit(event){
    event.preventDefault();
    if (!this.state.newTask.title) return;
    this.setState((prevState) => ({
      allTasks: [prevState.newTask, ...prevState.allTasks],
      newTask: {}
    }));
  }

  handleDelete(taskIdToRemove){
    this.setState((prevState) => ({
      ...prevState,
      allTasks: prevState.allTasks.filter((task) => task.id !== taskIdToRemove)
    }));
  }

  render() {
    return (
      <main>
        <h1>Class Component</h1>
        <h2>Tasks</h2>
        <NewTask
          newTask={this.state.newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TasksList
          allTasks={this.state.allTasks}
          handleDelete={this.handleDelete}
        />
      </main>
    );
  }
}
//////////////////////////////////////////////////////////////////////////////////
export function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };
  
  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  return (
    <main>
      <h1>Function Component</h1>
      <h2>Tasks</h2>
      <NewTask 
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
//////////////////////////////////////////////////////////////////////////////////

