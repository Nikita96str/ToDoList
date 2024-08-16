import React, { useState } from "react"
import Modal from './Modal/Modal'

interface popupProps{
    taskName: any;
}

const PopupWindow: React.FC<popupProps> = (props) => {
    const {taskName} = props;
    const boolType = typeof taskName
    console.log(taskName, boolType)
    const [modalActive, setModalActive] = useState(false)


    function windowHandler() {
        setModalActive(true)
    }
    if (taskName) {
        return <div className="taskButton">
            <main>
                <button onClick={windowHandler}>{taskName}</button> 
            </main>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
            
    }
    // Почему без возвращения примитива(не тега) компонент не работает?
    return taskName
    // return null;
}

export default PopupWindow