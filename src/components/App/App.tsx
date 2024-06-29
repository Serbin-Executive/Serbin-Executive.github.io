import { RouterProvider } from 'react-router-dom';
import Router from '../../router';
import './style.css';

function App() {
  return (
    <div className="application">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
