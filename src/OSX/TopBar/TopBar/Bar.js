import React,{useEffect,useState} from 'react'
import TopIcons from '../Icons/TopIcons'

export const Bar = () => {

  
var date = new Date().toLocaleString();
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleString()));
    return () => {
      clearInterval(interval);
    };
  }, []);  
 
  
 
  return (
    <div
      style={{
        zIndex: 6,
        position: "absolute",
        background: "rgba(0, 0, 0, 1)",
        position: "fixed",
        top: "0%",
        width: "100%",
        //left: "50%",
        transform: "translate(0%,0%)",
        // backgroundImage:
        //   "url(" +
        //   "https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" +
        //   ")",
        backgroundRepeat: "repeat",
        color: "white",
      }}
    >
      <TopIcons />
      <div
        style={{ marginTop: "-1.25%", marginLeft: "91.5%", fontWeight: "bold" }}
      >
        {date.substring(11)}
      </div>
      
    </div>
  );
}
