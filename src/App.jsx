import './App.css';
import { Header } from './lib/home/components/Header';
import About , { Divider } from './lib/about/About';
//import { ListBox } from './lib/home/components/ListBox';


export const App = () => {
    return (
        <div className="app">
            <Header user="Usuario" />
            <Divider />
            <About title="Users"/>
        </div>
    )
};
