<script>
(function alwaysLoop() {
    setTimeout(function() {
        if(drifting == 1) {
            balloon.css("top", parseInt(balloon.css('top'))- drift_speed);}
        alwaysLoop();
    }, 1000);
})();

</script>