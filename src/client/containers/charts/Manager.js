import Emitter from '@utils/emitter';

function Manager() {

}

Manager.prototype.maChange = function (mas) {
  this.emit('maChange', mas);
};

Emitter(Manager.prototype);

export default Manager;