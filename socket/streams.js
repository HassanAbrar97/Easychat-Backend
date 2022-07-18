module.exports = function(io) {
  io.on('connection', Socket => {
    Socket.on('refresh', data => {
      io.emit('refreshPage', {});
    });
  });
};
