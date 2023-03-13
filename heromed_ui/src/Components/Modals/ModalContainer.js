
const ModalContainer =({isModalOpen, modalBody}) => {
    return (isModalOpen && 
        <div className="absolute z-50 flex items-center justify-center w-full h-full bg-opacity-60 bg-e-dark">
            {modalBody}
        </div>
    );
}

export default ModalContainer