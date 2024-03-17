import React, { useEffect, useRef } from 'react';
import './modal.css';

function Modal({ handleModal, modalData }) {
	const modalRef = useRef();

	useEffect(function () {
		document.addEventListener('click', handleClickOutside, true);

		//component did un-mount
		return function () {
			document.removeEventListener('click', handleClickOutside, true);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleClickOutside(e) {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			handleModal();
		}
	}

	return (
		<div className="modalBg">
			<div className="modal" ref={modalRef}>
				<div className="modal-bar">
					<span className="modalTags">{modalData.tags.toUpperCase()}</span>
					<span className="closeBtn" onClick={handleModal}>
						&times;
					</span>
				</div>
				<div className="modal-content">
					<img src={modalData.largeImageURL} alt={modalData.tags} className="modalImage" />
				</div>
			</div>
		</div>
	);
}

export default Modal;
