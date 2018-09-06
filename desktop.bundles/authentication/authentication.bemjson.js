module.exports = {
		block : 'page',
		title : 'Аутентификация',
		head : [
			{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
			{ elem : 'css', url : 'authentication.min.css' }
		],
		scripts : [
			{ elem : 'js', url : '//code.jquery.com/jquery-3.3.1.min.js' },
			{ elem : 'js', url : 'authentication.min.js' }

		],
			mods: { theme: 'islands', white: true },
			content : [
			{
				block: 'header',
				mods: { mb: '30' },
				tag: 'header',
				content: [
					{
						block: 'content',
						mods: { wrap: 'wrap', items: 'center' },
						content: [
							{
								block: 'logo',
								mix: { block: 'header', elem: 'logo' },
								tag: 'a',
								attrs: {
									href: '/'
								},
								content: {
									elem: 'image',
									tag: 'img',
									attrs: {
										src: '../../images/pumpkin.png'
									}
								}
							},
							{
								block: 'search',
								mix: { block: 'header', elem: 'search'},
								content: [
									{
										elem: 'search-form',
										tag: 'form',
										attrs: {
											action: '',
											method: ''
										},
										content: [
											{
												elem: 'button',
												tag: 'button'
											},
											{
												elem: 'input',
												tag: 'input',
												attrs: {
													type: 'text',
													name: 'search',
													placeholder: 'Search'
												}
											}
										]
									}
								]
							},
							{
								block: 'links',
								mix: { block: 'header', elem: 'links' },
								content: [
									{
										elem: 'link',
										tag: 'a',
										attrs: {
											href: '#'
										},
										content: 'Добавить  рецепт'
									},
									{
										elem: 'link',
										tag: 'a',
										attrs: {
											href: '#'
										},
										content: 'Мои рецепты'
									},
									{
										block: 'bell',
										mix: { block: 'links', elem: 'link' },
										tag: 'a',
										attrs: {
											href: '#'
										},
										content: { elem: 'received', elemMods: { active: true }, content: '2' }
									},
									{
										block: 'email',
										mix: { block: 'links', elem: 'link' },
										mods: { active: true },
										tag: 'a',
										attrs: {
											href: '#'
										},
										content: { elem: 'received',elemMods: { active: true }, content: '1' }
									},
									{
										block: 'personal-area',
										content: [ 
											{
												elem: 'link',
												tag: 'a',
												attrs: {
													href: '#'
												},
												content: 'Личный кабинет'
											},
											{
												block: 'rating',
												content: [
													{
														elem: 'title',
														tag: 'span',
														content: 'Ваш рейтинг: '
													},
													{
														block: 'stars',
														mix: { block: 'rating', elem: 'stars' },
														attrs: {
															dataContent: '★★★★★'
														},
														content: [
															{
																elem: 'active',
																attrs: {
																	dataContent: '★★★★★'
																}
														
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				block: 'space-between',
				content: [
					{
						block: 'back',
						tag: 'a',
						attrs: { href: '#' }
					},
					{
						block: 'close',
						tag: 'a',
						attrs: { href: '#' }
					}
				]
			},
			{
				block: 'auth',
				tag: 'section',
				content: [
					{
						block: 'title',
						mix: { block: 'auth', elem: 'title' },
						mods: { center: true },
						content: 'Войдите на сайт'
					},
					{
						elem: 'number',
						content: '+7 (913) 678-45-17'
					},
					{
						block: 'sign',
						mix: { block: 'auth', elem: 'sign' },
						content: [
							{
								block: 'sign-form',
								tag: 'form',
								content: [
									{
										elem: 'input',
										mix: { block: 'auth', elem: 'input' },
										tag: 'input',
										attrs: {
											type: 'text',
											name: 'sms-code',
											placeholder: 'Код из СМС',
											required: true
										}
									}
								]
							},
							{
								block: 'retry',
								tag: 'a',
								attrs: {
									href: '#'
								},
								content: [
									{
										elem: 'img'
									},
									{
										elem: 'text',
										tag: 'span',
										content: 'Отправить еще раз'
									}
								]
							},
							{
								block: 'caption',
								mix: { block: 'auth', elem: 'caption' },
								content: [
									'Мы отправили вам SMS с кодом.',
									{ tag: 'br' },
									'Пожалуйста, введите его в поле выше'
								]
							},
							{
								block: 'networks-login',
								mix: { block: 'auth', elem: 'networks-login' },
								content: [
									{
										elem: 'item',
										mix: { block: 'vk-login' },
										tag: 'a',
										attrs: {
											href: '#'
										}
									},
									{
										elem: 'item',
										mix: { block: 'fb-login' },
										tag: 'a',
										attrs: {
											href: '#'
										}
									}
								]
							}
						]
					}
				]
			}
		]
};