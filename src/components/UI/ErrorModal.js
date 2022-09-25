

const ErrorModal = props => {

    return (
        <div>
            <div 
            onClick={props.onErrorHandler}
            className='backdrop'></div>

            <div className='modal flex-col mx-auto bg-white rounded-xl max-w-xl font-bold'>
                <header className='header'>
                    <h2>{props.title}</h2>
                </header>
                <div className='content'>
                    <p>{props.message}</p>
                </div>
                <footer className='actions'>
                    <button
                    onClick={props.onErrorHandler}
                    className='bg-purple-800 hover:bg-purple-600 text-white px-6 py-1 rounded-md'
                    >Okay</button>
                </footer>
            </div>
        </div>
    )
}
export default ErrorModal;