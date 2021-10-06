const Header = (props) => (
    <header style={
        {

            borderBottomWidth: "5px",
            borderBottomStyle: "solid",
            borderBottomColor: props.border
        }}>
        The amazing header!
    </header>
)

export default Header;