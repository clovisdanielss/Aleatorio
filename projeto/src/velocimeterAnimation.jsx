import $ from 'jquery';
import jQuery from 'jquery';
window.onload = function(){
    /* Set radius for all circles */
    var r = 35;
    var circles = document.querySelectorAll('.circle');
    var total_circles = circles.length;
    for (var i = 0; i < total_circles; i++) {
        circles[i].setAttribute('r', r);
    }

    /* Set meter's wrapper dimension */
    var meter_dimension = (r * 2) + 100;
    /* Espaçamento inferior para o wrapper. Tem que criar mais dois para deixar isso habilitado.
    var wrapper = document.querySelector("#wrapper");
    console.log(wrapper);
    wrapper.style.width = meter_dimension + "px";
    wrapper.style.height = meter_dimension + "px";*/

    /* Add strokes to circles  */
    var cf = 2 * Math.PI * r;
    var semi_cf = cf / 2;
    var semi_cf_1by3 = semi_cf / 3;
    var semi_cf_2by3 = semi_cf_1by3 * 2;
    document.querySelector("#outline_curves")
        .setAttribute("stroke-dasharray", semi_cf + "," + cf);
    document.querySelector("#low")
        .setAttribute("stroke-dasharray", semi_cf + "," + cf);
    document.querySelector("#avg")
        .setAttribute("stroke-dasharray", semi_cf_2by3 + "," + cf);
    document.querySelector("#high")
        .setAttribute("stroke-dasharray", semi_cf_1by3 + "," + cf);
    document.querySelector("#outline_ends")
        .setAttribute("stroke-dasharray", 2 + "," + (semi_cf - 2));

    document.querySelector("#outline_curves2")
        .setAttribute("stroke-dasharray", semi_cf + "," + cf);
    document.querySelector("#low2")
        .setAttribute("stroke-dasharray", semi_cf + "," + cf);
    document.querySelector("#avg2")
        .setAttribute("stroke-dasharray", semi_cf_2by3 + "," + cf);
    document.querySelector("#high2")
        .setAttribute("stroke-dasharray", semi_cf_1by3 + "," + cf);
    document.querySelector("#outline_ends2")
        .setAttribute("stroke-dasharray", 2 + "," + (semi_cf - 2));

    document.querySelector("#outline_curves3")
        .setAttribute("stroke-dasharray", semi_cf + "," + cf);
    document.querySelector("#low3")
        .setAttribute("stroke-dasharray", semi_cf + "," + cf);
    document.querySelector("#avg3")
        .setAttribute("stroke-dasharray", semi_cf_2by3 + "," + cf);
    document.querySelector("#high3")
        .setAttribute("stroke-dasharray", semi_cf_1by3 + "," + cf);
    document.querySelector("#outline_ends3")
        .setAttribute("stroke-dasharray", 2 + "," + (semi_cf - 2));

    document.querySelector("#mask")
        .setAttribute("stroke-dasharray", semi_cf + "," + cf);
    document.querySelector("#mask2")
        .setAttribute("stroke-dasharray", semi_cf + "," + cf);
    document.querySelector("#mask3")
        .setAttribute("stroke-dasharray", semi_cf + "," + cf);

    /* Bind range slider event*/
    var mask = document.querySelector("#mask");
    var mask2 = document.querySelector("#mask2");
    var mask3 = document.querySelector("#mask3");
    var meter_needle =  document.querySelector("#meter_needle");
    var meter_needle2 =  document.querySelector("#meter_needle2");
    var meter_needle3 =  document.querySelector("#meter_needle3");


    function range_change_event(val,mask,meter_needle) {
        var percent = (val/5000)*100;
        var meter_value = semi_cf - ((percent * semi_cf) / 100);
        mask.setAttribute("stroke-dasharray", meter_value + "," + cf);
        meter_needle.style.transform = "rotate(" + 
            (270 + ((percent * 180) / 100)) + "deg)";
    }

    //Uso de Jquery para animação de contagem a partir de uma classe css .count
    $('.count').each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 2000,
        easing: 'swing',
        step: function () {
            var num = Math.ceil(this.Counter);
            $this.text(num);
    			var id  = $this.attr("id");
    			switch(id){
    				case 'count-empresas':
    					range_change_event(num,mask,meter_needle);
    					break;
    				case 'count-usuarios':
    					range_change_event(num,mask2,meter_needle2);
    					break;
    				case 'count-sistemas':
    					range_change_event(num,mask3,meter_needle3);
    					break;
    				default:
    					break;
    			}
    			
        }
      });
    });
}