import './List.css'
export const List = ({list}) => {
    return (
        <ul className='list'>
            {list.map(e => (<li>{e}</li>))}
        </ul>
    )
}