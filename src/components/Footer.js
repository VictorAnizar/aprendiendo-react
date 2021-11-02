const Footer = (props) => (
    <footer style={{width:"100%"}}>
      This site was made by Victor!
      <span style={
        {
          backgroundColor: "white",
          color: "crimson",
          borderRadius: "5px",
          margin: "3px"
        }
      }>{props.year}</span>
    </footer>
  )
  

export default Footer;