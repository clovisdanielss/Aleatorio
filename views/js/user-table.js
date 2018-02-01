function selectPermission() {
    $('.mymodal.list-group-item-action.list-group-item').on('click',function(){
        var selected = $(this).attr('ligado');
        if(!selected || selected=='false'){
            $(this).attr('ligado', 'true');
            $(this).addClass('active');
            $(this).append('<i class="mymodal fas fa-check"></i>');
        }
        else{
            $(this).attr('ligado', 'false');
            $(this).removeClass('active');
            console.log($(this).children('span').children('svg'));
            $(this).children('svg').remove();
        }
    });
}

function selectSystem(){
    $('.dropdown-item').on ('click', function(){
        var newText = $(this).text();
        $('#dropdownMenuButton').text($(this).text());
        if(newText == 'CherryTrack'){
            $('#ops').show();
        }else{
            $('#ops').hide();
        }
    });
}

function openModal(){
    $('tr').on('click', function(){
        var id = $(this).attr('id');
        $('#exampleModal').modal('toggle')
    });
}

function cleanSelected(){
    function clean(){
        var col = $('.active');
        col.each(function(item){
            $(col[item]).attr('ligado', 'false');
            $(col[item]).removeClass('active');
        });
        $('#dropdownMenuButton').text('Selecione ...');
        $('#ops').hide();
    }
    $('.btn-clean').on('click', function(){
        clean();
    });
    $('#exampleModal').on("hidden.bs.modal", function(){
        clean();
    })
}

window.onload = function(){

    openModal();
    selectSystem();
    selectPermission();
    cleanSelected();
}
