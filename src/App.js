import Switch from '@mui/material/Switch';


function App(props) {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>My name is {props.name}</h1>
      <h1>Age: 21</h1>
      <div style={{ display: "flex" }}>
        <div>Male</div>
        <Switch
          name="loading"
          color="primary"
        />
        <div>Male</div>
      </div>
    </div>
  );
}

export default App;
