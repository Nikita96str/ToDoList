import { Dispatch, SetStateAction } from "react";
import './modal.css'

interface modalProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>; 
}

const Modal: React.FC<modalProps> = (props) => {
    const {active, setActive} = props;
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default Modal