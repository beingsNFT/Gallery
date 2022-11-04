import { Fade,Zoom,Slide } from "react-reveal";

const Modal = ({ openState, children, background }) => {
  
    return (
    <>
      <div className={openState ? "z-50 block fixed transition-all inset-0 bg-primary opacity-40 " : "hidden"}></div>
      <div
        className={` ${
          openState ? "fixed" : "hidden"
        }    inset-0 flex flex-col p-3 z-50  md:p-auto items-center justify-center `}
      >
       
          <div className={`z-50 flex-col overflow-auto justify-center items-center rounded-2xl p-3 ${background}`}>
        
            {children}
       
          </div>
      
      </div>
    </>
  );
};

export default Modal;
