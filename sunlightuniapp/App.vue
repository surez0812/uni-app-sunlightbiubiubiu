<script>
	export default {
		onLaunch: async function() {
			console.log('App Launch')
			// 添加请求拦截器
			const db = uniCloud.database();
			db.interceptorAdd('token', {
				invoke({ params }) {
					const token = uni.getStorageSync('uni_id_token');
					if (token) {
						params.uniIdToken = token;
					}
					return params;
				}
			});
			try {
				// 检查是否有生日数据
				const res = await db.collection('user_birthdays')
					.orderBy('create_time', 'desc')
					.limit(1)
					.get();
				
				console.log('查询结果:', res);
				
				if (!res.result || !res.result.data || res.result.data.length === 0) {
					console.log('没有找到生日数据，跳转到生日页面');
					// 没有生日数据，跳转到生日输入页面
					uni.redirectTo({
						url: '/pages/birthday/birthday'
					});
				} else {
					console.log('找到生日数据，跳转到欢迎页面');
					// 有生日数据，跳转到欢迎页面
					uni.redirectTo({
						url: '/pages/welcome/welcome'
					});
				}
			} catch (error) {
				console.error('检查生日数据失败:', error);
				// 发生错误时默认跳转到生日输入页面
				uni.redirectTo({
					url: '/pages/birthday/birthday'
				});
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 每个页面公共css */
	page {
		background-color: #F8F9FA;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
