import { Fragment } from "react"
import ReactDOM from "react-dom"

const Backdrop = (props: any) => {
  return (
    <div
      className="fixed bg-black bg-opacity-75 top-0 left-0 z-20 h-screen w-full"
      onClick={props.onClose}
    />
  )
}

const ModalOverlay = (props: any) => {
  return (
    <>
      {/*<div*/}
      {/*  className="fixed bg-white z-30 top-0 animate-modal-open flex flex-col"*/}
      {/*  style={{*/}
      {/*    left: "50%",*/}
      {/*    top: "50%",*/}
      {/*    transform: "translate(-50%, -50%)",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <div>{props.modalTop && props.modalTop()}</div>*/}
      {/*  <div className="flex-grow overflow-scroll overflow-y-auto overscroll-x-none overflow-x-hidden">*/}
      {/*    {props.children}*/}
      {/*  </div>*/}
      {/*  <div>{props.modalBottom && props.modalBottom()}</div>*/}
      {/*</div>*/}

      <div className="fixed bg-white z-30 right-0 top-0 h-screen animate-modal-open flex flex-col">
        <div>{props.modalTop && props.modalTop()}</div>
        <div className="flex-grow overflow-scroll overflow-y-auto overscroll-x-none overflow-x-hidden">
          {props.children}
        </div>
        <div>{props.modalBottom && props.modalBottom()}</div>
      </div>
    </>
  )
}

const portalElement: any = document.getElementById("overlays")

const Modal = (props: any) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay {...props}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal
