import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className = "row justify-content-center">
        <div className = "col-md-6 cart">
          <div className="card">
            <div className="card-body">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
      
     );
  }
}
 
export default App;
