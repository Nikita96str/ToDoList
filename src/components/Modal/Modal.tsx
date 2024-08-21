import { Dispatch, SetStateAction } from "react";
import './modal.css'

interface modalProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>; 
    children: any
}

const Modal: React.FC<modalProps> = (props) => {
    const {active, setActive, children} = props;
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
                <p/>
                <label htmlFor="HZ">Description: </label>
                <input className="modal__description" type="inpDescription" name="Description"/>
            </div>
        </div>
    )
}

export default Modal