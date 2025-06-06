import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ErrorIcon from '@mui/icons-material/Error';
import './all_main.css';

export default function ConstructionError() {
    return (
        <>
        {/* Error  */}
            <Alert severity="error" variant="filled">
                <AlertTitle>Important Information</AlertTitle>
                This website is still under construction. Some features or even the entire website may have issues at times.
            </Alert>
        </>
    );
}
