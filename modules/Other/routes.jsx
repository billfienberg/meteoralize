module.exports = {
  path: 'other',
  getComponent(locations, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Other'))
    })
  }
}