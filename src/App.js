import FamilyChart from './components/family-chart';
import VietnameseZodiacTable from './components/vietnamese-zodiac-table';
import NavBar from './components/nav-bar';

function App() {
  return (
    <div className="App" data-testid="app">
      <NavBar/>
      <FamilyChart/>
      <VietnameseZodiacTable/>
    </div>
  );
}

export default App;
