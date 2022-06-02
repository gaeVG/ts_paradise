class Bread {
    use(player) {
        player.data.status.map((playerStatus) => {
            if (playerStatus.name === 'health') {
                playerStatus.value = 200;
                player.showNotification('~g~You have been healed!');
            }
        });
    }
}


export { Bread };
