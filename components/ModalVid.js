import Modal from "../utils/Modal";

const ModalVid = () => {
  return (
    <>
      <div>
        <button
          className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setVideoModalOpen(true);
          }}
          aria-controls="modal"
        >
          <svg
            className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
            <path d="M10 17l6-5-6-5z" />
          </svg>
          <span className="ml-3">동영상 재생하기</span>
        </button>
      </div>

      <Modal
        id="modal"
        ariaLabel="modal-headline"
        show={videoModalOpen}
        handleClose={() => setVideoModalOpen(false)}
      >
        <div className="relative pb-9/16">
          <iframe
            className="absolute w-full h-full"
            src="https://player.vimeo.com/video/174002812"
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default ModalVid;
