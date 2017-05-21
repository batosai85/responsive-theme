import on_Click from "./onClick.js";
import on_Scroll from "./onScroll.js";
import on_Resize from "./onResize.js";

export default function App(){
    $(function(){
        $(".section1").css({
            opacity:"0"
        });
        $(".section2").css({
            opacity:"0"
        });

        on_Click();
        on_Scroll();
        on_Resize();

    });
}