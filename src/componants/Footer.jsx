const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10" id="contacts">
      <nav>
        <h6 className="footer-title">Contact Me</h6>
        <a href="mailto:ahmedheshamahah8@gmail.com" className="link link-hover">
          Email : ahmedheshamahah8@gmail.com
        </a>
        <a className="link link-hover">WhatsApp : (+20) 01226810306</a>
      </nav>
      <nav>
        <h6 className="footer-title">Follow Me</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/ahmed-hesham-aa525a2b7/">
            <img
              className="fill-current"
              style={{
                width: "24",
                height: "24",
              }}
              src="https://img.icons8.com/fluency/48/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a>
            <img
              className="fill-current"
              style={{
                width: "24",
                height: "24",
              }}
              src="https://img.icons8.com/fluency/48/instagram-new.png"
              alt="instagram"
            />
          </a>
          <a>
            <img
              className="fill-current"
              style={{
                width: "24",
                height: "24",
              }}
              src="https://img.icons8.com/ios-filled/50/facebook--v1.png"
              alt="facebook"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
