import Button from "../button/default";
import ExternalProfile from "./externalProfile/default";
import EmailIcon from "../../../../public/email.svg";
import PhoneIcon from "../../../../public/phone.svg";
import "./default.scss";

export default function AboutCard() {
  return (
    <div className="card aboutCard relativelyCentered fullWidth">
      <h2 className="marginBottom_sm">I'm Brian,</h2>
      <div className="textAndButtons">
        <div>
          <p className="marginBottom_sm">
            A UX/UI Designer with good front end skills and seven years of
            experience in designing E-commerce, SaaS, B2B, and B2C digital
            products.
          </p>
          <p className="marginBottom_sm">
            I’m currently working with a small and dedicated team at{" "}
            <a href="https://shiroistudio.com/">ShiroiStudio</a>. Feel free to
            get in touch:
          </p>
          <p>
            I’d love to hear from you, I’m always open to new opportunities and
            discussions.
          </p>
        </div>

        <div className="buttonContainer marginTop_med marginBottom_med">
          <Button
            href="mailto:brian.g.grieco@gmail.com"
            svg={<EmailIcon />}
            text="brian.g.grieco@gmail.com"
          />
          <Button
            href="tel:+393707026255"
            svg={<PhoneIcon />}
            text="+39 370 702 6255"
          />
        </div>
      </div>

      <h3 className="marginTop_med">Thank you for scrolling this far!</h3>
      <p>
        If you want to know more, you could check out my profiles on the
        following platforms:
      </p>
      <div className="marginTop_med squaresGrid">
        <ExternalProfile
          title="LinkedIn"
          href="https://www.linkedin.com/in/briangrieco/"
          imageUrl="/linkedin.png"
          altImageUrl="linkedinOn.png"
        />
        <ExternalProfile
          title="GitHub"
          href="https://github.com/BGGrieco"
          imageUrl="/octocat.png"
          altImageUrl="octocatOn.png"
        />
        <ExternalProfile
          title="CodePen"
          href="https://codepen.io/BGGrieco"
          imageUrl="/codepen.png"
          altImageUrl="codepenOn.png"
        />
        <ExternalProfile
          title="Dribbble"
          href="https://dribbble.com/bggrieco"
          imageUrl="/dribbble.png"
          altImageUrl="dribbbleOn.png"
        />
      </div>
    </div>
  );
}
