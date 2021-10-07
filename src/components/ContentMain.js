import Img1 from '../assets/img/img1.png'

const Card = ()=>{
    return <div style={{
        border: "1px solid gray",
        borderRadius: "5px",
        width: "250px",
        textAlign: "center",
        padding: "0px 10px"
    }}>
        <h3>Negative One</h3>
        <img src={Img1} alt="imagen1" width="100%"/>
        <p className="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus pulvinar tempus. Nullam vitae odio sagittis quam varius pharetra. Praesent id est vitae justo iaculis imperdiet. </p>
    </div>
}
const ContentMain = () => {
    return <main >
        <h1>Our products</h1>
        <p className="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus pulvinar tempus. Nullam vitae odio sagittis quam varius pharetra. Praesent id est vitae justo iaculis imperdiet. Nullam euismod lectus libero, quis scelerisque lorem pretium ac. Suspendisse eros mauris, viverra vitae blandit vitae, rutrum blandit tortor. Maecenas vestibulum at arcu at placerat. Vestibulum ac posuere risus, eget porttitor orci. Etiam viverra faucibus sapien, sit amet ornare justo pharetra ac. Donec nec purus tristique, suscipit metus ut, dignissim lacus. Donec cursus ultricies lorem, sed tempus dolor sagittis a.</p>
        <div style={{
            display: "flex",
            flexWrap:"wrap",
            justifyContent: "center",
            gap:"10px"
        }}>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
    </main>;
};
export default ContentMain;