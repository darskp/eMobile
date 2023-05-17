import ReactDOM from 'react-dom'
const Loader = () => {
    return ReactDOM.createPortal(
        <div>
            <div className="loader">
                <img src="/images/loading.gif" alt="loading" />
            </div>

        </div>,
        document.getElementById('loader')
    )
}
export default Loader;