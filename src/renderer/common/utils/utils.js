const Utils = {
  getDuration (millisecond, format = 'mm:ss') {
    let second = millisecond / 1000 % 60
    let minute = millisecond / 1000 / 60 % 60
    let hour = millisecond / 1000 / 60 / 60 % 24

    let fn = (type, numb) => {
      numb = parseInt(numb)

      format = numb > 0 ? format.replace(type, numb < 10 ? ('0' + numb) : numb) : format.replace(type, '00')
    }

    fn('hh', hour)
    fn('mm', minute)
    fn('ss', second)
    return format
  }
}

export default Utils
