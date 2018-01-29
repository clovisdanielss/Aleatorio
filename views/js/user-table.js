window.onload = function(){
    $('tr').on('click', function(){
        var id = $(this).attr('id');
        $('#exampleModal').modal('toggle')
        //$('#textField').attr('value', id);
    })
    $('.dropdown-item').on ('click', function(){
        var newText = $(this).text();
        $('#dropdownMenuButton').text($(this).text());
        if(newText == 'CherryTrack'){
            $('#ops').show();
        }else{
            $('#ops').hide();
        }
    })
    $('.mymodal.list-group-item-action.list-group-item').on('click',function(){
        var selected = $(this).attr('ligado');
        console.log(selected);
        if(!selected || selected=='false'){
            $(this).attr('ligado', 'true');
            $(this).addClass('active');
        }
        else{
            $(this).attr('ligado', 'false');
            $(this).removeClass('active');
        }
    })

}
