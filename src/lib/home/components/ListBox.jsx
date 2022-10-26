import { List } from './List';

const list = [
    'zapatos',
    'botas',
    'medias',
    'relojes'
]

export const ListBox = () => {
    return (
        <div className="box">
            <h2>Productos existentes</h2>
            <List list={list} />
            <ul>
                <li>Item</li>
                <li>Item</li>
            </ul>
        </div>
    )
}