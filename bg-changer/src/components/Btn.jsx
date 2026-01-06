import '../App.css'

function Btn({backgroundColor, text, setColor}) {

    return (
        <button onClick={() => setColor(backgroundColor)} style={{backgroundColor: backgroundColor}}>
            { text }
        </button>
    )
}

export default Btn