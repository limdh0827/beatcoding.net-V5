const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center space-x-5 w-full h-24 border-t font-light">
        <span>Copyright 2021 임도협</span>
        <div className="flex justify-center space-x-2 ">
          <span>비트코딩</span>

          <img
            src="/btc.svg"
            alt="BeatCoding Logo"
            className="h-5 ml-2 my-auto"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
