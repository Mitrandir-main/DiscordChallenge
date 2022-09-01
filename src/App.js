import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import { useState } from 'react';


function App(props) {

  const [show, setShow] = useState(false)

  const [age, setAge] = useState(15)


  return (
    <div style={{ margin: "20px" }}>
      <Button
        onClick={() =>
          setShow(!show)
        }
        variant='contained'
      >
        {show == true ? "Hide" : "Show"}
      </Button>
      {show == true ?
        (<div>
          <h1>Hello World</h1>
          <h1>My name is {props.name}</h1>
          <div style={{ display: "flex" }}>
            <Button
              style={{ marginRight: "10px" }}
              variant='contained'
              onClick={() =>
                setAge(age + 1)
              }
            >
              +
            </Button>
            <Button
              style={{ marginRight: "10px" }}
              variant='contained'
              onClick={() =>
                setAge(age - 1)
              }
            >
              -
            </Button>
            <Button
              style={{ marginRight: "10px" }}
              variant='contained'
              onClick={() =>
                setAge(15)
              }
            >
              Set Teen
            </Button>

          </div>

          <h1>Age: {age}</h1>
        </div>
        )
        :
        <div></div>
      }
    </div>
  );
}

export default App;
