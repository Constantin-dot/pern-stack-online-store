import { Alert } from "react-bootstrap";

const InfoAlert = ({ variant, onClose, text }) => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "100px",
            }}
        >
            <Alert variant={variant} onClose={onClose} dismissible>
                {text}
            </Alert>
        </div>
    );
};

export default InfoAlert;
