const handler = {
  get: (target, property, receiver) => {
    const original = target[property]
    if (original instanceof Function) {
      console.log(property)
      return function (...args) {
        console.log(`Mutation ${property} ${JSON.stringify(args)} ${JSON.stringify(target.state)}`);
        let result = original.apply(this, args)
        return result
      }
    } else {
      return original
    }
  }
}

export default function (target) {
  return new Proxy(target, handler)
}
