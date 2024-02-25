import { ElMessage } from 'element-plus'
import { unref } from 'vue'
import { cloneDeep } from 'lodash-es'
// proxy.$toast('保存成功')
// proxy.$toast('保存失败', 'error')
export function $toast(message, type = 'success', otherParams = {}) {
  const map = {
    s: 'success',
    i: 'info',
    e: 'error',
    w: 'warning',
  }
  ElMessage.closeAll()
  ElMessage({
    message: message,
    type: map[type] || type,
    ...otherParams,
  })
}

/**
 *
 * @param {*} str 需要清空的localStorage或sessionStorage, 如果不传清空所有
 * @param {*} param1 需要排除的sessionStorage或者localStorage
 * @example
 * clearStorage()
 * clearStorage('loginId')
 * clearStorage('', {exceptSessions: ['loginId']});
 */
export function clearStorage(
  str = '',
  { exceptSessions = [], exceptLocals = [] } = {},
) {
  let sessionList = {}
  let localList = {}
  if (exceptSessions.length > 0) {
    exceptSessions.forEach((v) => {
      sessionList[v] = getStorage(v, true)
    })
  }
  if (exceptLocals.length > 0) {
    exceptLocals.forEach((v) => {
      localList[v] = getStorage(v)
    })
  }
  if (!str) {
    sessionStorage.clear()
    localStorage.clear()
  } else {
    sessionStorage.removeItem(str)
    localStorage.removeItem(str)
  }
  for (const key in sessionList) {
    const value = sessionList[key]
    setStorage(key, value)
  }
  for (const key in localList) {
    const value = localList[key]
    setStorage(key, value, true)
  }
}

// await proxy.validForm(formRef);
export function validForm(ref, { errorText = '表单校验有误, 请检查' } = {}) {
  return new Promise((resolve, reject) => {
    unref(ref).validate((valid, status) => {
      if (valid) {
        resolve()
      } else {
        if (errorText) {
          $toast(errorText, 'e')
        }
        reject()
      }
    })
  })
}

/**
 * 判断变量是否空值
 * undefined, null, '', '   ', false, 0, [], {} 均返回true，否则返回false
 */
export function isEmpty(sendData) {
  let v = unref(sendData)
  switch (typeof v) {
    case 'undefined':
      return true
    case 'string':
      if (v.trim().length === 0) return true
      break
    case 'boolean':
      if (!v) return true
      break
    case 'number':
      if (0 === v) return true
      break
    case 'object':
      if (null === v) return true
      if (undefined !== v.length && v.length === 0) return true
      for (var k in v) {
        return false
      }
      return true
  }
  return false
}
// 非空
export function notEmpty(v) {
  return !isEmpty(v)
}

export function clone(data) {
  return cloneDeep(data)
}

/**
 * 生成随机数, 第一个参数可传字符串, 空 或者数组
 * uuid("名字") => 名字hc8f
 * uuid() => abcd
 * uuid('time') => 25MR 10-27 17:34:01
 * uuid('time', 0, {startStr:'andy', timeStr:"{h}:{i}:{s}"}) => andy 17:38:23
 * uuid('phone') => 13603312460
 * uuid('email') => cBZA@qq.com
 * uuid('number') => 2319
 * uuid([ { label: "小泽泽", value: "xzz" },{ label: "小月月", value: "xyy" }]) => xzz
 */
export function uuid(
  type = '',
  length = 4,
  { emailStr = '@qq.com', timeStr = '{m}-{d} {h}:{i}:{s}', startStr = '' } = {},
) {
  let randomStr = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let res = type
  // 如果传的第一个参数的数组， 说明是下拉框。 下拉框获取的是数组的第一项的值
  if (judgeType(type) === 'array') {
    if (!length) {
      return type[0]
    }
    return type[0][length === 4 ? 'value' : length]
  }
  // 如果是手机号, 生成随机手机号
  if (type === 'phone') {
    let prefixArray = new Array(
      '130',
      '131',
      '132',
      '133',
      '135',
      '136',
      '137',
      '138',
      '170',
      '187',
      '189',
    )
    let i = parseInt(10 * Math.random())
    let res = prefixArray[i]
    for (var j = 0; j < 8; j++) {
      res = res + Math.floor(Math.random() * 10)
    }
    return res
  }
  // 如果是email, 生成随机email
  if (type === 'email') {
    return uuid(startStr, length) + emailStr
  }
  // 如果是时间, 生成时间字符串
  if (type === 'time') {
    return uuid(startStr, length) + ' ' + parseTime(new Date(), timeStr)
  }
  // 如果是数字, 生成除了0的随机数字
  if (type === 'number') {
    let randomStr = '123456789'
    let res = ''
    for (let i = length; i > 0; --i) {
      res += randomStr[Math.floor(Math.random() * randomStr.length)]
    }
    return Number(res)
  }
  for (let i = length; i > 0; --i) {
    res += randomStr[Math.floor(Math.random() * randomStr.length)]
  }
  return res
}

