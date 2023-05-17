import { Dialog, DialogTitle, DialogContentText} from '@mui/material';
import ReactDOM from 'react-dom'
const Loader = () => {
    return ReactDOM.createPortal(
        <div>
            <Dialog open={true}>
                <DialogTitle>
                    <DialogContentText>
                <img src="/images/loading.gif" alt="loading" width="200px" />
                    </DialogContentText>
                </DialogTitle>
            </Dialog>

        </div>,
        document.getElementById('loader')
    )
}
export default Loader;