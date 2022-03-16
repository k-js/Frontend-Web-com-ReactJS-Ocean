import MenuTopo from './components/MenuTopo';
import Rodape from './components/Rodape';
import Corpo from './components/Corpo';

function App() {
    return (
        <>
            <MenuTopo />
            <Corpo nome={"Keu"} 
                sobrenome={"Dos Santos"}/>
            <Rodape autor='Keu' />
        </>
    )
}

export default App;