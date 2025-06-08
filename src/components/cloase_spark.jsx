import Button from '@mui/material/Button';

export default function Close_Spark({ onClose }) {
    return(
        <>
          <Button variant="contained" onClick={onClose}>Turn off spark effect</Button>
        </>
    )
}
