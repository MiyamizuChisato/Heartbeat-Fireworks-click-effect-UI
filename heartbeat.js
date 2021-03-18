<script type="text/javascript">
/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("❤Web Design❤","❤App Develop❤","❤SEO Services❤");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(300*Math.random())+","+~~(300*Math.random())+","+~~(300*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 280,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
</script>