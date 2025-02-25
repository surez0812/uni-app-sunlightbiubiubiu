'use strict';
const {
  uniIDCommon
} = require('uni-id-common');

exports.main = async function(event, context) {
  const { action, params } = event;
  const uniIDIns = uniIDCommon.createInstance({
    context
  });
  
  // 登录
  if (action === 'loginByWeixin') {
    const { code } = params;
    return await uniIDIns.loginByWeixin({
      code
    });
  }
  
  return {
    code: 403,
    msg: '非法访问'
  }
} 