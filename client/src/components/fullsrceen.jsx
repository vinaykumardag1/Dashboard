import { useState } from "react";
import { Fullscreen, FullscreenExit } from "@mui/icons-material";

export default function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  return (
   
      <button
        onClick={toggleFullscreen}
        className="mt-4 p-3 mr-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        {isFullscreen ? <FullscreenExit fontSize="large" /> : <Fullscreen fontSize="large" />}
      </button>
   
  );
}
