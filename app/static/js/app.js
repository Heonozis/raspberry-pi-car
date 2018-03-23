var joystick = nipplejs.create({
    zone: document.getElementById('static'),
    mode: 'static',
    position: {left: '50%', top: '50%'},
    color: 'red'
});

joystick.on('move', function (event, data) {
    radius = data.force
    angle = data.angle.radian

    var form_data = new FormData();
    form_data.append('angle', angle);
    form_data.append('radius', radius);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/ride', true);
    xhr.send(form_data);
})

