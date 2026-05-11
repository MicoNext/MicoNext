import { Cloud, Code2, Container, Cpu, Database, GitBranch, Network, Settings, Shield, Terminal, Users, Zap } from "lucide-react"

export function getExperienceYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2019
}

export const siteData = {
  navItems: [
    { id: 'about', label: 'Почему я' },
    { id: 'experience', label: 'Опыт' },
    { id: 'skills', label: 'Стек' },
    { id: 'contact', label: 'Связаться' }
  ],
  hero: {
    title: "Mico Next",
    buttonValue: "Обсудить проект",
    description: "Работаем с нуля или уже существующими проектами, снижаем облачный чек на 30-40% и проектируем архитектуру, которая держит 10K RPS. Работаем с AI, высоконагруженными сервисами и микросервисами.",
    stats: [
      { number: '40+', label: 'сданных проектов' },
      { number: '9 из 10', label: 'клиентов возвращаются' },
      { number: '15 мин', label: 'первый ответ' }
    ]
  },
  about: {
    title: "ПОЧЕМУ МЫ",
    title1: "Экспертиза",
    subTitle1: "которая",
    subSubTitle1: "приносит",
    subSubSubTitle1: "деньги",
    title2: "Мы не просто пишем код. Мы нахожу узкие места в вашем продукте и превращаем их в точки роста —",
    subTitle2: "Нащи клиенты зарабатывают больше, а не просто получают «работающее приложение»",
    items: [
      {
        title: "Сокращаем расходы на инфраструктуру",
        description: "В одном из проектов снизили ежемесячный чек AWS с 280 000 ₽ до 168 000 ₽ за счёт грамотного проектирования и перехода на serverless-архитектуру. Это не разовая оптимизация — закладываем экономию на этапе проектирования.",
        metric: "ДО 40% ЭКОНОМИИ",
        gradient: "from-emerald-500 to-cyan-500",
        icon: Shield,
        features: ["Аудит текущей архитектуры", "Переход на serverless", "Прогнозируемый бюджет"]
      },
      {
        title: "Ускоряем time-to-market",
        description: "Для edtech-стартапа оптимизировали API: среднее время ответа упало с 340 мс до 87 мс, а конверсия в регистрацию выросла на 18%. Быстрый продукт — это не комфорт, это прямые деньги.",
        metric: "18% К КОНВЕРСИИ",
        gradient: "from-purple-500 to-pink-500",
        icon: Zap,
        features: ["Оптимизация API", "Аудит узких мест", "Рост конверсии"]
      },
      {
        title: "Интегрируюемся без потерь",
        description: "Вливаемся в проект за 1-2 дня. Уважаем текущий стек и процессы, улучшаем, а не диктую правила.",
        metric: "1-2 ДНЯ НА СТАРТ",
        gradient: "from-blue-500 to-indigo-500",
        icon: Users,
        features: ["Быстрое погружение", "Уважение к стеку"]
      }
    ],
    stats: [
      { 
        number: "40+",
        label: "Проектов под ключ с 2019 года",
        suffix: "",
        gradient: "from-purple-500 to-pink-500",
        delay: "0s"
      },
      { 
        number: getExperienceYears().toString(),
        label: `${getExperienceYears()} ${getExperienceYears() === 1 ? 'год' : getExperienceYears() < 5 ? 'года' : 'лет'} разработки`,
        suffix: "",
        gradient: "from-blue-500 to-cyan-500",
        delay: "0.1s"
      },
      { 
        number: "100",
        label: "Соблюдённых дедлайнов",
        suffix: "%",
        gradient: "from-green-500 to-emerald-500",
        delay: "0.2s"
      },
      { 
        number: "от 2000",
        label: "Стоимость часа экспертизы",
        suffix: " ₽",
        gradient: "from-orange-500 to-red-500",
        delay: "0.3s"
      }
    ],
  },

  skills: {
    title: "СТЕК ТЕХНОЛОГИЙ",
    title1: "ЧТО ИСПОЛЬЗУЕМ",
    subtitle1: "Только боевые инструменты, которые прошли проверку реальными проектами",
    skillIcons: {
      "Node.js": Terminal,
      "Микросервисы": Network,
      "API Design": GitBranch,
      "Архитектура": Settings,
      "React": Code2,
      "TypeScript": Zap,
      "Оптимизация": Settings,
      "UX/UI": Settings,
      "Docker": Container,
      "Kubernetes": Cloud,
      "AWS/GCP": Cloud,
      "CI/CD": GitBranch,
      "PostgreSQL": Database,
      "Redis": Cpu,
      "Брокеры сообщений": Network,
      "MongoDB": Database
    },
    categories: [
      {
        category: "Backend Engineering",
        level: "Эксперты",
        skills: [
          { name: "Node.js", level: 95 },
          { name: "Микросервисы", level: 90 },
          { name: "API Design", level: 92 },
          { name: "Архитектура систем", level: 88 }
        ]
      },
      {
        category: "Frontend & Дизайн",
        level: "Эксперты",
        skills: [
          { name: "Route map", level: 90 },
          { name: "UI", level: 85 },
          { name: "UX", level: 82 },
          { name: "Быстрая работа", level: 90 },
        ]
      },
      {
        category: "DevOps & Инфраструктура",
        level: "Эксперты",
        skills: [
          { name: "Docker", level: 90 },
          { name: "Kubernetes", level: 90 },
          { name: "AWS/GCP", level: 90 },
          { name: "CI/CD", level: 90 }
        ]
      },
      {
        category: "Хранение и очереди",
        level: "Эксперты",
        skills: [
          { name: "MySQL", level: 90 },
          { name: "PostgreSQL", level: 90 },
          { name: "MongoDB", level: 90 },
          { name: "Брокеры сообщений", level: 80 }
        ]
      }
    ],
    stats: {
      title1: "Актуальный стек",
      subTitle1: "Только проверенные технологии",
      title2: "AI-интеграции",
      subTitle2: "GPT, Llama, векторные БД",
      title3: "Полный цикл",
      subTitle3: "От идеи до продакшена и поддержки",
    }
  },

  contacts: {
    title: "СТАРТ РАБОТЫ",
    title1: "ОБСУДИМ ВАШ ПРОЕКТ?",
    title2: "Напишите",
    title3: "нам сейчас",
    title4: "Отвечаем за 15 минут. Детальная оценка, архитектурный план и точный бюджет — в течение 24 часов после погружения в задачу.",
    footerTitle1: "Быстрый старт",
    footerSubTitle1: "Ответ за 15 минут",
    footerTitle2: "Конфиденциально",
    footerSubTitle2: "NDA до начала обсуждения",
    footerTitle3: "Прозрачно",
    footerSubTitle3: "от 2000 ₽ / час работы",
    footerTitle: "Готовы начать?",
    footer: `© Mico Next ${new Date().getFullYear()}`,
    items: [
      {
        platform: "Telegram",
        label: "@dev_okmic",
        url: "https://t.me/dev_okmic",
        icon: "Telegram",
        status: "Онлайн",
        description: "Лучший способ для быстрого старта",
      },
      {
        platform: "Max",
        label: "+7 918 466 5096",
        url: "https://max.ru/u/f9LHodD0cOJmwq4CSauqNaa8RqiSw930HGhG7EZEhHXs4aAL26zHZyqMua4",
        icon: "Max",
        status: "Доступен",
        description: "Пишите или звоните",
      },
      {
        platform: "Email",
        label: "MicoNext@yandex.ru",
        url: "mailto:MicoNext@yandex.ru",
        icon: "Email",
        description: "Для подробного ТЗ и документов",
        status: "Проверяю часто"
      },
      {
        platform: "Phone",
        label: "+7 918 466 50 96",
        url: "tel:79184665096",
        icon: "Phone",
        description: "Проверка статуса и быстрые консультации",
        status: "Доступен"
      },
    ]
  }
}
