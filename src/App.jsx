import { Header } from './lib/home/components/Header';
import './App.css';
import { ListBox } from './lib/home/components/ListBox';
// Componentes presentacionales , Componentes lógicos

export const App = () => {
    return (
        <div className="app">
            <Header user="Usuario" />
            <hr />
            <ListBox/>
        </div>
    )
};
