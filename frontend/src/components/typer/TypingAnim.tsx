import{TypeAnimation} from "react-type-animation";

const TypingAnim = ()=> {
    return (
        <TypeAnimation
      sequence={[
        "Chat With ACEBOT",
        1000, // Waits 1s
        "Built With OpenAI",
        2000, // Waits 2s
        "Your All Question's Solutions",
        1500,
      ]}
    //   wrapper="span"
    //   cursor={true}
      speed={50}
      style={{ fontSize: '60px', color:"white", display: 'inline-block', textShadow :"1px 1px 20px #000"}}
      repeat={Infinity}
    />

    )
}

export default TypingAnim;