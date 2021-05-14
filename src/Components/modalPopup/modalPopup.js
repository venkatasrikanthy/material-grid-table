import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class ModalPopup extends React.Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose = () => {
        this.props.onModalClose();
    };

    render() {
        const { isModalOpen, popupTitle } = this.props;
        return (
            <div>
                <Dialog open={isModalOpen} onClose={e => this.handleClose()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{popupTitle}</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="company-name"
                            label="Name"
                            defaultValue={this.props.modalContent.name}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="catch-phrase"
                            label="Catch Phrase"
                            defaultValue={this.props.modalContent.catchPhrase}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="bs"
                            label="BS"
                            defaultValue={this.props.modalContent.bs}
                            variant="outlined"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={e => this.handleClose()} color="primary">
                            Save
                        </Button>
                        <Button variant="contained" onClick={e => this.handleClose()} color="secondary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}