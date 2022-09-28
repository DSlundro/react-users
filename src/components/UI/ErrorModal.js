import ReactDOM from "react-dom"


const ErrorModal = props => {

    const Backdrop = () => {
        return (
            <div onClick={props.onConfirm} className='backdrop'></div>
        )
    }
    
    const ModalOverlay = (props) => {
        return (
            <div className='modal flex-col mx-auto bg-white rounded-xl max-w-xl font-bold'>
                <header className='header'>
                    <h2>{props.title}</h2>
                </header>
                <div className='content'>
                    <p>{props.message}</p>
                </div>
                <footer className='actions'>
                    <button
                    onClick={props.onConfirm}
                    className='bg-purple-800 hover:bg-purple-600 text-white px-6 py-1 rounded-md'
                    >Okay</button>
                </footer>
            </div>
        )
    }
    
    return (
            <>
                {
                    ReactDOM.createPortal(
                        <Backdrop onConfirm={props.onConfirm}/>, 
                        document.getElementById('backdrop-root'))
                }
                {
                    ReactDOM.createPortal(
                        <ModalOverlay 
                            title={props.title} 
                            message={props.message} 
                            onConfirm={props.onConfirm}
                        />,
                        document.getElementById('modal-root')
                    )
                }
            </>
        )
}
export default ErrorModal;