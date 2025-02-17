import AnimatedCursor from "react-animated-cursor";

const MouseTrail = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={30}
      innerScale={3}
      outerScale={1}
      trailingSpeed={8}
      outerAlpha={0.3}
      showSystemCursor={false}
      innerStyle={{
        background: "#fff",
        borderRadius: "50%",
        mixBlendMode: "exclusion",
        opacity: 0.9
      }}
      outerStyle={{
        border: "1px solid #EAB308",
        borderRadius: "50%",
        backdropFilter: "blur(0px)",
      }}
      clickables={[
        "a", "button", "input", "select", "textarea", ".interactive", "[role='button']", "[role='link']"
      ]}
    />
  );
};

export default MouseTrail;
