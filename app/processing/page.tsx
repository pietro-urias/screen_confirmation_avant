"use client"
import { useState, useEffect } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri"
import Modal from "react-modal";

// Estilo para o Modal
const customModalStyles = {
    content: {
        top: "70%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "30px"
    },
};

export default function Home() {
    // Estado para controlar se o componente está em modo de carregamento ou não
    const [loading, setLoading] = useState<boolean>(true);
    // Estado para controlar se o modal está aberto ou fechado
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        // Simula um atraso de 1 segundo (1000 milissegundos) para mostrar o carregamento
        setTimeout(() => {
            // Após o atraso, define o estado de carregamento como falso
            setLoading(false);
            // Abre o modal
            setIsModalOpen(true);
        }, 1000); // Aguarde 1 segundo antes de executar este código
    }, []); // Este efeito é executado somente quando o componente é montado inicialmente

    return (
        <main className="flex min-h-screen flex-col">
            <div className="flex flex-col flex-1 items-center">
                {loading ? (
                    <BiLoaderCircle className="animate-spin w-20 h-20 mt-20" />
                ) : (
                    <AiFillCheckCircle className="w-20 h-20 mt-20" />
                )}
                <h1 className="text-center text-2xl font-bold my-5">
                    Pending transaction...
                </h1>
                <p className="text-center text-sm">
                    Transaction will likely process in less than 30 seconds.
                </p>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={customModalStyles}
                contentLabel="Transaction Completed"
            >
                {/* Conteúdo do modal */}
                <div className="flex flex-col flex-1 items-center">
                    <RiPagesLine className="w-8 h-8" />
                </div>
                <h2 style={{ textAlign: "center", fontSize: "18px", font: "bold" }}><strong>Prepare an invoice</strong></h2>
                <p style={{ fontSize: "12px", marginBottom: "20px" }}>Generate and send an invoice after the transaction is complete..</p>
                <p style={{ textAlign: "left", fontSize: "12px" }}>Email</p>
                <input
                    type="text"
                    placeholder="example@email.com"
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "12px",
                        marginTop: "10px",
                        borderRadius: "10px"
                    }}
                />
                <label>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "10px", cursor: "pointer" }}>
                        <input type="checkbox" style={{ marginRight: "5px" }} />
                        <span style={{ fontSize: "12px" }}>Sign up for Mass Market newsletters</span>
                    </div>
                </label>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                        onClick={() => {
                            // Ação do botão
                        }}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            fontSize: "16px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            cursor: "pointer",
                            borderRadius: "10px",
                        }}
                    >
                        <strong>Send Invoice</strong>
                    </button>
                </div>
            </Modal>
        </main >
    );
}
