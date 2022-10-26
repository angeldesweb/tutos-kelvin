export const Header = (props) => {
    const { user } = props;
    return (
        <header>
            <h1>Hola {user}</h1>
        </header>
    )
}