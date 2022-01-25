import AppCSS from './App.module.css';
import Todo from '../src/components/Todo'
function App() {

  return (
    <div className={AppCSS.section}>
  
        <Todo/>
      
    </div>
  );
}

export default App;
