import { EventEmitter } from 'events';

class NotificationService extends EventEmitter {
  constructor() {
    super();

    this.listNotify = [];
  }

  create = notify => () => {
    this.listNotify.push({
      id: notify.id || new Date().getTime(),
      ...notify
    });
  
    this.emitChange();
  }

  remove(notification) {
    this.listNotify = this.listNotify.filter(n => notification.id !== n.id);

    this.emitChange();
  }

  emitChange() {
    this.emit('CHANGE', this.listNotify);
  }

  addChangeListener(callback) {
    this.addListener('CHANGE', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('CHANGE', callback);
  }
}

export default new NotificationService();