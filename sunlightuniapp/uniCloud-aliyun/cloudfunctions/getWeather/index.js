'use strict';

// 使用和风天气API
const WEATHER_API_KEY = '1a01931f2e304d31a718c22b90905a3b';
const WEATHER_API_BASE = 'https://devapi.qweather.com/v7';

// 默认北京位置
const defaultLocation = {
  longitude: 116.3972282409668,
  latitude: 39.90960456049752,
  city: '北京市'
};

exports.main = async (event, context) => {
  let location = event;
  
  // 如果没有位置信息，使用默认的北京位置
  if (!location || !location.longitude || !location.latitude) {
    console.log('使用默认北京位置信息');
    location = defaultLocation;
  }
  
  try {
    // 和风天气API要求location参数格式为"经度,纬度"
    const locationParam = `${location.longitude.toFixed(2)},${location.latitude.toFixed(2)}`;
    
    // 构建请求URL
    const url = `${WEATHER_API_BASE}/weather/now?key=${WEATHER_API_KEY}&location=${locationParam}`;
    
    console.log('请求URL:', url);
    
    // 使用 uniCloud.httpclient.request 发送请求
    const response = await uniCloud.httpclient.request(url, {
      method: 'GET',
      dataType: 'json',
      timeout: 10000  // 设置10秒超时
    });
    
    console.log('天气API原始响应:', JSON.stringify(response));
    
    // 检查响应状态
    if (!response.data) {
      throw new Error('天气API响应数据为空');
    }
    
    const data = response.data;
    console.log('天气API响应数据:', JSON.stringify(data));
    
    // 检查响应码
    if (!data.code) {
      throw new Error('天气API响应格式错误: 缺少状态码');
    }
    
    if (data.code === '200') {
      // 检查天气数据完整性
      if (!data.now) {
        throw new Error('天气API响应格式错误: 缺少天气数据');
      }
      
      return {
        success: true,
        now: {
          temp: data.now.temp || '0',
          text: data.now.text || '未知',
          windDir: data.now.windDir || '无风向',
          windScale: data.now.windScale || '0',
          humidity: data.now.humidity || '0'
        },
        location: {
          city: location.city || '北京市',
          longitude: location.longitude,
          latitude: location.latitude
        }
      };
    } else {
      throw new Error(`天气API返回错误: 状态码 ${data.code} - ${data.message || '未知错误'}`);
    }
  } catch (error) {
    console.error('获取天气数据失败:', error);
    return {
      success: false,
      error: error.message || '获取天气数据失败'
    };
  }
};
