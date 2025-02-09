import {type IPriceTable, type IService} from "~/types/client";

export const services: IService[] = [

    {
        id: "protect",
        title: "Защитные покрытия",
        description: ` 
			<section>
				<p>
					Обеспечьте ваш автомобиль надежной защитой от косметических дефектов и
					внешних воздействий с помощью качественных защитных покрытий. Они
					предохраняют от потускнения, коррозии и мелких повреждений, гарантируя
					сохранность автомобиля в любых погодных условиях.
				</p>
				<p>
					Вы можете выбрать Кварцевое, Жидкое стекло или Керамическое покрытие
					для обеспечения долговечности и великолепного внешнего вида вашего
					автомобиля.
				</p>
				<ul>
					<li>
						<strong>Кварцевое Покрытие:</strong> Защищает от мелких царапин и
						УФ-лучей, сохраняя блеск и цвет кузова.
					</li>
					<li>
						<strong>Жидкое Стекло:</strong> Создаёт зеркальный эффект и защищает
						от внешних воздействий, помогая сохранить оригинальный цвет кузова.
					</li>
					<li>
						<strong>Керамическое Покрытие:</strong> Предлагает защиту от царапин
						и загрязнений, придавая автомобилю глубокий глянцевый вид.
					</li>
				</ul>
				<p>
					Эти покрытия эффективно улучшают внешний вид и сохраняют состояние
					вашего автомобиля, обеспечивая его непревзойдённой защитой.
				</p>
			</section>
		`,
        time: "1 день",
        type: "body",
        position: 1,
        img: "/services/protect.webp",
        price: {
            text: "от 1 000 ₽",
            value: 1000,
        },
        photos: ["/protect.webp"],
    },
    {
        id: "wash",
        title: "Детейлинг мойка автомобиля",
        description: ` 
			<section>
				<p>
					<strong>
						Откройте для себя превосходство Трехфазной мойки - идеальный способ ухода за вашим автомобилем.
					</strong>
				</p>
				<p>
					Наша уникальная методика трехэтапной мойки обеспечивает безупречную чистоту и блеск вашего автомобиля. Начинаем мы с предварительной мойки, чтобы аккуратно удалить крупные загрязнения, затем переходим к основной мойке для тщательного устранения статических частиц и грязи. Завершающий этап - нанесение консерванта (жидкий воск), который предоставляет не только блеск, но и защиту.
				</p>
				<p>
					Мы также тщательно удаляем битумные пятна и металлические вкрапления с кузова, обеспечивая его безупречное состояние.
				</p>
				<p>
					Ваша полная удовлетворенность гарантирована, поскольку в стоимость также включена комплексная уборка салона, очистка стеклянных поверхностей и зеркал, превращая ваш автомобиль в идеально чистый и сияющий.
				</p>
			</section>
		`,
        time: "3-4 часа",
        type: "body",
        position: 5,
        img: "/services/wash.webp",
        price: {
            text: "5 000 - 8 000 ₽",
            value: 5000,
        },
        photos: [
            "/wash/1.webp",
            "/wash/2.webp",
            "/wash/3.webp",
            "/wash/4.webp",
        ],
    },
    // {
    //     id: "polish",
    //     title: "Полировка кузова",
    //     description: `
    // 		<section>
    // 			<p>
    // 				<strong>У нас доступны два типа полировок:</strong>
    // 			</p>
    // 			<br/>
    // 			<p>
    // 				<strong>Легкая полировка:</strong> Эта услуга идеально подходит для устранения мелких и средних царапин, восстанавливая блеск и яркость цвета вашего автомобиля. Мы аккуратно обрабатываем поверхность, сохраняя оригинальное покрытие в идеальном состоянии.
    // 			</p>
    // 			<p>
    // 				<strong>Глубокая полировка:</strong> Полный комплекс восстановительных работ, включая удаление всех царапин с кузова, демонтаж дверных ручек для детальной обработки, полировку порогов и зоны погрузки, а также подкраску сколов. Эта процедура возвращает автомобилю его роскошный вид, придавая глубокий и насыщенный цвет кузову.
    // 			</p>
    //
    // 			<p>Наша команда специалистов применяет передовые методы и качественные материалы для достижения лучшего результата.</p>
    // 		</section>
    // 	`,
    //     time: "2 дня",
    //     type: "body",
    //     position: 8,
    //     img: "/uploads/cd115c47-77ca-49e6-969f-f1d1082c9944.webp",
    //     price: {
    //         text: "8 000 - 18 000 ₽",
    //         value: 8000,
    //     },
    //     photos: [
    //         "/uploads/292b42cd-0ba4-40e8-9434-a46384b8608c.webp",
    //         "/uploads/1afc87af-bcce-4ecb-846e-c26ef7157563.webp",
    //         "/uploads/398ee0fd-98f2-4f2e-9192-263634094c23.webp",
    //         "/uploads/2da1623f-0c0a-4686-92ea-957b3ed86415.webp",
    //         "/uploads/ae7de000-343e-4a0f-a416-c5e8eb2a9115.webp",
    //     ],
    // },
    {
        id: "windows-polish",
        title: "Полировка стёкол",
        description: `
			<section>
				<p>
					Столкнулись с проблемой зацарапанных или потерявших прозрачность стекол вашего автомобиля? Наша команда профессионалов готова восстановить их исходное состояние. Мы тщательно удаляем все повреждения, возвращая стеклам чистоту и прозрачность.
				</p>
				<p>
					Благодаря строгому соблюдению процесса шлифовки, мы гарантируем отсутствие бликов и линз на стеклах после полировки. Наша цель - обеспечить вам идеально чистое и ясное стекло.
				</p>
				<p>
					Мы обязуемся предоставлять высококачественные результаты, соответствующие самым строгим стандартам.
				</p>
			</section>
		`,
        time: "1-2 часа",
        type: "body",
        position: 7,
        img: "/uploads/4b01a316-c43e-43d7-953a-018d17a52158.webp",
        price: {
            text: "от 1 500 ₽",
            value: 1500,
        },
        photos: [
            "/windows-polish/1.JPG",
            "/windows-polish/2.jpeg",
        ],
    },
    {
        id: "engine-wash",
        title: "Мойка подкапотного пространства",
        description: ` 
			<section>
				<p>
					Наша услуга мойки подкапотного пространства — это не просто уборка, это забота о каждой детали вашего автомобиля. Она идеально подходит для владельцев автомобилей с теплонагруженными двигателями, а также для тех, кто стремится к максимальной чистоте и порядку во всех уголках своего автомобиля.
				</p>
				<p>
					Мы начинаем с демонтажа бампера и радиатора, чтобы обеспечить доступ ко всем труднодоступным местам. Затем следует тщательная очистка каждого компонента, удаление грязи, масла, и других загрязнений, которые могут накапливаться со временем.
				</p>
				<p>
					После мойки все элементы аккуратно консервируются, что не только придаёт блеск, но и защищает от коррозии и других повреждений. Такой уход продлевает срок службы всех механизмов и улучшает общее состояние автомобиля.
				</p>
				<p>В результате, ваш автомобиль будет не только идеально чистым снаружи, но и тщательно ухоженным внутри, что гарантирует его безупречный вид и долговечность.</p>
			</section>

		`,
        time: "2 часа",
        type: "body",
        position: 12,
        img: "/uploads/ef9d2c5c-a39b-4b00-926e-eb04d7ebb72a.webp",
        price: {
            text: "3 000 - 10 000 ₽",
            value: 3000,
        },
        photos: [
            "/engine-wash/1.jpeg",
            "/engine-wash/2.jpeg",
            "/engine-wash/3.JPG",
        ],
    },
    {
        id: "dry-salon",
        title: "Комплексная химчистка салона",
        description: ` 
			<section>
				<section>
					<p>
						Наша услуга комплексной химчистки салона обеспечивает глубокую очистку каждой части вашего автомобиля, начиная с потолочной обивки и заканчивая напольными ковриками. Мы тщательно очищаем все поверхности, достигая идеальной чистоты и свежести.
					</p>
					<p>
						После завершения чистки, салон обрабатывается специальными защитными составами, продлевающими чистоту и свежесть.
					</p>
					<p>
						Услуга предусматривает варианты как с демонтажем большинства элементов салона, так и более поверхностную чистку с фокусировкой на определённые зоны по запросу владельца.
					</p>
				</section>
			</section>
		`,
        time: "6 часов",
        type: "salon",
        position: 9,
        img: "/dry-salon/1.webp",
        price: {
            text: "от 8 000 ₽",
            value: 8000,
        },
        photos: [
            "/dry-salon/1.webp",
            "/dry-salon/2.webp",

        ],
    },
    {
        id: "light-armor",
        title: "Оклейка фар защитной пленкой",
        description: ` 
			<section>
				<p>
					Защитите фары вашего автомобиля от повреждений полиуретановой
					пленкой. Мы используем высококачественные материалы, которые
					гарантируют долговечность и не влияют на светопроницаемость фар.
				</p>
				<p>
					Процесс включает тщательную подготовку и полировку фар, гарантируя
					отличное прилегание пленки и защиту от царапин, сколов и помутнения.
					Наши специалисты обеспечивают качественную и точную оклейку.
				</p>
				<p>
					<strong>
						Выберите All Star Detailing для надежной защиты фар вашего авто.
					</strong>
				</p>

			</section>
		`,
        time: "1 час",
        type: "body",
        position: 2,
        img: "/services/light-armor.jpeg",
        price: {
            text: "5 000 ₽",
            value: 5000,
        },
        photos: [
            "/light-armor/1.webp",
            "/light-armor/2.webp",
            "/light-armor/3.webp",
        ],
    },
    {
        id: "noise-isalation",
        title: "Шумоизоляция и виброизоляция",
        description: ` 
			<section>
				<p>
					Наша услуга шумо- и виброизоляции автомобиля — это не просто улучшение комфорта вождения, это повышение качества вашего автоопыта. Этот специальный процесс значительно снижает уровень внешнего шума и вибраций, улучшая ощущения от вождения и превращая поездки в более приятное и спокойное времяпрепровождение.
				</p>
				<p>
					Шумоизоляция также значительно улучшает звучание музыки в автомобиле, делая акустику более чистой и выразительной. Это особенно заметно при прослушивании музыки на высоких скоростях или в шумных условиях.
				</p>
				<p>
					Кроме того, правильно выполненная шумо- и виброизоляция помогает защитить ваш автомобиль от коррозии, продлевая его срок службы и сохраняя внешний вид.
				</p>
			</section>
		`,
        time: "1 день",
        type: "salon",
        position: 10,
        img: "/uploads/7813072f-e67c-4afd-ac9f-ad14eac0ed08.webp",
        price: {
            text: "от 3 000 ₽",
            value: 3000,
        },
        photos: ["/services/noise-isalation.jpg"],
    },
    // {
    //     id: "carwrapping",
    //     title: "Оклейка плёнкой",
    //     description: `
    // 		<section>
    // 			<p>
    // 				Уберегите ваш автомобиль от повреждений с помощью высококачественной защитной пленки. В All Star Detailing мы понимаем, насколько важно защитить кузов автомобиля от царапин и сколов, которые могут вызвать ржавчину и снизить его стоимость.
    // 			</p>
    // 			<p>
    // 				Мы используем только лучшие пленки от известных производителей, гарантируя прозрачное, глянцевое покрытие, которое идеально прилегает к кузову вашего автомобиля. Наша пленка устойчива к температурным перепадам и механическим повреждениям, обеспечивая защиту в любых условиях.
    // 			</p>
    // 			<p>
    // 				Процесс нанесения пленки включает тщательную подготовку, точный раскрой и аккуратное нанесение, занимая около 10 часов. Мы соблюдаем строгие стандарты качества для достижения идеального результата.
    // 			</p>
    // 			<p>
    // 				Следуйте нашим рекомендациям по уходу за пленкой, чтобы обеспечить её долговечность и сохранить защитные свойства на длительный срок.
    // 			</p>
    // 			<p>
    // 				<strong>Выберите All Star Detailing для надежной защиты вашего автомобиля.</strong>
    // 			</p>
    // 		</section>
    // 	`,
    //     time: "от 1 часа",
    //     type: "body",
    //     position: 4,
    //     img: "/uploads/573c26fc-5d9b-45cb-954a-76e3db21cfc2.webp",
    //     price: {
    //         text: "от 1 000 ₽",
    //         value: 1000,
    //     },
    //     photos: [
    //         "/uploads/8968a2a8-33ce-4f51-b7f0-63a5e12a7117.webp",
    //         "/uploads/c5495ae7-d5dc-47ce-990d-cd6cf487ab67.webp",
    //         "/uploads/1c874ce8-e1ef-4635-b954-a039daf65d5e.webp",
    //         "/uploads/1a04d6bc-3a28-4361-b6ab-b8166858eb7b.webp",
    //         "/uploads/7fad2e76-4257-4e51-842f-9f03284e9e9f.webp",
    //         "/uploads/ed0a0439-f908-425b-854e-42188bf105fa.webp",
    //     ],
    // },
    {
        id: "delivery",
        title: "Доставка автомобиля ",
        description: ` 
			<section>
				<p>
					Если у вас не много свободного времени, мы предлагаем услугу доставки вашего автомобиля до нашей студии и обратно после выполнения работ. Наша цель — максимальное удобство для вас.
				</p>
				<p>
					Мы сотрудничаем с несколькими надежными частными эвакуаторами и крупной компанией, предоставляющей услуги помощи на дорогах, для гарантированной безопасной и своевременной доставки вашего автомобиля.
				</p>
			</section>
		`,
        time: "3 часа",
        type: "complexes",
        position: 999,
        img: "/services/delivery.jpeg",
        price: {
            text: "от 5 000 ₽",
            value: 5000,
        },
        photos: ["/services/delivery.jpeg"],
    },
    {
        id: "toner",
        title: "Тонировка",
        description: `
			<section>
				<p>Почему выбирают тонированные стёкла: Ключевые преимущества для вас и вашего автомобиля</p>
				<ul>
					<li><strong>Элегантность и Стиль:</strong> Тонированные стёкла превращают ваш автомобиль в предмет восхищения, придавая ему уникальный и выразительный внешний вид. Это не просто улучшение стиля, это заявление о вашем вкусе и статусе.</li>
					<li><strong>Защита от солнечных лучей:</strong> Забота о сохранности интерьера вашего автомобиля никогда не была проще. Тонировка эффективно блокирует ультрафиолетовые лучи, предотвращая выцветание обивки и сохраняя её как новую.</li>
					<li><strong>Повышенная Приватность и Безопасность:</strong> Тонированные стёкла не только скрывают ваш личный пространств и ценные вещи от посторонних глаз, но и предохраняют стёкла от разлёта в случае ДТП, обеспечивая дополнительную защиту для вас и ваших пассажиров.</li>
					<li><strong>Комфорт и Экономия:</strong> С тонированными стёклами ваш автомобиль остаётся прохладнее в жаркую погоду, что уменьшает нагрузку на кондиционер и снижает расход топлива. Зимой же они способствуют сохранению тепла внутри салона, что увеличивает комфорт и снижает затраты на отопление.</li>
				</ul>
				<p>Выбор тонированных стёкол - это не просто улучшение внешнего вида вашего автомобиля, это инвестиция в комфорт, безопасность и сохранность вашего транспортного средства. Откройте для себя эти преимущества уже сегодня.</p>
			</section>
		`,
        position: 11,
        img: "/uploads/52464635-c5bd-451c-8dca-056b7720c7d1.webp",
        price: {
            text: "от 1 000 ₽",
            value: 1000,
        },
        photos: ["/uploads/75b1ea26-814a-4958-ae64-0def825b7cae.webp"],
        time: '1 день'
    },
];

