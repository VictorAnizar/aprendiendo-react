const Header = (props) => (
    <header style={
        {

            borderBottomWidth: "5px",
            borderBottomStyle: "solid",
            borderBottomColor: props.border
        }}>
        <ul style={
            {
                listStyle: "none",
                gap: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
            <li>This</li>
            <li>Is</li>
            <li>The</li>
            <li>Menu!</li>
        </ul>
    </header>
)

export default Header;