import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        h3: {
            color : dodger-blue
        }
    `]
})
export class ServerComponent{
    serverStatus = 'offline';
    serverId = 10;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatusByServerId(serverStatus, serverId) {
        return 'with ID = ' + serverId + ' is --' + serverStatus + '--';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}