export const servicesCustom = [
    {
        id: 'polish',
        title: 'Полировка кузова',
        img: '/polish/process/photo_2023-12-10 22.33.36.jpeg',
        price: {
            text: "от 15 000 ₽",
            value: 15000,
        },
    },
    {
        id: 'poly-wrapping',
        title: 'Оклейка полиуритановой пленкой',
        img: '/services/poly-wrapping.jpg',
        price: {
            text: "от 55 000 ₽",
            value: 55000,
        },
    },
    {
        id: 'vinyl-wrapping',
        title: 'Оклейка виниловой пленкой',
        img: '/services/vinyl-wrapping.jpeg',
        price: {
            text: "от 55 000 ₽",
            value: 55000,
        },
    }
]

export const PRICE_TABLE: IPriceTable[] = [
    {
        serviceID: 'protect',
        services: [
            {
                name: 'Кварц',
                prices: ['800', '1000', '1000', '1200']
            },
            {
                name: 'Жидкое стекло',
                prices: ['4000 - 15000', '5000 - 18000', '5000 - 18000', '5000 - 18000']
            },
            {
                name: 'Керамика',
                prices: ['8000 - 22000', '10000 - 25000', '10000 - 25000', '10000 - 25000']
            },
        ]
    },
    {
        serviceID: 'wash',
        services: [
            {
                name: 'Детейлинг мойка',
                prices: ['4000', '5000', '6000', '7000']
            }
        ]
    },
    {
        serviceID: 'polish',
        services: [
            {
                name: 'Легкая полировка',
                prices: ['15000', '20000', '25000', '30000']
            },
            {
                name: 'Глубокая полировка',
                prices: ['35000', '40000', '45000', '50000']
            }

        ]
    },
    {
        serviceID: 'dry-salon',
        services: [
            {
                name: 'Без снятия сидений',
                prices: ['5000', '7000', '7000', '10000']
            },
            {
                name: 'Со снятием сидений',
                prices: ['12000', '15000', '15000', '18000']
            }
        ]
    },
    {
        serviceID: 'poly-wrapping',
        services: [
            {
                name: 'Передняя часть',
                prices: ['30000', '45000', '45000', '45000']
            },
            {
                name: 'Оклейка всего кузова',
                prices: ['от 170 000']
            },
            {
                name: 'Оклейка фар',
                prices: ['от 4000']
            }
        ]
    },
    {
        serviceID: 'vinyl-wrapping',
        services: [
            {
                name: 'Передняя часть',
                prices: ['30000', '45000', '45000', '45000']
            },
            {
                name: 'Оклейка всего кузова',
                prices: ['от 170 000']
            }

        ]
    },
];