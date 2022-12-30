import { forwardRef, useRef } from 'react';
import './App.css';

export default function App() {
  // 1: Part of number 1 uncomment to see the basic use
  // const [seconds, setSeconds] = useState(0);
  // const timerId = useRef(null);

  // 1: An example of how to use refs 
  // const startTimer = () => {
  //   // We need to ensure that our timerId is in scope
  //   timerId.current = setInterval(() => {
  //     // We use this function syntax to ensure we have no stale value
  //     setSeconds(currSeconds => currSeconds + 1);
  //   }, 1000);
  // };

  // const stopTimer = () => {
  //   // To accomplish this we use clearInterval
  //   clearInterval(timerId.current);
  // };


  // 1: Uncomment to use for use case 1
  // return (
  //   <div className="App">
  //     <button onClick={startTimer}>Start the timer</button>
  //     <button onClick={stopTimer}>Stop the timer</button>
  //     <p>seconds: {seconds} </p>
  //   </div>
  // );

  // 2: Common use case of using refs
  // React sets the current input ref equal to the DOM node in relation to the jsx element
  // This input ref will still be null 
  // 3.1: We can comment this out to focus on a callback ref
  const inputRef = useRef(null);
  console.log(inputRef);

  // This is known as an uncontrolled component as it does not need state
  const focusInput = () => {
    inputRef.current.focus();
    console.log('Clicking on the button will set focus to the input box once clicked');
  };

  // 2: Use case two example of the most common used example of refs
  // return (
  //   <div className="App">
  //     <input ref={inputRef} />
  //     <button onClick={focusInput}>Focus sets to the input once clicked</button>
  //   </div>
  // );

  // 3: Creating a custom component to use our ref in a different manner than it's default
  // Doing this in such manner will result in a warning as this is not allowed in React
  // Clicking on the button can't be accomplished so we must use forwardRef

  // 3:1 example
  return (
    <div className="App">
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>Focus sets to the input once clicked</button>
    </div>
  );


  // 3.2: Create the function for handleRef
  // The console log with go ahead and display the input style
  // This will call the domNode on mount
  // function handleRef(domNode) {
  //   console.log(domNode);
  // }

  // 3.2: Callback ref we can use is handleRef
  // return (
  //   <div className="App">
  //     <MyInput ref={handleRef} />
  //     {/* <button onClick={focusInput}>Focus sets to the input once clicked</button> */}
  //   </div>
  // );
}

// We need to tell the DOM which element node will be using the ref that is passed a parameter
const MyInput = forwardRef(function (props, ref) {
  return<input ref={ref} {...props} style={{color: 'purple'}} />
});
