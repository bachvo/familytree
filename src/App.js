import FamilyChart from './components/family-chart';
import VietnameseZodiacTable from './components/vietnamese-zodiac-table';

function App() {
  return (
    <div className="App" data-testid="app">
      <FamilyChart/>
      <VietnameseZodiacTable/>
    </div>
  );
}

export default App;
