<template>
	<view class="content">
		<view v-if="!hasLogin">
			<button type="primary" @click="login">微信登录</button>
		</view>
		<view v-else>
			<text>欢迎回来</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hasLogin: false
			}
		},
		onLoad() {
			// 检查登录状态
			this.checkLoginStatus();
		},
		methods: {
			async checkLoginStatus() {
				const token = uni.getStorageSync('uni_id_token');
				const tokenExpired = uni.getStorageSync('uni_id_token_expired');
				
				if (token && tokenExpired > Date.now()) {
					this.hasLogin = true;
				} else {
					// token不存在或已过期
					this.hasLogin = false;
				}
			},
			
			async login() {
				try {
					// 获取微信登录code
					const loginResult = await new Promise((resolve, reject) => {
						uni.login({
							provider: 'weixin',
							success: (res) => resolve(res),
							fail: (err) => reject(err)
						});
					});
					
					if (!loginResult.code) {
						throw new Error('微信登录失败');
					}
					
					// 获取uni-id-co云对象的引用
					const uniIdCo = uniCloud.importObject('uni-id-co');
					
					// 调用loginByWeixin方法
					const result = await uniIdCo.loginByWeixin({
						code: loginResult.code
					});
					
					if (result.code === 0) {
						// 登录成功
						uni.setStorageSync('uni_id_token', result.token);
						uni.setStorageSync('uni_id_token_expired', result.tokenExpired);
						this.hasLogin = true;
						
						// 检查是否需要录入生日
						this.checkBirthday();
					} else {
						uni.showToast({
							title: result.message || '登录失败',
							icon: 'none'
						});
					}
				} catch (e) {
					console.error(e);
					uni.showToast({
						title: '登录失败',
						icon: 'none'
					});
				}
			},
			
			async checkBirthday() {
				try {
					const db = uniCloud.database();
					const { result } = await db.collection('user_info')
						.orderBy('create_date', 'desc')
						.limit(1)
						.get();
					
					if (!result.data.length) {
						// 未录入生日，跳转到生日录入页面
						uni.navigateTo({
							url: '/pages/birthday/birthday'
						});
					} else {
						// 已录入生日，跳转到欢迎页面
						uni.navigateTo({
							url: '/pages/welcome/welcome'
						});
					}
				} catch (e) {
					console.error(e);
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}
</style>
