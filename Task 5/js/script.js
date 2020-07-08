'use strict'
const colors = ['IndianRed','Red','DarkRed','GreenYellow','LimeGreen','Green','Olive',
                'MediumVioletRed','DarkCyan','Coral','DarkGoldenRod','Orange','Aqua','Yellow',
                'DarkTurquoise','Moccasin','SteelBlue','MediumPurple','Blue','DarkMagenta','MidnightBlue',
                'DarkSlateBlue','Cornsilk','Bisque','Wheat','RosyBrown','Peru','Brown'];

const tiles = colors.map( function (color) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.style.backgroundColor = color;
    
    return tile;
});

const wrapper = document.querySelector('.wrapper')
const wrapperTiles = document.querySelector('.wrapper__tile')
wrapperTiles.append(...tiles);

for (const tile of tiles) {
    tile.addEventListener('click',function(){
        wrapper.style.backgroundColor = this.style.backgroundColor;
        wrapperTiles.style.backgroundColor = this.style.backgroundColor;
    });
}

                
