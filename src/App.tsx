import { BlueprintCard } from './components/BlueprintCard';
import { NormalBlueprintCard } from './components/BlueprintCard/normal';}
import DogNFT from './assets/images/Imagedog.svg';
import Robot from './assets/images/robot.svg';

function App() {
  return (
    <div className="flex gap-2 items-center">
      <BlueprintCard
        imageLink={DogNFT}
        name={'Color Dog'}
        blueprintid={5}
        tsupply={100000000}
        mintprice={0.000153}
        mintlimit={100}
      />

      <NormalBlueprintCard
        imageLink={Robot}
        name={'Color '}
        blueprintid={5}
        tsupply={100000000}
        address={'0x55d398326f99059ff775485246999027b3197955'}
      />
    </div>
  );
}

export default App;
