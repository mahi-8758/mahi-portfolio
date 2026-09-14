import React from 'react';

const CertificateModal = ({ selectedImage, setSelectedImage }) => {
    if (!selectedImage) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl bg-slate-900 border border-slate-800 p-2 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt="Certificate preview" className="max-w-full max-h-[85vh] object-contain rounded-lg mx-auto" />
                <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-3 right-3 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 text-xl transition-all"
                >
                    <i className="bx bx-x"></i>
                </button>
            </div>
        </div>
    );
};

export default CertificateModal;
