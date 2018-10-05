module.exports = {
	block: 'page',
	title: 'home',
	favicon: '/favicon.ico',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : '../../node_modules/bootstrap3/dist/css/bootstrap.min.css' },
		{ elem: 'css', url: 'home.min.css' }
	],
	scripts: [
		{ elem : 'js', url : '../../node_modules/jquery/dist/jquery.min.js'},
		{ elem : 'js', url : '../../node_modules/bootstrap3/dist/js/bootstrap.min.js' },
		{ elem: 'js', url: 'home.min.js' }
	],
	mods: { theme: 'islands' },
	content: [
		{
			block:'header',
			tag: 'header',
			content: [
				{
					block: 'top-line',
					content: [
						{
							block: 'container',
							mods: { justify: 'between' },
							content: [
								{
									block: 'clients',
									tag: 'ul',
									content: [
										{
											elem: 'item',
											tag: 'li',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: { 
														elem: 'img', 
														tag: 'img',
														attrs: {
															src: '../../images/client1.png'
														}
													}
												}
											]
										},
										{
											elem: 'item',
											tag: 'li',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: { 
														elem: 'img', 
														tag: 'img',
														attrs: {
															src: '../../images/client2.png'
														}
													}
												}
											]
										},
										{
											elem: 'item',
											tag: 'li',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: { 
														elem: 'img', 
														tag: 'img',
														attrs: {
															src: '../../images/client3.png'
														}
													}
												}
											]
										},
										{
											elem: 'item',
											tag: 'li',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: { 
														elem: 'img', 
														tag: 'img',
														attrs: {
															src: '../../images/client4.png'
														}
													}
												}
											]
										}
									]
								},
								{
									elem: 'wrap',
									content: [
										{
											block: 'address',
											content: [
												{
													elem: 'text',
													tag: 'span',
													content: 'г. Москва, ул. Салтыковская, д. 8, офис 208'
												},
												{
													elem: 'icon',
													tag: 'img',
													attrs: {
														src: '../../images/icons/location.svg'
													}
												}
											]
										},
										{
											block: 'bttn',
											mix: { block: 'top-line', elem: 'button' },
											mods: { orange: true },
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: [
												{
													elem: 'text',
													tag: 'span',
													content: 'Личный кабинет'
												},
												{
													elem: 'icon',
													tag: 'img',
													attrs: {
														src: '../../images/icons/user.svg'
													}
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
					block: 'middle-line',
					content: [
						{
							block: 'container',
							mods: {
								justify: 'between',
								align: 'center'
							},
							mix: { block: 'middle-line', elem: 'container' },
							content: [
								{
									block: 'logo',
									mix: { block: 'header', elem: 'logo' },
									tag: 'img',
									attrs: {
										src: '../../images/logo.svg'
									}
								},
								{
									block: 'search',
									tag: 'form',
									attrs: {
										type: 'POST',
										action: '/'
									},
									content: [
										{
											elem: 'input',
											tag: 'input',
											attrs: {
												name: 'name',
												placeholder: 'Поиск',
												required: true
											}
										},
										{
											elem: 'submit',
											tag: 'button',
											attrs: {
												type: 'submit'
											},
											content: {
												elem: 'icon',
												tag: 'img',
												attrs: {
													src: '../../images/icons/search.svg'
												}
											}
										}
									]
								},
								{
									block: 'mobile',
									content: [
										{
											elem: 'numb',
											content: [
												'+7 999 123 45 89',
												{ tag: 'br' },
												'8 (3432) 336 45 21'
											]
										},
										{
											elem: 'link',
											mix: { block: 'iconed-btn' },
											tag: 'a',
											attrs: {
												href: 'tel:+79991234589'
											},
											content: {
												elem: 'icon',
												tag: 'img',
												attrs: {
													src: '../../images/icons/phone.svg'
												}
											}
										}
									]
								},
								{
									block: 'basket',

									content: [
										{
											elem: 'val',
											content: [
												'4 Товара',
												{ block: 'hr', tag: 'hr' },
												'25 650 руб.'
											]
										},
										{
											elem: 'link',
											mix: { block: 'iconed-btn' },
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: {
												elem: 'icon',
												tag: 'img',
												attrs: {
													src: '../../images/icons/cart.svg'
												}
											}
										}
									]
								},
								{
									block: 'callback',
									mix: { block: 'bordered-btn'},
									tag: 'a',
									attrs: {
										href: '#'
									},
									content: 'Обратный звонок'
								}
							]
						}
					]
				},
				{
					block: 'bottom-line',
					content: [
						{
							block: 'container',
							mix: { block: 'bottom-line', elem: 'container' },
							content: [
								{
									block: 'hamburger',
									mix: { block: 'iconed-btn' },
									tag: 'a',
									attrs: {
										href: '#'
									},
									content: {
										elem: 'icon',
										tag: 'img',
										attrs: {
											src: '../../images/icons/burger.svg'
										}
									}

								},
								{
									block: 'midline-elements'
								},
								{
									block: 'navig',
									tag: 'ul',
									content: [
										{ href: '#', content: 'Главная', mod: 'active' },
										{ href: '#', content: 'Каталог' },
										{ href: '#', content: 'Акции' },
										{ href: '#', content: 'Полезно знать' },
										{ href: '#', content: 'Вопрос-ответ' },
										{ href: '#', content: 'Мы и Партнёры' },
										{ href: '#', content: 'Контакты' }
									].map(function(item){
										return {
											elem: 'item',
											mix: { block: item.mod }, 
											tag: 'li',
											content: {
												elem: 'link',
												tag: 'a',
												attrs: {
													href: item.href
												},
												content: item.content
											}
										}
									})
								}
							]
						}
					]
				},
				{
					block: 'mobile-botline',
					content: [
						{
							block: 'container',
							mix: { block: 'mobile-botline', elem: 'container' },
							content: [
								{
									block: 'tel-line',
									content: [
										{
											elem: 'number',
											tag: 'a',
											attrs: {
												href: 'tel:834323364521'
											},
											content: '8 (3432) 336 45 21'
										},
										{
											elem: 'number',
											tag: 'a',
											attrs: {
												href: 'tel:+79991234589'
											},
											content: '+7 999 123 45 89'
										}
									]
								},
								{
									block: 'btn-line',
									content: [
										{
											block: 'hamburger',
											mix: [{ block: 'btn-line', elem: 'iconed-btn' }, { block: 'iconed-btn' }],
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: [
												{
													elem: 'icon',
													tag: 'img',
													attrs: {
														src: '../../images/icons/burger.svg'
													}
												},
												{
													elem: 'text',
													tag: 'span',
													content: 'Меню'
												}
											]
										},
										{
											block: 'search-btn',
											mix: [{ block: 'btn-line', elem: 'iconed-btn' }, { block: 'iconed-btn' }],
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: {
												elem: 'icon',
												tag: 'img',
												attrs: {
													src: '../../images/icons/search_or.svg'
												}
											}
										},
										{
											block: 'basket-btn',
											mix: [{ block: 'btn-line', elem: 'iconed-btn' }, { block: 'iconed-btn' }],
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: {
												elem: 'icon',
												tag: 'img',
												attrs: {
													src: '../../images/icons/cart.svg'
												}
											}
										},
									]
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'services',
			tag: 'section',
			content: [
				{
					block: 'container',
					content: [
						{
							block: 'row',
							content: [
								{
									block: 'col-xl-4',
									mix: [
										{ block: 'col-lg-4' },
										{ block: 'col-md-4' },
										{ block: 'col-sm-4' },
										{ block: 'col-xs-12' }
									],
									content: [
										{
											block: 'service',
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: [
												{
													elem: 'title',
													tag: 'span',
													content: 'Привилегии клиенту'
												},
												{
													elem: 'icon',
													tag: 'img',
													attrs: {
														src: '../../images/privilege.svg',
														alt: 'icon'
													}
												}
											]
										}
									]
								},
								{
									block: 'col-xl-4',
									mix: [
										{ block: 'col-lg-4' },
										{ block: 'col-md-4' },
										{ block: 'col-sm-4' },
										{ block: 'col-xs-12' }
									],
									content: [
										{
											block: 'service',
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: [
												{
													elem: 'title',
													tag: 'span',
													content: 'Статус депозита'
												},
												{
													elem: 'icon',
													tag: 'img',
													attrs: {
														src: '../../images/deposit.svg',
														alt: 'icon'
													}
												}
											]
										}
									]
								},
								{
									block: 'col-xl-4',
									mix: [
										{ block: 'col-lg-4' },
										{ block: 'col-md-4' },
										{ block: 'col-sm-4' },
										{ block: 'col-xs-12' }
									],
									content: [
										{
											block: 'service',
											mods: { last: true },
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: [
												{
													elem: 'title',
													tag: 'span',
													content: 'Составить счёт on-line'
												},
												{
													elem: 'icon',
													tag: 'img',
													attrs: {
														src: '../../images/calculation.svg',
														alt: 'icon'
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
		},
		{
			block: 'products',
			tag: 'section',
			content: [
				{
					block: 'container',
					mods: { justify: 'between', padding: true },
					content: [
						{
							block: 'class-n-spec',
							content: [
								{
									block: 'divide-title',
									content: 'Класс товара'
								},
								{
									block: 'links-nav',
									mods: { sticked: true},
									tag: 'ul',
									content: [
										{href: '#', content: 'Бизнес', stick: 'is'},
										{href: '#', content: 'Премиум', stick: 'is'},
										{href: '#', content: 'Эконом'}
									].map(function(item){
										return [
											{
												elem: 'item',
												tag: 'li',
												content: {
													elem: 'link',
													tag: 'a',
													attrs: {
														href: item.href
													},
													content: item.content
												}
											},
											{
												block: 'stick',
												mix: { block: item.stick }
											}
										]
									})
								},
								{
									block: 'select',
									mix: { block: 'links-nav', elem: 'mobile' },
									mods: {
										mode: 'radio',
										theme: 'islands',
										size: 'l'
									},
									name: 'select1',
									val: 1,
									options: [
										{
											val: 1,
											text: 'Бизнес'
										},
										{
											val: 2,
											text: 'Премиум'
										},
										{
											val: 3,
											text: 'Эконом'
										}
									]
								},
								{
									block: 'divide-title',
									content: 'Готовые спецификации'
								},
								{
									block: 'links-nav',
									mods: { sticked: true },
									tag: 'ul',
									content: [
										{href: '#', content: 'Коттедж', stick: 'is'},
										{href: '#', content: 'Квартира', stick: 'is'},
										{href: '#', content: 'Объект', stick: 'is'},
										{href: '#', content: 'Наш эксклюзив'}
									].map(function(item){
										return [
											{
												elem: 'item',
												tag: 'li',
												content: {
													elem: 'link',
													tag: 'a',
													attrs: {
														href: item.href
													},
													content: item.content
												}
											},
											{
												block: 'stick',
												mix: { block: item.stick }
											}
										]
									})
								},
								{
									block: 'select',
									mix: { block: 'links-nav', elem: 'mobile' },
									mods: {
										mode: 'radio',
										theme: 'islands',
										size: 'l'
									},
									name: 'select1',
									val: 1,
									options: [
										{
											val: 1,
											text: 'Коттедж'
										},
										{
											val: 2,
											text: 'Квартира'
										},
										{
											val: 3,
											text: 'Объект'
										},
										{
											val: 4,
											text: 'Наш эксклюзив'
										}
									]
								},
							]
						},
						{
							block: 'picking',
							content: [
								{
									block: 'divide-title',
									content: 'Подбор товаров и услуг'
								},
								{
									block: 'products-picking',
									content: [
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' },
										{ title: 'Защите цепей', text: 'Краткая аннотация автоматические выключатели' }
									].map(function(item){
										return {
											block: 'product',
											content: [
												{
													elem: 'title',
													tag: 'span',
													content: item.title
												},
												{
													elem: 'text',
													tag: 'p',
													content: item.text
												},
												{
													elem: 'link',
													tag: 'a',
													attrs: {
														href: '#'
													},
													content: 'Подробнее'
												}
											]
										}
									})
								}
							]
						},
						{
							block: 'order-n-ship',
							content: [
								{
									block: 'divide-title',
									content: 'Заказать'
								},
								{
									block: 'links-nav',
									mods: { not: 'dd' },
									tag: 'ul',
									content: [
										{href: '#', content: 'Бизнес'},
										{href: '#', content: 'Премиум'},
										{href: '#', content: 'Эконом'}
									].map(function(item){
										return {
											elem: 'item',
											tag: 'li',
											content: {
												elem: 'link',
												tag: 'a',
												attrs: {
													href: item.href
												},
												content: item.content
											}
										}
									})
								},
								{
									block: 'delivery',
									content: [
										{
											block: 'delivery-lg',
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: [
												{
													elem: 'title',
													tag: 'span',
													content: 'Доставка за 6 часов'
												},
												{
													elem: 'text',
													tag: 'p',
													content: 'Закажите у нас Express доставку и получите свой заказ в течении 6 часов'
												},
												{
													elem: 'img',
													tag: 'img',
													attrs: {
														src: '../../images/Gazel.png'
													}
												}
											]
										},
										{
											block: 'delivery-sm',
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: [
												{
													elem: 'title',
													tag: 'span',
													content: 'Доставка за 12 часов'
												}
											]
										},
										{
											block: 'delivery-sm',
											tag: 'a',
											attrs: {
												href: '#'
											},
											content: [
												{
													elem: 'title',
													tag: 'span',
													content: 'Доставка за 24 часов'
												}
											]
										}
									]
								}
							]
						},
						{
							block: 'protecting',
							content: [
								{
									block: 'divide-title',
									content: 'Защита цепей'
								},
								{
									block: 'protect-catalog',
									content: [
										{
											block: 'cat-nav',
											content: [
												{
													block: 'numbering',
													content: [
														{
															elem: 'arr',
															elemMods: { prev: true },
															content: { tag: 'span' }
														},
														{
															elem: 'nums',
															tag: 'ul',
															content: [
																{ elem: 'num', tag: 'li', content: '1' },
																{ 
																	elem: 'num', 
																	elemMods: { current: true }, 
																	tag: 'li', 
																	content: '2' 
																},
																{ elem: 'num', tag: 'li', content: '3' },
																{ elem: 'num', tag: 'li', content: '4' },
																{ elem: 'num', tag: 'li', content: '5' }
															]
														},
														{
															elem: 'arr',
															elemMods: { next: true },
															content: { tag: 'span' }
														},
													]
												},
												{
													block: 'bttn',
													mix: { block: 'cat-nav', elem: 'bttn' },
													mods: { orange: true },
													tag: 'a',
													attrs: {
														href: '#'
													},
													content: [
														{
															elem: 'text',
															tag: 'span',
															content: 'Заказать весь комплект'
														},
														{
															elem: 'icon',
															tag: 'img',
															attrs: {
																src: '../../images/icons/cart--white.svg'
															}
														}
													]
												}
											]
										},
										{
											block: 'protect-list',
											tag: 'ul',
											content: [
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												},
												{ 
													href: '#',
													title: 'Воздушные автоматические выключатели Susol ACB',
													yea: true,
													nay: false,
													cost: '1250 руб.',
													orderHref: '#'
												}
											].map(function(item){
												return {
													block: 'protect-item',
													tag: 'li',
													content: [
														{
															elem: 'info',
															content: [
																{
																	elem: 'img',
																	tag: 'img',
																	attrs: {
																		src: '../../images/tovar.png'
																	}
																},
																{
																	elem: 'title',
																	tag: 'a',
																	attrs: {
																		href: item.href
																	},
																	content: item.title
																},
															]
														},
														{
															elem: 'order',
															content: [
																{
																	block: 'availability',
																	content: [
																		{
																			elem: 'yeanay',
																			elemMods: { plus: item.yea },
																			content: [
																				{
																					elem: 'icon',
																					tag: 'img',
																					attrs: {
																						src: '../../images/yea.png'
																					}
																				},
																				{
																					elem: 'text',
																					mix: { block: 'yea', elem: 'text'},
																					content: 'В наличии'
																				}
																			]
																		},
																		{
																			elem: 'yeanay',
																			elemMods: { plus: item.nay },
																			content: [
																				{
																					elem: 'icon',
																					tag: 'img',
																					attrs: {
																						src: '../../images/nay.png'
																					}
																				},
																				{
																					elem: 'text',
																					mix: { block: 'nay', elem: 'text'},
																					content: 'Нет в наличии'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'cost',
																	tag: 'span',
																	content: item.cost
																},
																{
																	block: 'bttn',
																	mix: { block: 'protect-item', elem: 'bttn' },
																	mods: { white: true },
																	tag: 'a',
																	attrs: {
																		href: item.orderHref
																	},
																	content: [
																		{
																			elem: 'text',
																			tag: 'span',
																			content: 'В комплект'
																		},
																		{
																			elem: 'icon',
																			tag: 'img',
																			attrs: {
																				src: '../../images/icons/cart.svg'
																			}
																		}
																	]
																}
															]
														},
														{
															block: 'mobile-order',
															content: [
																{
																	elem: 'head',
																	content: [
																		{
																			elem: 'title',
																			tag: 'span',
																			content: 'Подробнее'
																		},
																		{
																			elem: 'arr',
																			tag: 'span'
																		}
																	]
																},
																{
																	elem: 'slide',
																	content: [
																		{
																			elem: 'middle',
																			content: []
																		},
																		{
																			elem: 'bottom',
																			content: []
																		}
																	]
																}
															]
														}
													]
												}
											})
										},
										{
											block: 'cat-nav',
											mods: { bot: true },
											content: [
												{
													block: 'numbering',
													content: [
														{
															elem: 'arr',
															elemMods: { prev: true },
															content: { tag: 'span' }
														},
														{
															elem: 'nums',
															tag: 'ul',
															content: [
																{ elem: 'num', tag: 'li', content: '1' },
																{ 
																	elem: 'num', 
																	elemMods: { current: true }, 
																	tag: 'li', 
																	content: '2' 
																},
																{ elem: 'num', tag: 'li', content: '3' },
																{ elem: 'num', tag: 'li', content: '4' },
																{ elem: 'num', tag: 'li', content: '5' }
															]
														},
														{
															elem: 'arr',
															elemMods: { next: true },
															content: { tag: 'span' }
														},
													]
												},
												{
													block: 'bttn',
													mix: { block: 'cat-nav', elem: 'bttn' },
													mods: { orange: true },
													tag: 'a',
													attrs: {
														href: '#'
													},
													content: [
														{
															elem: 'text',
															tag: 'span',
															content: 'Заказать весь комплект'
														},
														{
															elem: 'icon',
															tag: 'img',
															attrs: {
																src: '../../images/icons/cart--white.svg'
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
		}
	]
};
