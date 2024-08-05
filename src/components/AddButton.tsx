
const AddButton: React.FC = () => {
    function onButtonClick(params:object) {
        console.log('params:', params);
    }

    enum paramObj {
        p1 = 1,
        p2,
        p3,
    }

    return (
        <div>
            <button onClick={onButtonClick}>Add</button>
        </div>
    )
}

export default AddButton