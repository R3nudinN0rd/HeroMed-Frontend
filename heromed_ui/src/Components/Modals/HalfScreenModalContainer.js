const HalfScreenModalContainer = ({isModalOpen, modalBody}) => {
    return (isModalOpen && 
            <div className="absolute z-50 items-center justify-center w-1/2 h-full bg-opacity-60 bg-e-dark">
                {modalBody}
            </div>       
        );
}

export default HalfScreenModalContainer