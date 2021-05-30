const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-between px-5 w-full h-24 border-t font-light">
        <span>© 2021 임도협. All rights reserved.</span>
        {/* <span>Made by 임도협</span> */}
        <div className="flex justify-center items-center">
          <span>beatcoding.net</span>

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
