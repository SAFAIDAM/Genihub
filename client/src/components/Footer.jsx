import logo from "../assets/logo.svg";

function Footer() {
  return (
    <>
      <div className="footer-background mt-[10rem]">
        <div className="footercont">
          <footer className="flex justify-between">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <p>Service and politics</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
