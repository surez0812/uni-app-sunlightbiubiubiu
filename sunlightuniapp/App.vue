<script>
	export default {
		onLaunch: function() {
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
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
