
function setPlayerStyle(player){
    console.log(player);
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}


const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
    
}

// button 
function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
    <p>Perferendis, voluptate quidem delectus dolores vitae a ea nisi necessitatibus veritatis error nulla unde veniam incidunt atque pariatur quod dolore. Vitae et praesentium dolore minima similique fugiat tempora temporibus. Beatae.</p>

    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
}

// event bubble 
document.getElementById('players').addEventListener('click' , function(event){
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yelow';
    }
});