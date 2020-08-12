let year= parseInt(prompt('Enter a year'));
if(year%4==0){
    if(year%100==0){
        if(year%400) namNhuan();
        else namBt();
    }
    else namNhuan();
}
else namBt();

function namNhuan(){alert(year+ ' la nam nhuan');}
function namBt(){alert(year+ ' khong phai nam nhuan');}