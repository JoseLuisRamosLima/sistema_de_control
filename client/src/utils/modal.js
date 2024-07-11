import { useState } from "react";

function Modal({ isOpen, onClose, onSubmit }) {
    const [code, setCode] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(code);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Insertar Código de Ingreso</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Código"
                    />
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Verificar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
