function selectPermission() {
    $('.mymodal.list-group-item-action.list-group-item').on('click',function(){
        var selected = $(this).attr('ligado');
        if(!selected || selected=='false'){
            $(this).attr('ligado', 'true');
            $(this).addClass('active');
        }
        else{
            $(this).attr('ligado', 'false');
            $(this).removeClass('active');
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
    $('.btn-clean').on('click', function(){
        var col = $('.active');
        col.each(function(item){
            $(col[item]).attr('ligado', 'false');
            $(col[item]).removeClass('active');
        });
    });
}

window.onload = function(){
    openModal();
    selectSystem();
    selectPermission();
    cleanSelected();
}