/**
 * 判断传入参数的类型
 * @param {*} type
 * judgeType(new RegExp()) regexp
 * judgeType(new Date()) date
 * judgeType([]) array
 * judgeType({}) object
 * judgeType(null) null
 * judgeType(123) number
 */
export function judgeType(type) {
  if (typeof type === 'object') {
    const objType = Object.prototype.toString
      .call(type)
      .slice(8, -1)
      .toLowerCase()
    return objType
  } else {
    return typeof type
  }
}

export function sleep(delay = 0, fn) {
  return new Promise((resolve) =>
    setTimeout(() => {
      fn && fn()
      resolve()
    }, delay),
  )
}

/** @使用方式
name: [proxy.validate(), proxy.validate('name', { message: '你干嘛哈哈' })],
between: [proxy.validate(), proxy.validate('between', { max: 99 })],
number: [proxy.validate(), proxy.validate('number')],
length: [proxy.validate('length'), proxy.validate()],
phone: [proxy.validate(), proxy.validate('phone')],
confirmRegPwd: [
  proxy.validate('same', { value: toRef(form.value, 'regPwd') }),
],
*/
export function validate(type = 'required', rules = {}) {
  const trigger = rules.trigger || ['blur', 'change']
  const typeMaps = [
    'required',
    'pwd',
    'number',
    'mobile',
    'between',
    'same',
    'length',
  ]
  if (!typeMaps.includes(type)) {
    return {
      required: true,
      message: type,
      trigger: trigger,
    }
  }
  if (type === 'required') {
    return {
      required: true,
      message: rules.message || '请输入 ',
      trigger: trigger,
    }
  }

  // validator: this.validateName,
  if (type === 'pwd') {
    const validateName = (rule, value, callback) => {
      let validFlag = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)
      if (!validFlag) {
        callback(
          new Error(
            rules.message ||
              '密码需由中文、英文、数字、下划线组成，且不能以下划线开头和结尾',
          ),
        )
      } else {
        callback()
      }
    }
    return {
      validator: validateName,
      trigger: trigger,
    }
  }
  if (type === 'number') {
    const validateNumber = (rule, value, callback) => {
      let validFlag = /^[0-9]+$/.test(value)
      if (!validFlag) {
        callback(new Error('请输入数字'))
      } else {
        callback()
      }
    }
    return {
      validator: validateNumber,
      trigger: trigger,
    }
  }
  if (type === 'mobile') {
    const validatePhone = (rule, value, callback) => {
      let validFlag = new RegExp('^[1][0-9]{10}$').test(value)
      if (!validFlag) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    return {
      validator: validatePhone,
      trigger: trigger,
    }
  }
  if (type === 'between') {
    let min = rules.min || 1
    let max = rules.max || 10
    const validateBetween = (rule, value, callback) => {
      let validFlag = /^[0-9]+$/.test(value)
      if (!validFlag) {
        callback(new Error('请输入数字'))
      }
      if (value < min) {
        callback(new Error(`数字不能小于${min}`))
      }
      if (value > max) {
        callback(new Error(`数字不能大于${max}`))
      }
      callback()
    }
    return {
      validator: validateBetween,
      trigger: trigger,
    }
  }
  if (type === 'same') {
    const validateSame = (rule, value, callback) => {
      let isSame = value === rules.value.value
      if (!isSame) {
        const errMessage = rules.message || '密码和确认密码要一致'
        callback(new Error(errMessage))
      }
      callback()
    }
    return {
      validator: validateSame,
      trigger: [blur, trigger],
    }
  }
  if (type === 'length') {
    let min = rules.min ?? 1
    let max = rules.max ?? 5
    return {
      min: min,
      max: max,
      message:
        rules.message || `长度最短为${min}个字符, 长度最大为${max}个字符`,
      trigger: trigger,
    }
  }
  console.error(`校验类型${type}, 不在检验范围内, 请检查`)
}
