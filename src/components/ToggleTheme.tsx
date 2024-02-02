import useTheme from "../hook/useTheme";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  
  const handleOnChange = () => {  
    setTheme(theme == "light" ? "dark" : "light");        
  };

  return (
    <div className=" "> 
      <label className="rounded text-2xl cursor-pointer transition-colors">      
        <input type="checkbox" className="checkbox hidden" onChange={handleOnChange} checked={theme == 'dark' ? false : true}/> 
        {`${theme == 'dark' ? '🌙' : '☀️'}`}        
      </label>
    </div>
  );
}
