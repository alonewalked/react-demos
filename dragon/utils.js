
//
// 通过id找到组件的位置
//
export function findComponentLocation(config, id) {
  var result = findComponentLocationStep(config, id, '')
  var location = {}
  var paths = result.path.split('.'), temp = location
  paths.forEach((p) => {
    if (p) {
      temp[p] = {}
      temp = temp[p]
    }
  })
  return {
    location: location,
    path: result.path,
    obj: result.obj,
    last: temp
  }
}

export function generateId(seed) {
  return (seed || '') + '_' + parseInt(Math.random() * 1000000, 10) // TODO
}

function findComponentLocationStep(config, id, path) {
  if (config.id == id) {
    return {
      path: path,
      obj: config
    }
  }
  for (let i = 0; config.children && i < config.children.length; i++) {
    var p = path + '.children.' + i + '.component'
    var result = findComponentLocationStep(config.children[i].component, id, p)
    if (result) {
      return result
    }
  }
  return null
}

export default {
  findComponentLocation,
  generateId
}
