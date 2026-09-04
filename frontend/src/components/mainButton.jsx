import { useTheme } from "../providers/ThemeProvider";

function MainButton({ className, onClick, buttonText, icon }) {
  const { colorValues } = useTheme();

  return (
    <button
      className={`${className} px-4 py-2 rounded-xs font-bold flex`}
      onClick={onClick}
      style={{
        backgroundColor: colorValues.buttonColor,
        color: colorValues.buttonColorText,
      }}
    >
      {buttonText}
      {icon}
    </button>
  );
}

export default MainButton;
