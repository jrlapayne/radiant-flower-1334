$(document).ready(function(){
    var ex1running = false;
    var ex2running = false;

    $('#meter-ex1').ready(function(){ 
	  if(!ex1running){
        ex1running = true;
        var $this = $(this);
        var count = 100;
        var inter = null;
		var points = 1000
        function run(){
			count = count - 10;
            points = points - 100;
            $this.find('.meter-value').css('width', count+"%");
            $this.find('.meter-text').text(points);
            if(count == 0){
                clearInterval(inter);
				ex1running = false;
       		}
        }
		inter = setInterval(run, 1000);
	}
});

});