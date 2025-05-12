export default function PopUpMenu({handleClose, component}){
    
    return (
        <>
            <div onClick={handleClose} className="backDrop"></div>
            <div className="popUp-menu">
                {/* <a onClick={handleClose} className="popUp-menu-close"><FaRegCircleXmark/></a> */}
                { component }
            </div>
        </>
    )
}