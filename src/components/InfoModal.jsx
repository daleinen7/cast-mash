import React, {useState} from 'react';
import Modal from 'react-modal';
import { Info, XCircle } from "phosphor-react";



export default function InfoModal() {
    

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
            setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
            setModalIsOpen(false)
    }
    
    const customStyles = {
        content : {
        top: '1%',
        left: 'auto',
        right: '1%',
        bottom: 'auto',
        marginRight: '5%',
        transition: 'ease-in 0.6s', 
        backgroundColor: '#fff',
        fontFamily: 'Sora',
        width: '30%',
        borderRadius: '10px'
        }
    };

        return(
            <>
                <button onClick={setModalIsOpenToTrue} style={{
                    position: 'absolute',
                    right: 4,
                    top: 4,
                    color: '#fff',
                    backgroundColor: '#000',
                    border: 0
                }}>
                    <Info size={30} />
                </button>

                <Modal isOpen={modalIsOpen} style={customStyles}>
                    Mash two actors together to find the movies they've both starred in. <br />
                    <button onClick={setModalIsOpenToFalse} style={{
                        position: 'absolute',
                        right: 6,
                        top: 6,
                        color: '#000',
                        backgroundColor: '#fff',
                        border: 0,
                        borderRadius: '10px'
                    }}>
                        <XCircle size={30} />
                        </button>
                    
                </Modal>
            </>
    )
}
