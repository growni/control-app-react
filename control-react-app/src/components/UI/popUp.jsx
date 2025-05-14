import { createPortal } from 'react-dom';


export default function PopUpMenu({handleClose, component}){


    const portalRoot = document.getElementById('portal-root');

    if (!portalRoot) return null; // Safety check

    // return (children, portalRoot);
    
    return createPortal(
            <>
                <div onClick={handleClose} className="backDrop"></div>
                <div className="popUp-menu">
                    {/* <a onClick={handleClose} className="popUp-menu-close"><FaRegCircleXmark/></a> */}
                    { component }
                </div>
            </>
        , portalRoot)
}