
import './App.css';
import Graphs from './components/Graphs';
import PieChartul from './components/PieChart';
import Sidepanel from './components/Sidepanel.jsx';
import StickyHeadTable from './components/AccountSummary';

function App() {
  return (
    <div className="App">
      <div className="left">
        <Sidepanel />
      </div>
      <div className="right">
        <Graphs />
        <StickyHeadTable />
      </div>



    </div>
  );
}

export default App;
