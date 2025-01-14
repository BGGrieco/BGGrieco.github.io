import SkillComponent from "./skillComponent/default";
import "./default.scss";

export default function SkillCard() {
  return (
    <div className="skillCard card relativelyCentered fullWidth">
      <div className="creative">
        <h2 className="marginBottom_sm">CREATIVE</h2>
        <SkillComponent
          name="Figma"
          alignment=""
          imageUrl="/figma.png"
          anchorUrl="https://www.figma.com/"
        />

        <SkillComponent
          name="Sketch"
          alignment="offset"
          imageUrl="/sketch.png"
          anchorUrl="https://www.sketch.com/"
        />

        <SkillComponent
          name="Photoshop"
          alignment=""
          imageUrl="/photoshop.png"
          anchorUrl="https://www.adobe.com/it/products/photoshop.html"
        />

        <SkillComponent
          name="Illustrator"
          alignment="offset"
          imageUrl="/illustrator.png"
          anchorUrl="https://www.adobe.com/it/products/illustrator.html"
        />

        <SkillComponent
          name="AfterEffects"
          alignment=""
          imageUrl="/aftereffects.png"
          anchorUrl="https://www.adobe.com/it/products/aftereffects.html"
        />
      </div>
      <div className="technical">
        <h2 className="marginBottom_sm">TECHNICAL</h2>
        <SkillComponent
          name="SCSS"
          alignment=""
          imageUrl="/scss.png"
          anchorUrl="https://sass-lang.com/"
        />

        <SkillComponent
          name="JavaScript"
          alignment="offset"
          imageUrl="/js.png"
          anchorUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />

        <SkillComponent
          name="jQuery"
          alignment=""
          imageUrl="/jq.png"
          anchorUrl="https://jquery.com/"
        />

        <SkillComponent
          name="React"
          alignment="offset"
          imageUrl="/rea.png"
          anchorUrl="https://nextjs.org/"
        />

        <SkillComponent
          name="Angular"
          alignment=""
          imageUrl="/ang.png"
          anchorUrl="https://angular.io/"
        />
      </div>
    </div>
  );
}
